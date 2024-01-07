import { createStackNavigator } from "@react-navigation/stack";
import { Linking } from "react-native";
import { NonAuth } from "./NonAuth";
import { NavigationContainer } from "@react-navigation/native";

export const BaseNavigator = () => {
  const StackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator>{NonAuth}</StackNavigator.Navigator>
    </NavigationContainer>
  );
};
