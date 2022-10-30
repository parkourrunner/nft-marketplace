import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "./src/store/store";
import HomeScreen from "./src/screens/HomeScreen";
import SecondPage from "./src/screens/SecondPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen name={"Home"} component={HomeScreen} />
          <Stack.Screen name={"SecondPage"} component={SecondPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
