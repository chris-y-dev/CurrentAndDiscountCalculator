import { StyleSheet } from 'react-native';
import CurrencyConverter from './src/pages/CurrencyConverter/CurrencyConverter';
import DiscountCalculator from './src/pages/DiscountCalculator/DiscountCalculator';
import Home from "./src/pages/Home/Home"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold
} from "@expo-google-fonts/quicksand";

export default function App() {
  
  const Stack = createNativeStackNavigator();

  
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                children = { () => <Home />}
                options={{ title: 'Home'}}
              />
     
            <Stack.Screen 
              name="DiscountCalculator" 
              children = { () => <DiscountCalculator />}
            />
            <Stack.Screen 
              name="CurrencyConverter" 
              children = {() => <CurrencyConverter />} 
            />
        
        </Stack.Navigator>
      </NavigationContainer>
  );
}
