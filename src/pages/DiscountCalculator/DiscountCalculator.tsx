import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DiscountCalculatorStyles from "./DiscountCalculator.styles";

function DiscountCalculator(props: { styles: any }) {
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
    <View style={props.styles.containerFull}>
      <View style={props.styles.container}>
        <View style={DiscountCalculatorStyles.inputRow}>
          <Text style={props.styles.labelText}>Original Price</Text>
          <TextInput
            placeholder="e.g. 99.95"
            keyboardType="number-pad"
            onChangeText={handlePriceInput}
            style={props.styles.inputArea}
          />
        </View>
        <View style={DiscountCalculatorStyles.inputRow}>
          <Text style={props.styles.labelText}>Discount %</Text>
          <TextInput
            placeholder="e.g. 15"
            keyboardType="number-pad"
            onChangeText={handleDiscountInput}
            style={props.styles.inputArea}
          />
        </View>
        <View style={props.styles.calculateButton}>
          <Button title="Calculate" onPress={handleCalculate} color="#FF7ED4" />
        </View>
        {displayResult && (
          <View style={props.styles.resultContainer}>
            <Text style={props.styles.resultLabel}>Discounted Price</Text>
            <Text style={props.styles.resultText}>{result}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default DiscountCalculator;
