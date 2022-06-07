import React from "react";
import { View, Button, Text } from "react-native";
import { styles } from "./styles";

const Settings = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Settings screen</Text>
      <Button title="Go to About Screen" />
    </View>
  );
};

export default Settings;
