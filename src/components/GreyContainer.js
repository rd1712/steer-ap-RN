import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const GreyContainer = (props) => {
    return (
        <TouchableOpacity
            onPress={props.OnPress}
            style={styles.greyContainer}>
            <Text style={props.Text === "" ? styles.placeholderStyle : styles.textStyle}>
                {props.Text === "" ? props.Placeholder : props.Text}
            </Text>
        </TouchableOpacity>
    )
}

export default GreyContainer

const styles = StyleSheet.create({
    greyContainer: {
        backgroundColor: "#F2F2F4",
        borderRadius: 16,
        width: "85%",
        height: 48,
        justifyContent: "center",
        paddingLeft: "6%",
    },
    placeholderStyle: {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 19,
        color: "rgba(0, 0, 0, 0.32)",
    },
    textStyle: {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 19,
        color: "rgba(0, 0, 0, 0.87)",
    }
})
