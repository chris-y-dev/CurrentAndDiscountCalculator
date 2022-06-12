import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function DiscountCalculator({styles}) {
    const [priceInput, setPriceInput] = useState(0);
    const [discountInput, setDiscountInput] = useState(0);
    const [displayResult, setDisplayResult] = useState(false);
    const [result, setResult] = useState('--');

    function handlePriceInput(priceInput){
        console.log(priceInput)
        setPriceInput(priceInput)
    }

    function handleDiscountInput(discountInput){
        console.log(discountInput)
        setDiscountInput(discountInput)
    }

    function handleCalculate(){
        console.log("Price: " + priceInput)
        console.log("Discount " + discountInput + "%")
        const result = (priceInput * ((100-discountInput)/100)).toFixed(3)
        console.log(result)
        setResult(result);
        setDisplayResult(true);
    }


  return (
    <View style={styles.containerFull}>
      <View style={styles.container}>
        <View style={DiscountCalculatorStyles.inputRow}>
          <Text style={styles.labelText}>Original Price</Text>
          <TextInput 
            placeholder='e.g. 99.95'
            keyboardType='number-pad'
            onChangeText={handlePriceInput}
            style={styles.inputArea}
          />
        </View>
        <View style={DiscountCalculatorStyles.inputRow}>
          <Text style={styles.labelText}>Discount %</Text>
          <TextInput 
            placeholder='e.g. 15'
            keyboardType='number-pad'
            onChangeText={handleDiscountInput}
            style={styles.inputArea}
          />
        </View>
        <View style={styles.calculateButton}>
          <Button title="Calculate" onPress={handleCalculate} color="#FF7ED4"/>
        </View>
          {displayResult && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultLabel}>Discounted Price</Text>
              <Text style={styles.resultText}>${result}</Text>
            </View>
          )}
      </View>
    </View>
  )
}

export default DiscountCalculator;

const DiscountCalculatorStyles = StyleSheet.create({
  inputRow: {
    marginVertical: 6
  }
})
