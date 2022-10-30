import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function HomeScreen() {
  const count = useSelector((state) => state.counter.value);

  return (
    <View style={styles.container}>
      <Text>Welcome To React Native Boilerplate.</Text>
      <View style={{ height: 20 }} />
      <Text>This is your counter value: {count}</Text>
      <View style={{ height: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
