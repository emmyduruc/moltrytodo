import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "../screens/Onboarding/AuthScreen";
import { OnBoarding } from "../screens/Onboarding/Onboarding";
import { Register } from "../screens/Onboarding/Register";
import { Login } from "../screens/Onboarding/Login";
import { BottomTabNavigator } from "./TabNavigator";
import { EditAppointment } from "../screens/Appointments/EditAppointment";

export type NonAuthStackParamList = {
  Hi: undefined;
  OnBoarding: undefined;
  Register: undefined;
  Login: undefined;
  Home: undefined;
  EditAppointment: undefined;
};

const StackNavigator = createStackNavigator<NonAuthStackParamList>();

export const NonAuth = (
  <>
    <StackNavigator.Screen name="Hi" component={AuthScreen} />
    <StackNavigator.Screen name="OnBoarding" component={OnBoarding} />
    <StackNavigator.Screen name="Register" component={Register} />
    <StackNavigator.Screen name="Login" component={Login} />
    <StackNavigator.Screen
      screenOptions={{
        headerShown: false,
      }}
      name="HomeScreen"
      component={BottomTabNavigator}
    />
    <StackNavigator.Screen name="EditAppointment" component={EditAppointment} />
  </>
);
