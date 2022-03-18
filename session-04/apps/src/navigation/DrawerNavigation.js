import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/container/Home";
import Login from "../screens/container/Login";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}