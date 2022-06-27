import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

import { COLORS } from "../utils";
import { SPACING } from "../utils/Colors";

const { height, width } = Dimensions.get("window");

const HouseList = [
  {
    id: 1,
    name: "Duplex Apartments",
    image_Url:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    categories: ["Building", "Apartement"],
    price: "$1,235.22",
    location: "Crufy Arena",
    reviews: 1233,
    rating: 7.6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 2,
    name: " Room",
    image_Url:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    categories: ["Room", "Apartement"],
    price: "$1,235",
    location: "New Heaven Enugu",
    reviews: 33,
    rating: 7.5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 3,
    name: "Building",
    image_Url:
      "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    categories: ["Office", "Building"],
    price: "$3,000",
    location: "Wall Street New York",
    reviews: 123,
    rating: 9.6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    name: "Apartments",
    image_Url:
      "https://media.istockphoto.com/photos/cozy-bedroom-interior-picture-id1296398474?b=1&k=20&m=1296398474&s=170667a&w=0&h=TpAschaWHP5HUOAVuN_5DU-rMxaNrwvrFb0p7hH_kWM=",
    categories: ["Home", "Apartement"],
    price: "$1,235",
    location: "Lagos Islands",
    reviews: 233,
    rating: 8.9,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 4,
    name: "Duplex",
    image_Url:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    categories: ["Home", "Apartement"],
    price: "$1,235",
    location: "Desmond Tutu SA",
    reviews: 33,
    rating: 7.0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
];

const HouseCardImage = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={{ height: 150, width: 150, borderRadius: 14 }}
        // source={require("../assets/images/house.png")}
        source={{
          uri: item.image_Url,
        }}
      />
      <View
        style={{
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 15 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const HouseItem = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={HouseList}
      keyExtractor={(item, index) => item.id}
      renderItem={HouseCardImage}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    height: height * 0.25,
    width: "90%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default HouseItem;
