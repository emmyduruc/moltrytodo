import { createStackNavigator } from "@react-navigation/stack";
import { Linking } from "react-native";
import { NonAuth } from "./NonAuth";
import { NavigationContainer } from "@react-navigation/native";

export const BaseNavigator = () => {
  const StackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#000000",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
      >
        {NonAuth}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
