import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "../screens/Onboarding/AuthScreen";
import { OnBoarding } from "../screens/Onboarding/Onboarding";
import { Register } from "../screens/Onboarding/Register";

export type NonAuthStackParamList = {
  Hi: undefined;
  OnBoarding: undefined;
  Register: undefined;
};

const StackNavigator = createStackNavigator<NonAuthStackParamList>();

export const NonAuth = (
  <>
    <StackNavigator.Screen name="Hi" component={Register} />
    <StackNavigator.Screen name="OnBoarding" component={OnBoarding} />
    <StackNavigator.Screen name="Register" component={Register} />
  </>
);
