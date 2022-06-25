import React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, DetailScreen, SplashScreen, Appointment } from "../screens";

const Stack = createStackNavigator();

const ScreenOptions = {
  headerShown: false,
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Appointment" component={Appointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
