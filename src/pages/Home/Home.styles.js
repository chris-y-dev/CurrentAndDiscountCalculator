import { StyleSheet } from "react-native";


const HomeStyles = StyleSheet.create({

  
    
    buttons: {
      alignItems: "center",
      marginBottom: 80,
    },
  
    customButtonArea: {
      borderRadius: 6,
      width: 240,
      marginVertical: 24,
    },
  
    customButtonText: {
      textAlign: "center",
      color: "white",
      padding: 14,
    },
  
    pressedButton: {
      opacity: 1,
      borderRadius: 6,
    },
  
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
  
    image: {
      height: 100,
      width: 100,
    },
  });
  
  export default HomeStyles;