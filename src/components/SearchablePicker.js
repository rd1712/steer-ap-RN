import React, { useState } from "react";
import { Modal, Text, TouchableHighlight, View, StyleSheet, FlatList, Button, TextInput } from "react-native";

import Search from "../icon-buttons/Search";

const SearchablePicker = (props) => {
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
        <TouchableHighlight
          style={styles.container}
          onPress={() => props.setVisibility(false)}
          underlayColor={"#333333cc"}
        >
          <View style={styles.modal}>
            <View>
              <Search />
              <TextInput style={styles.textInput}></TextInput>
            </View>

            <FlatList
              // style={{ backgroundColor: "#FDFDFD" }}
              // contentContainerStyle={{ borderRadius: 16, overflow: "hidden" }}
              initialNumToRender={15}
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

// SearchablePicker.propTypes = {
//   data: PropTypes.array.isRequired,
//   value: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onValueChange: PropTypes.func,
//   renderRow: PropTypes.func,
// };

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    borderColor: "#CCC",
    backgroundColor: "#FDFDFD",
  },
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
  textInput: {
    margin: 16,
    fontSize: 18,
    color: "#222",
    backgroundColor: "#F2F2F4",
  },
  listContainer: {
    paddingLeft: "3%",
  },
});

export default SearchablePicker;
