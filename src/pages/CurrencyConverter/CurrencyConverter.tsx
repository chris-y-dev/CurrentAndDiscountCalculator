import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import GetCurrencyConversion from "../../api/GetCurrencyConversion";
import DropDownIcon from "../../components/DropDownIcon";
import CurrencyConverterStyles from "./CurrenConverter.styles";

function CurrencyConverter(props: { styles: any }) {
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

        console.log(resultJson.result);
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
    <View style={props.styles.containerFull}>
      <View style={props.styles.container}>
        <View style={CurrencyConverterStyles.selectRow}>
          <Text style={props.styles.labelText}>From: </Text>
          <SelectDropdown
            data={currencies}
            onSelect={(selectedItem, index) => {
              setBaseCurrency(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            buttonStyle={CurrencyConverterStyles.dropDown}
            renderDropdownIcon={() => <DropDownIcon />}
          />
        </View>

        <View style={CurrencyConverterStyles.selectRow}>
          <Text style={props.styles.labelText}>Convert To: </Text>
          <SelectDropdown
            data={currencies}
            onSelect={(selectedItem, index) => {
              setTargetCurrency(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            buttonStyle={CurrencyConverterStyles.dropDown}
            renderDropdownIcon={() => <DropDownIcon />}
          />
        </View>
        <View style={CurrencyConverterStyles.inputContainer}>
          <Text style={props.styles.labelText}>Amount to convert: </Text>
          <TextInput
            placeholder="e.g. 99.95"
            keyboardType="number-pad"
            onChangeText={handleAmountInput}
            style={props.styles.inputArea}
          />
          <View style={props.styles.calculateButton}>
            <Button title="Convert" onPress={handleConvert} color="#FF7ED4" />
          </View>
        </View>
        <View style={props.styles.resultContainer}>
          {displayResult && (
            <View>
              <Text style={props.styles.resultLabel}>Result: </Text>
              <Text style={props.styles.resultText}>
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
