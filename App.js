
import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DiscountCalculator from './components/DiscountCalculator';
import CurrencyConverter from './components/CurrencyConverter';
import Home from './components/Home';
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
            {/* <Stack.Screen 
              name="DiscountCalculator" 
              component={DiscountCalculator} 
            /> */}
            <Stack.Screen 
              name="DiscountCalculator" 
              children = { () => <DiscountCalculator styles={styles}/>}
            />
            <Stack.Screen 
              name="CurrencyConverter" 
              children = {() => <CurrencyConverter styles={styles}/>} 
            />
        
              {/* <DiscountCalculator /> */}
            {/* <CurrencyConverter /> */}
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
  }


});
