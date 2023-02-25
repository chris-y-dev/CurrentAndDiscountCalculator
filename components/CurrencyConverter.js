import React, {useState} from 'react'
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DropDownIcon from './DropDownIcon';
import {API_KEY} from '@env';

function CurrencyConverter({styles}) {

    const [amountInput, setAmountInput] = useState();
    const [baseCurrency, setBaseCurrency] = useState("");
    const [convertCurrency, setConvertCurrency] = useState("");
    const [convertedResult, setConvertedResult] = useState(0);
    const [convertedSymbol, setConvertedSymbol] = useState("");
    const [displayResult, setDisplayResult] = useState(false)

    const currencies = ["AUD", "GBP", "HKD", "JPY", "USD"]

    //API related
    var myHeaders = new Headers();
    myHeaders.append("apikey", API_KEY);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    
    //symbols
    function getCurrencySymbol(){
        switch(convertCurrency){
            case "AUD":
            case "HKD":
            case "USD":
                setConvertedSymbol("$");
                break;
            case "GBP":
                setConvertedSymbol("£");
                break;
            case "JPY":
                setConvertedSymbol("¥");
                break;
            default: 
                setConvertedSymbol("$");
                break;
        }
    }

    
    function handleAmountInput(amountInput){
        setAmountInput(amountInput);
    }

    //fetch request
    async function handleConvert(){
        console.log(baseCurrency)
        console.log(convertCurrency)

        if(!amountInput){
            setConvertedResult("Please enter an amount")
            displayConversionResult()
        } else {

            
            try{
                const result = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${convertCurrency}&from=${baseCurrency}&amount=${amountInput}`, requestOptions)
                
                const resultJson = await result.json();
                
                console.log(resultJson)
                
                //extract the data
                console.log(resultJson.info.rate)
                console.log(resultJson.result)
                setConvertedResult(resultJson.result)
                getCurrencySymbol();
                displayConversionResult();
                
            } catch(error){
                console.log(error)
                setConvertedResult("Error, unable to convert currencies")
                displayConversionResult();
                
            }
        }
    }

    function displayConversionResult(){
        setDisplayResult(true);
    }

  return (
    <View style={styles.containerFull}>
        <View style={styles.container}>
            <View style={currencyConverterStyles.selectRow}>
                <Text style={styles.labelText}>From: </Text>
                <SelectDropdown 
                    data={currencies}
                    onSelect={(selectedItem, index)=>{
                        console.log("Base: " + selectedItem, index)
                        setBaseCurrency(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    buttonStyle={currencyConverterStyles.dropDown} 
                    renderDropdownIcon={()=> <DropDownIcon />}
                />
            </View>

            <View style={currencyConverterStyles.selectRow}>
                <Text style={styles.labelText}>Convert To: </Text>
                <SelectDropdown 
                    data={currencies}
                    onSelect={(selectedItem, index)=>{
                        console.log("Convert to: " + selectedItem, index)
                        setConvertCurrency(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    buttonStyle={currencyConverterStyles.dropDown}
                    renderDropdownIcon={()=> <DropDownIcon />}
                />
            </View>
            <View style={currencyConverterStyles.inputContainer}>
                <Text style={styles.labelText}>Enter Amount: </Text>
                <TextInput 
                    placeholder='e.g. 99.95'
                    keyboardType='number-pad'
                    onChangeText={handleAmountInput}
                    style={styles.inputArea}
                    />
                    <View style={styles.calculateButton}>
                        <Button title="Convert" onPress={handleConvert} color="#FF7ED4"/>
                    </View>
            </View>
            <View style={styles.resultContainer}>
                
                {displayResult && 
                (
                    <View>
                        <Text style={styles.resultLabel}>Result: </Text>
                        <Text style={styles.resultText}>{convertedSymbol} {convertedResult}</Text>
                    </View>
                    )}
            </View>
        </View>
    </View>
  )
}

export default CurrencyConverter

const currencyConverterStyles = StyleSheet.create({
    selectRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    dropDown:{
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
        backgroundColor: '#FFEEFE'

    },

    inputContainer: {
        marginTop: 30,
    }

})