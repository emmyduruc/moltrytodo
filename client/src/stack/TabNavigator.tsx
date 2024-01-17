import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "../component/Text/Text";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../component/Icons/Icon";
import { HomeScreen } from "../screens/Welcome/HomeScreen";
import { useNavigation } from "@react-navigation/native";
import { CreateTask } from "../screens/Task/CreateTask";
import { useStorage } from "../store";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HistoryScreen</Text>
    </View>
  );
};

const FocusScreen = () => {
  return (
    <View style={styles.container}>
      <Text className="text-black text-sm">CartScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const TabNavigator = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const store = useStorage().primaryUI;

  const navigation = useNavigation();
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          } else if (route.name === "Calender") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Focus") {
            iconName = focused ? "timer" : "timer-outline";
          } else if (route.name === "CreateTask") {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CreateTask");
                  store.toggleModal(true);
                }}
                className="bg-purple-100 rounded-full w-20 h-20 mb-12 justify-center items-center"
              >
                <Icon color={"white"} size={25} name={"add"} />
              </TouchableOpacity>
            );
          }

          return (
            <View>
              <Icon color={"white"} size={25} name={iconName} />
            </View>
          );
        },
        tabBarActiveTintColor: "#8B5CF6",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: true,
        headerTitleStyle: {
          color: "#fff",
        },
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="ml-2"
          >
            <Icon color={"white"} size={35} name={"chevron-back"} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
            className="mr-2"
          >
            <Icon color={"white"} size={35} name={"person-circle-outline"} />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: "#000000",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 0,
          elevation: 0,
        },
      })}
    >
      <TabNavigator.Screen name="Home" component={HomeScreen} />
      <TabNavigator.Screen name="Calender" component={HistoryScreen} />
      <TabNavigator.Screen name="CreateTask" component={CreateTask} />
      <TabNavigator.Screen name="Focus" component={FocusScreen} />
      <TabNavigator.Screen name="Profile" component={ProfileScreen} />
    </TabNavigator.Navigator>
  );
};
//Todo:Clean up later on
