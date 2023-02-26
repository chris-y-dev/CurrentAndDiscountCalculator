import React from "react";
import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import AnimatedPig from "../../components/AnimatedPig";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeStyles from "./Home.styles";
import SharedStyles from "../../styles/SharedStyles.styles";
import Colours from "../../styles/Colours.styles";

import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";

function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={[SharedStyles.screenContainer, Colours.screenBackgroundColour]}
    >
      <View style={SharedStyles.container}>
        <Text
          style={[
            { fontFamily: "Quicksand_500Medium" },
            SharedStyles.title,
            Colours.titleColour,
          ]}
        >
          Currency & Discount Calculator
        </Text>
        <View style={HomeStyles.buttons}>
          {/* Currency Button */}
          <View style={[HomeStyles.customButtonArea, Colours.buttonColour]}>
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
              <Text
                style={[
                  HomeStyles.customButtonText,
                  { fontFamily: "Quicksand_500Medium" },
                ]}
              >
                CURRENCY CONVERTER
              </Text>
            </Pressable>
          </View>

          {/* Discount Button */}
          <View style={[HomeStyles.customButtonArea, Colours.buttonColour]}>
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
              <Text
                style={[
                  HomeStyles.customButtonText,
                  { fontFamily: "Quicksand_500Medium" },
                ]}
              >
                DISCOUNT CALCULATOR
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={HomeStyles.imageContainer}>
          <AnimatedPig homeStyles={HomeStyles} />
        </View>
      </View>
    </View>
  );
}

export default Home;
