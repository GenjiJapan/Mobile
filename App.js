// import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./screens/Home/Home";
import Settings from "./screens/Home copy/Settings";
import Details from "./screens/Detail/Detail";
import News from "./screens/News/News";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./screens/Styles";

const Nav = createAppContainer(
  createStackNavigator({ Home, Details }, { initialRouteName: "Home" })
);

const data = new Array(100).fill(null).map((v, i) => ({
  key: i.toString(),
  value: `Item ${i}`,
}));

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.value} </Text>}
      />
    </View>
  );
}
