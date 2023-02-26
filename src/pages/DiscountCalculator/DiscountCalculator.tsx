import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DiscountCalculatorStyles from "./DiscountCalculator.styles";
import SharedStyles from "../../styles/SharedStyles.styles";

function DiscountCalculator() {
  const [priceInput, setPriceInput] = useState(NaN);
  const [discountInput, setDiscountInput] = useState(NaN);
  const [displayResult, setDisplayResult] = useState(false);
  const [result, setResult] = useState("--");

  function handlePriceInput(priceInput: string) {
    console.log(priceInput);

    const parsedInput = Number.parseFloat(priceInput);

    setPriceInput(parsedInput);
  }

  function handleDiscountInput(discountInput: string) {
    const parsedInput = Number.parseFloat(discountInput);
    setDiscountInput(parsedInput);
  }

  function handleCalculate() {
    if (priceInput && discountInput) {
      const result =
        "$ " + (priceInput * ((100 - discountInput) / 100)).toFixed(3);
      console.log(result);
      setResult(result);
    } else {
      setResult("Please enter valid numbers");
    }
    setDisplayResult(true);
  }

  return (
    <View style={SharedStyles.screenContainer}>
      <View style={SharedStyles.container}>
        <View style={DiscountCalculatorStyles.inputRow}>
          <Text style={SharedStyles.labelText}>Original Price</Text>
          <TextInput
            placeholder="e.g. 99.95"
            keyboardType="number-pad"
            onChangeText={handlePriceInput}
            style={SharedStyles.inputArea}
          />
        </View>
        <View style={DiscountCalculatorStyles.inputRow}>
          <Text style={SharedStyles.labelText}>Discount %</Text>
          <TextInput
            placeholder="e.g. 15"
            keyboardType="number-pad"
            onChangeText={handleDiscountInput}
            style={SharedStyles.inputArea}
          />
        </View>
        <View style={SharedStyles.calculateButton}>
          <Button title="Calculate" onPress={handleCalculate} color="#FF7ED4" />
        </View>
        {displayResult && (
          <View style={SharedStyles.resultContainer}>
            <Text style={SharedStyles.resultLabel}>Discounted Price</Text>
            <Text style={SharedStyles.resultText}>{result}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default DiscountCalculator;
