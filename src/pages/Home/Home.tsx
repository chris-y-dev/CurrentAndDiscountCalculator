import React from "react";
import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import AnimatedPig from "../../components/AnimatedPig";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeStyles from "./Home.styles";
import SharedStyles from "../../styles/SharedStyles.styles";
import Colours from "../../styles/Colours.styles";

function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View
      style={[SharedStyles.screenContainer, Colours.screenBackgroundColour]}
    >
      <View style={SharedStyles.container}>
        <Text style={[SharedStyles.title, Colours.titleColour]}>
          Currency & Discount Calculator
        </Text>
        <View style={HomeStyles.buttons}>
          {/* Currency Button */}
          <View style={[SharedStyles.customButtonArea, Colours.buttonColour]}>
            <Pressable
              style={({ pressed }) =>
                pressed && [
                  HomeStyles.pressedButton,
                  Colours.buttonColour_pressed,
                ]
              }
              onPress={() =>
                navigation.navigate("CurrencyConverter", {
                  name: "CurrencyConverter",
                })
              }
            >
              <Text style={[SharedStyles.customButtonText]}>
                CURRENCY CONVERTER
              </Text>
            </Pressable>
          </View>

          {/* Discount Button */}
          <View style={[SharedStyles.customButtonArea, Colours.buttonColour]}>
            <Pressable
              style={({ pressed }) =>
                pressed && [
                  HomeStyles.pressedButton,
                  Colours.buttonColour_pressed,
                ]
              }
              onPress={() =>
                navigation.navigate("DiscountCalculator", {
                  name: "DiscountCalculator",
                })
              }
            >
              <Text style={[SharedStyles.customButtonText]}>
                DISCOUNT CALCULATOR
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={HomeStyles.imageContainer}>
          <AnimatedPig />
        </View>
      </View>
    </View>
  );
}

export default Home;
