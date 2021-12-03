import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../Styles";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Content</Text>
    </View>
  );
}

Home.navigationOptions = {
  title: "Home",
};

export default Home;
