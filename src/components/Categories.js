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
import { Colors } from "react-native/Libraries/NewAppScreen";

const items = [
  {
    image: require("../assets/images/apartment.png"),
    text: "Home",
  },
  {
    image: require("../assets/images/house.png"),
    text: "Office",
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

const ScrollButton = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setActiveCategory(index)}
          style={[
            {
              marginHorizontal: 15,
              // marginVertical: 15,
              backgroundColor: COLORS.greyChange,
              paddingVertical: 6,
              paddingHorizontal: 18,
              borderRadius: 15,
              width: 90,
              height: 90,
              marginTop: 10,
              alignItems: "center",
              marginRight: 10,
            },
            activeCategory === index && { backgroundColor: COLORS.blue },
          ]}
        >
          <Image
            source={item.image}
            style={[
              {
                width: 50,
                height: 50,
                resizeMode: "contain",
                tintColor: COLORS.blue,
              },
              activeCategory === index && { tintColor: COLORS.white },
            ]}
          />
          <Text
            style={[
              {
                fontSize: 13,
                fontWeight: "bold",
                color: COLORS.blue,
              },
              activeCategory === index && { color: COLORS.white },
            ]}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const Categories = ({ onPress }) => {
  return <ScrollButton />;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    // marginVertical: 15,
    backgroundColor: COLORS.greyChange,
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
