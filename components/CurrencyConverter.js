import React from 'react'
import {View, TextInput, Text, Button} from 'react-native';

function CurrencyConverter() {


    //fetch API


  return (
    <View>
        <Text>Currency Converter</Text>
        <Text>Base</Text>
        <TextInput 
                placeholder='Enter full price'
                keyboardType='number-pad'
                />
        <Text>Converted</Text>
    </View>
  )
}

export default CurrencyConverter