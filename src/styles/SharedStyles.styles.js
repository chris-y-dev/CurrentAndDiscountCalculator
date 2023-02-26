import { StyleSheet } from "react-native";


const SharedStyles = StyleSheet.create({
    screenContainer:{
        height: '100%',
      },
    
      container: {
        flex: 1,
        margin: 24,
      },

      title: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 40,
        fontFamily: "Quicksand_500Medium"
      },
    
      labelText: {
        fontSize: 20,
        color: "#ffffff",
        fontFamily: "Quicksand_500Medium"
      },

      customButtonArea: {
        borderRadius: 8,
        width: "100%",
        marginVertical: "8%",
        alignSelf: "center"
      },
    
      customButtonText: {
        textAlign: "center",
        color: "white",
        padding: 14,
        fontSize: 16,
        fontFamily: "Quicksand_500Medium"
      },
    
      inputArea:{
        marginVertical: 10,
        padding: 10,
        fontSize: 16,
        borderWidth: 0,
        borderRadius: 6,
        backgroundColor: "#FFEEFE"
      },
    
      resultContainer:{
        marginTop: "0%",
      },
    
      resultLabel:{
        fontSize: 20,
        marginTop: "2%",
        color: "white",
        fontFamily: "Quicksand_500Medium"
      },
    
      resultText: {
        marginTop: 0,
        fontSize: 30,
        color: "#FF3795",
        textAlign: 'right',
        fontFamily: "Quicksand_700Bold"
      },
    
      calculateButton: {
        marginTop: 100,
        marginHorizontal: 20,
      }
})

export default SharedStyles