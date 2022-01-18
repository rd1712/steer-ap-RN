import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WhiteBackground = (props) => {
    return (
        <View style={{ ...styles.whiteBackground, ...props.style }}>
            {props.children}
        </View >
    )
}

export default WhiteBackground

const styles = StyleSheet.create({
    whiteBackground: {
        // marginTop: -172,
        width: '100%',
        height: '100%',
        backgroundColor: "white",
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        shadowColor: '#D6DEE3',
        elevation: 5,
    },
})
