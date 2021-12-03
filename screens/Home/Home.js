import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../Styles";

function Home({ navigation, screenProps: { stock } }) {
  return (
    <View style={styles.container}>
      <Button
        title={`First Item (${stock.first})`}
        onPress={() =>
          navigation.navigate("Details", {
            id: "first ",
            title: "First Item",
            content: "First Item Content",
          })
        }
      />
      <Button
        title={`First Item (${stock.second})`}
        onPress={() =>
          navigation.navigate("Details", {
            id: "second ",
            title: "Second Item",
            content: "Second Item Content",
          })
        }
      />
      <Button
        title={`First Item (${stock.third})`}
        onPress={() =>
          navigation.navigate("Details", {
            id: "third ",
            title: "Third Item",
            content: "Third Item Content",
          })
        }
      />
    </View>
  );
}

Home.navigationOptions = {
  title: "Home",
};

export default Home;
