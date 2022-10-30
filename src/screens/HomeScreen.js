import React from "react";
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slices/counterSlice";

function HomeScreen({ navigation }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Welcome To React Native Boilerplate.</Text>
      <View style={{ height: 20 }} />
      <Text>This is your counter value: {count}</Text>
      <View style={{ height: 20 }} />
      <Button
        title={"Increase Counter"}
        onPress={() => dispatch(increment())}
      />
      <View style={{ height: 20 }} />
      <Button
        title={"Decrease Counter"}
        onPress={() => dispatch(decrement())}
      />
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          title={"Go Second Page"}
          onPress={() => navigation.navigate("SecondPage")}
        />
      </View>
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
