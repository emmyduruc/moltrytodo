import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "../screens/Onboarding/AuthScreen";

export type NonAuthStackParamList = {
  AuthScreen: undefined;
};

const StackNavigator = createStackNavigator<NonAuthStackParamList>();

export const NonAuth = (
  <>
    <StackNavigator.Screen name="AuthScreen" component={AuthScreen} />
  </>
);
