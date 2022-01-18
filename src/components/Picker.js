import React, { useState } from "react";
import { Modal, Text, TouchableHighlight, View, StyleSheet, FlatList, Button } from "react-native";

const Picker = (props) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        position: "absolute",
      }}
    >
      <Modal
        // animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          props.setVisibility(false);
        }}
        style={styles.modal}
      >
        {/* <View style={{ borderRadius: 16, }}> */}
        <TouchableHighlight
          style={styles.container}
          onPress={() => props.setVisibility(false)}
          underlayColor={"#333333cc"}
        >
          <View>
            <FlatList
              // style={{ backgroundColor: "#FDFDFD" }}
              contentContainerStyle={{ borderRadius: 16, overflow: "hidden" }}
              data={props.data}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <TouchableHighlight
                    // underlayColor={"transparent"}
                    onPress={() => {
                      props.setVisibility(false);
                      props.onValueChange(item[props.value], index);
                      props.checker();
                    }}
                  >
                    <View
                    // style={styles.listContainer}
                    >
                      <Text style={styles.itemText}>{item[props.label]}</Text>
                    </View>
                  </TouchableHighlight>
                );
              }}
            />
          </View>
        </TouchableHighlight>
        {/* </View> */}
      </Modal>
    </View>
  );
};

// Picker.propTypes = {
//   data: PropTypes.array.isRequired,
//   value: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onValueChange: PropTypes.func,
//   renderRow: PropTypes.func,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#333333cc",
    padding: 16,
  },
  itemText: {
    padding: 16,
    fontSize: 18,
    color: "#222",
    borderTopWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FDFDFD",
    // borderRadius: 16,
  },
  listContainer: {
    paddingLeft: "3%",
  }
});

export default Picker;
