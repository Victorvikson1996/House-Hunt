import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../utils";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Home");
  }, 3000);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blue }}>
      <View style={styles.container}>
        <Text style={styles.text}>House Hunt</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default SplashScreen;
