import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, Keyboard } from 'react-native'

const BlueButton = (props) => {
    return (
        <TouchableOpacity style={{
            ...styles.button,
            backgroundColor: props.color
        }}
            disabled={props.disabled}
            onPress={props.onPress}
        >
            <Text style={{ ...styles.text, ...props.style }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default BlueButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        width: 128,
        height: 36,
        justifyContent: 'center',
        marginTop: '5%',
    },
    text: {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.06,
        textTransform: 'uppercase',
        color: "#F3F3F3",
        textAlign: 'center',

    }
})
