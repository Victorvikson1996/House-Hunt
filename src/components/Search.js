import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../utils";

const { width, height } = Dimensions.get("screen");

const Search = (props) => {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      style={props.style}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
});

export default Search;
