import { StyleSheet } from "react-native";


const HomeStyles = StyleSheet.create({
    
    buttons: {
      alignItems: "center",
      marginBottom: 80,
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

    versionText:{
      color: 'white',
      textAlign: 'right'
    }
  });
  
  export default HomeStyles;