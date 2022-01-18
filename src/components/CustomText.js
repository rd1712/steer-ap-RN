import React from "react";
import { View, Text, TextInput } from "react-native";

const CustomText = (props) => {
  return <View>
    <Text style={styles.title}>{props.prop1}</Text>
    <TextInput style={styles.Input}  placeholder={props.prop2} />
    </View>
};
const styles ={
  Input : {left: 14,
    top: 172,
    width: '91.11%',
    height: 48,
    marginBottom: 54,
    paddingLeft: 17.73,
    backgroundColor: '#F2F2F4',
    fontFamily: "Nuninto",
    borderRadius: 16,
    
  },
    title: {
      position: 'absolute',
      height: 22,
      width: 91,
      left: 30,
      top: 142,
      fontFamily: "Nuninto",
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: 22,
      color: '#313537',

    }
}
export default CustomText;
