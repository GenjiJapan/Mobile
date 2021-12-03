import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../Styles";

function News({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>News Content</Text>
    </View>
  );
}

News.navigationOptions = {
  title: "News",
};

export default News;
