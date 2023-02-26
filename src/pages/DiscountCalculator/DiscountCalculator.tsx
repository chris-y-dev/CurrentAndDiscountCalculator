import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DiscountCalculatorStyles from "./DiscountCalculator.styles";
import SharedStyles from "../../styles/SharedStyles.styles";
import Colours from "../../styles/Colours.styles";
import { Keyboard } from "react-native";
import { Pressable } from "react-native";

function DiscountCalculator() {
  const [priceInput, setPriceInput] = useState(NaN);
  const [discountInput, setDiscountInput] = useState(NaN);
  const [displayResult, setDisplayResult] = useState(false);
  const [result, setResult] = useState("--");

  function handlePriceInput(priceInput: string) {
    const parsedInput = Number.parseFloat(priceInput);
    setPriceInput(parsedInput);
  }

  function handleDiscountInput(discountInput: string) {
    const parsedInput = Number.parseFloat(discountInput);
    setDiscountInput(parsedInput);
  }

  function handleCalculate() {
    Keyboard.dismiss();

    if (priceInput && discountInput) {
      const result =
        "$ " + (priceInput * ((100 - discountInput) / 100)).toFixed(3);

      setResult(result);
    } else {
      setResult("Please enter valid numbers");
    }
    setDisplayResult(true);
  }

  return (
    <View
      style={[SharedStyles.screenContainer, Colours.screenBackgroundColour]}
    >
      <View style={[SharedStyles.container, Colours.screenBackgroundColour]}>
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
        <View style={[Colours.buttonColour, SharedStyles.customButtonArea]}>
          <Pressable
            style={({ pressed }) => pressed && [Colours.buttonColour_pressed]}
            onPress={() => handleCalculate()}
          >
            <Text style={[SharedStyles.customButtonText]}>CONVERT</Text>
          </Pressable>
        </View>
        {displayResult && (
          <View style={SharedStyles.resultContainer}>
            <Text style={SharedStyles.resultLabel}>Discounted Price: </Text>
            <Text style={SharedStyles.resultText}>{result}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default DiscountCalculator;
