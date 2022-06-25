import { View, Text } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/apartment.png"),
    text: "Apartment",
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

const Categories = () => {
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
};

export default Categories;
