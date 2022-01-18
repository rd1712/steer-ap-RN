import React from "react";
import {Text, View} from "react-native";

const Heading = () => {
    return <View>
        <Text style={styles.heading}>Welcome to Steer</Text>
        <Text style={styles.box} >Hello</Text>
    </View>
};

const styles ={
    heading: {
    
        position: 'absolute',
        height: 27,
        left: 120,
        top: 43,
        
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 27,
        letterSpacing: -0.02,
        
        color: '#FCFCFC',
    },
    box: {
        position:'absolute',
        width: '45.83%',
        height: '22.22%',
        alignSelf: 'center',
        top: 103,
        backgroundColor:'#C4C4C4',
    }
};
export default Heading;