import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../Screens/HomeScreen";
import About from "../Screens/AboutScreen";
import Contact from "../Screens/ContactScreen";
import { StackActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Notificação" component={Contact} />
    </Drawer.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator };
