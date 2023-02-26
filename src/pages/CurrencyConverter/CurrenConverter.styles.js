import { StyleSheet } from "react-native"


const CurrencyConverterStyles = StyleSheet.create({
    selectRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    dropDown:{
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
    },

    inputContainer: {
        marginTop: 30,
    }
})

export default CurrencyConverterStyles;