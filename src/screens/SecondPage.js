import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../store/slices/counterSlice";

function HomeScreen() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [number, onChangeNumber] = useState(null);

  const handleEnter = () => {
    dispatch(incrementByAmount(Number(number)));
  };

  return (
    <View style={styles.container}>
      <Text>Welcome To React Native Boilerplate.</Text>
      <View style={{ height: 20 }} />
      <Text>This is your counter value: {count}</Text>
      <View style={{ height: 20 }} />
      <Text>input value: {number}</Text>
      <View style={{ height: 20 }} />
      <TextInput
        style={{
          backgroundColor: "gray",
        }}
        keyboardType="numeric"
        onChangeText={onChangeNumber}
        value={number}
      />
      <Button title={"Add the value"} onPress={handleEnter}></Button>
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
