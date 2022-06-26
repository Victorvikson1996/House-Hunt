import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import React from "react";

import { COLORS } from "../utils";
import Home from "../screens/Home";

const items = [
  {
    image: require("../assets/images/apartment.png"),
    text: "Home",
  },
  {
    image: require("../assets/images/house.png"),
    text: "House",
  },
  {
    image: require("../assets/images/building.png"),
    text: "Building",
  },
  {
    image: require("../assets/images/room.png"),
    text: "Room",
  },
];

const Categories = (props) => {
  const [active, setActive] = React.useState("Home");
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableOpacity
          active={active}
          setActive={setActive}
          key={index}
          style={styles.container}
          onPress={(text) => setActive(text)}
        >
          <Image source={item.image} style={styles.imageStyle} />
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    // marginVertical: 15,
    backgroundColor: COLORS.blue,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 15,
    width: 90,
    height: 90,
    marginTop: 10,
    alignItems: "center",
    marginRight: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    tintColor: COLORS.white,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default Categories;
