import React from 'react'
import {View, Text, Button, StyleSheet, Pressable, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home({ styles }) {

    const navigation = useNavigation();

  return (
    <View style={styles.containerFull}>

        <View style={styles.container}>
            <Text style={homeStyles.title}>Welcome to Mum's App</Text>
            <View style={homeStyles.buttons}>
                <View 
                style={homeStyles.customButtonArea}>
                    <Pressable 
                        style={( {pressed }) => pressed && homeStyles.pressedButton}
                        onPress = {() => 
                    navigation.navigate('DiscountCalculator', {name: 'DiscountCalculator'})}>
                        <Text 
                    style={homeStyles.customButtonText}
                    >DISCOUNT CALCULATOR</Text>
                    </Pressable>
                </View>

                <View 
                style={homeStyles.customButtonArea}>
                    <Pressable 
                        style={( {pressed }) => pressed && homeStyles.pressedButton}
                        onPress = {() => 
                        navigation.navigate('CurrencyConverter', {name: 'CurrencyConverter'})}>
                        <Text 
                    style={homeStyles.customButtonText}
                    >CURRENCY CONVERTER</Text>
                    </Pressable>
                </View>
            </View>
            <View style={homeStyles.imageContainer}>
                
            </View>    
        </View>
    </View>
  )
}

export default Home

const homeStyles = StyleSheet.create({
    title:{
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40
    },

    buttons:{
        alignItems: 'center',
        marginBottom: 80
    },

    customButtonArea: {
        backgroundColor: '#EC4CBC',
        borderRadius: 6,
        width: 240,
        marginVertical: 24,
    },

    customButtonText:{
        textAlign: 'center',
        color: 'white',
        padding: 14,
    },

    pressedButton: {
        opacity: 1,
        backgroundColor: '#FF95F3',
        borderRadius: 6,
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        height: 100,
        width: 100
    }
})