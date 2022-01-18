import React from "react";
import {Text, Pressable, onPress, StyleSheet} from "react-native";
const ButtonWithBackground = (props) => {
    return <Pressable style={styles.button} onPress={onPress}><Text style={styles.text}>{props.prop1}</Text>
    </Pressable>
};
const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        width: 128,
        justifyContent: 'center',
        position: 'absolute',
        height: 36,
        top: 458,
        backgroundColor: '#004475',
        borderRadius: 8,
}, 
    text: {
        
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 0.06,
        textTransform: 'uppercase',
        color: '#F3F3F3',

  }
});
export default ButtonWithBackground;