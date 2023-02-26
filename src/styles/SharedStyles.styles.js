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
        marginBottom: 40
      },
    
      labelText: {
        fontSize: 20,
      },
    
      inputArea:{
        marginVertical: 10,
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'white',
        backgroundColor: "#FFEEFE"
      },
    
      resultContainer:{
        marginTop: 10,
      },
    
      resultLabel:{
        fontSize: 20,
        marginTop: 30,
      },
    
      resultText: {
        marginTop: 10,
        fontSize: 32,
        fontWeight: 'bold',
        color: "#FF3795",
        textAlign: 'right'
      },
    
      calculateButton: {
        marginTop: 24,
        marginHorizontal: 30
      }
})

export default SharedStyles