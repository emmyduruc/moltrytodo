import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "../screens/Onboarding/AuthScreen";
import { OnBoarding } from "../screens/Onboarding/Onboarding";

export type NonAuthStackParamList = {
  Hi: undefined;
  OnBoarding: undefined;
};

const StackNavigator = createStackNavigator<NonAuthStackParamList>();

export const NonAuth = (
  <>
    <StackNavigator.Screen name="Hi" component={AuthScreen} />
    <StackNavigator.Screen name="OnBoarding" component={OnBoarding} />
  </>
);