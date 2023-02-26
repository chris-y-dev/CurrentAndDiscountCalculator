import { StyleSheet } from "react-native"


const CurrencyConverterStyles = StyleSheet.create({

    selectRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: "3%",
    },
    dropDown:{
        borderRadius: 8,
    },

    dropDown_font: {
        fontSize: 16,
        fontFamily: "Quicksand_500Medium"
    },

    inputContainer: {
        marginTop: "10%",
    }
})

export default CurrencyConverterStyles;