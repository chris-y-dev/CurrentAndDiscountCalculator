import { StyleSheet } from 'react-native';
import CurrencyConverter from './src/pages/CurrencyConverter/CurrencyConverter';
import DiscountCalculator from './src/pages/DiscountCalculator/DiscountCalculator';
import Home from "./src/pages/Home"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (

      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                children = { () => <Home styles={styles} />}
                options={{ title: 'Home'}}
              />
     
            <Stack.Screen 
              name="DiscountCalculator" 
              children = { () => <DiscountCalculator styles={styles}/>}
            />
            <Stack.Screen 
              name="CurrencyConverter" 
              children = {() => <CurrencyConverter styles={styles}/>} 
            />
        
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerFull:{
    height: '100%',
    backgroundColor: '#FFD8F4'
  },

  container: {
    flex: 1,
    margin: 24,
    backgroundColor: '#FFD8F4'
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


});
