import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../utils";
import { Categories, HouseItem, Search } from "../components";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Home = () => {
  const [house, setHouse] = useState("");
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={{ padding: 10 }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Find best place nearby 👌</Text>
        </View>
        <View style={styles.searchContainer}>
          <Search
            placeholder="Find best place nearby"
            value={house}
            onChangeText={(text) => setHouse(text)}
            style={styles.search}
          />

          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign
              name="bars"
              size={35}
              color={COLORS.blue}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Categories />
        </View>
        <View style={styles.houseContainer}>
          <HouseItem />
        </View>
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
  text: {
    fontSize: 20,
  },
  text2: {
    fontSize: 20,
    color: COLORS.blue,
  },
  textContainer: {
    marginLeft: 20,
    paddingTop: 30,
  },
  search: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: COLORS.grey,
    borderWidth: 1,
    width: width * 0.6,
  },
  searchContainer: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyle: {
    paddingHorizontal: 6,
    paddingVertical: 5,
    height: 50,
    width: 50,
    marginRight: 60,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginTop: 10,
  },
  houseContainer: {
    marginTop: 20,
  },
});

export default Home;
