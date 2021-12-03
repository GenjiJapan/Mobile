// import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./screens/Home/Home";
import Settings from "./screens/Home copy/Settings";
// import Details from "./screens/Detail/Detail";
import News from "./screens/News/News";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const { createNavigator } = Platform.select({
  ios: { createNavigator: createBottomTabNavigator },
  android: { createNavigator: createDrawerNavigator },
});

export default createAppContainer(
  createNavigator({ Home, News, Settings }, { initialRouteName: "Home" })
);
