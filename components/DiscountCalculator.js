import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function discountCalculator() {
    const [priceInput, setPriceInput] = useState(0);
    const [discountInput, setDiscountInput] = useState(0);
    const [displayResult, setDisplayResult] = useState(false);
    const [result, setResult] = useState();

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
    <View>
        <View>
          <Text>Original Price</Text>
          <TextInput 
            placeholder='Enter full price'
            keyboardType='number-pad'
            onChangeText={handlePriceInput}
            />
          <Text>Discount %</Text>
          <TextInput 
          placeholder='Enter Discount %'
          keyboardType='number-pad'
          onChangeText={handleDiscountInput}
          />
          <Button title="Calculate" onPress={handleCalculate}/>
        </View>
        <View>
          <Text>Discounted Price</Text>
          {displayResult && <Text>${result}</Text>}
        </View>
      </View>
  )
}

export default discountCalculator;

