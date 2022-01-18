import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const TextInputContainer = (props) => {
  return (
    <View style={{ ...styles.textInputContainer, ...props.style }}>
      <TextInput
        {...props}
        style={{ ...styles.InputText, textAlign: props.textAlign }}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default TextInputContainer;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "#F2F2F4",
    borderRadius: 16,
    justifyContent: "center",
    width: "85%",
    maxWidth: 400,
    height: 48,
  },
  InputText: {
    fontSize: 14,
  },
});
