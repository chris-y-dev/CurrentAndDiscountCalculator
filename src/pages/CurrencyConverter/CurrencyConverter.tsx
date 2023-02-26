import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import GetCurrencyConversion from "../../api/GetCurrencyConversion";
import DropDownIcon from "../../components/DropDownIcon";
import CurrencyConverterStyles from "./CurrenConverter.styles";
import SharedStyles from "../../styles/SharedStyles.styles";
import Colours from "../../styles/Colours.styles";
import { Pressable } from "react-native";
import { Keyboard } from "react-native";
import GetAvailableCurrencyCodes from "../../api/GetAvailableCurrencyCodes";

function CurrencyConverter() {
  const [amountInput, setAmountInput] = useState<number>();
  const [baseCurrency, setBaseCurrency] = useState<string | undefined>(
    undefined
  );
  const [targetCurrency, setTargetCurrency] = useState<string | undefined>(
    undefined
  );
  const [convertedResult, setConvertedResult] = useState<number | string>();
  const [convertedSymbol, setConvertedSymbol] = useState("");
  const [displayResult, setDisplayResult] = useState(false);

  const currencies = ["AUD", "GBP", "HKD", "JPY", "USD"];

  //API related

  //symbols
  function getCurrencySymbol() {
    switch (targetCurrency) {
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

  function handleAmountInput(amountInput: string) {
    const numberInput = Number.parseFloat(amountInput);

    setAmountInput(numberInput);

    console.log(amountInput);
    console.log(numberInput);
  }

  //fetch request
  async function handleConvert() {
    Keyboard.dismiss();

    // var result = await GetAvailableCurrencyCodes();
    // console.log(result.symbols);
    // console.log(Object.keys(result.symbols));

    if (!amountInput || Number.isNaN(amountInput)) {
      setConvertedResult("Enter a numeric amount");
      displayConversionResult();
    } else if (!baseCurrency || !targetCurrency) {
      setConvertedResult("Select currencies");
      displayConversionResult();
    } else {
      try {
        const resultJson: any = await GetCurrencyConversion(
          targetCurrency!,
          baseCurrency!,
          amountInput
        );

        setConvertedResult(resultJson.result);
        getCurrencySymbol();
        displayConversionResult();
      } catch (error) {
        console.log(error);
        setConvertedResult("Error, unable to convert currencies");
        displayConversionResult();
      }
    }
  }

  function displayConversionResult() {
    setDisplayResult(true);
  }

  return (
    <View
      style={[SharedStyles.screenContainer, Colours.screenBackgroundColour]}
    >
      <View style={[SharedStyles.container, Colours.screenBackgroundColour]}>
        <View style={CurrencyConverterStyles.selectRow}>
          <Text style={[SharedStyles.labelText]}>From: </Text>
          <SelectDropdown
            data={currencies}
            onSelect={(selectedItem) => {
              setBaseCurrency(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            buttonStyle={[
              CurrencyConverterStyles.dropDown,
              Colours.dropDownBackground,
            ]}
            buttonTextStyle={[CurrencyConverterStyles.dropDown_font]}
            renderDropdownIcon={() => <DropDownIcon />}
          />
        </View>

        <View style={CurrencyConverterStyles.selectRow}>
          <Text style={[SharedStyles.labelText]}>Convert To: </Text>
          <SelectDropdown
            data={currencies}
            onSelect={(selectedItem, index) => {
              setTargetCurrency(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            buttonStyle={[
              CurrencyConverterStyles.dropDown,
              Colours.dropDownBackground,
            ]}
            buttonTextStyle={[CurrencyConverterStyles.dropDown_font]}
            renderDropdownIcon={() => <DropDownIcon />}
          />
        </View>
        <View style={CurrencyConverterStyles.inputContainer}>
          <Text style={SharedStyles.labelText}>Amount to convert: </Text>
          <TextInput
            placeholder="e.g. 99.95"
            keyboardType="number-pad"
            onChangeText={handleAmountInput}
            style={SharedStyles.inputArea}
          />
          <View style={[Colours.buttonColour, SharedStyles.customButtonArea]}>
            <Pressable
              style={({ pressed }) => pressed && [Colours.buttonColour_pressed]}
              onPress={() => handleConvert()}
            >
              <Text style={[SharedStyles.customButtonText]}>CONVERT</Text>
            </Pressable>
          </View>
        </View>
        <View style={SharedStyles.resultContainer}>
          {displayResult && (
            <View>
              <Text style={SharedStyles.resultLabel}>Result: </Text>
              <Text style={SharedStyles.resultText}>
                {convertedSymbol} {convertedResult}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default CurrencyConverter;
