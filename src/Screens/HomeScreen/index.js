import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

export default Home;
