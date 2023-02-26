import React from "react";
import { Image, StyleSheet } from "react-native";

function DropDownIcon() {
  return (
    <Image
      source={require("../../assets/dropDown_icon.png")}
      style={styles.icon}
    />
  );
}

export default DropDownIcon;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
