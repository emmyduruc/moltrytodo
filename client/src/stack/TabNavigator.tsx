import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../component/Text/Text";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../component/Icons/Icon";
import { useNavigationState } from "@react-navigation/native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

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

const CartScreen = () => {
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
          } else if (route.name === "History") {
            iconName = focused ? "ios-images" : "ios-images-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          }

          return (
            <View>
              <Icon style={[{ color: color }]} size={25} name={iconName} />
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
          <View>
            <Text>Left</Text>
          </View>
        ),
        headerStyle: {
          backgroundColor: "#000000",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
        },
      })}
    >
      <TabNavigator.Screen
        options={{
          title: "Home",
        }}
        name="Home"
        component={HomeScreen}
      />
      <TabNavigator.Screen
        options={{
          title: "Home",
        }}
        name="History"
        component={HistoryScreen}
      />
      <TabNavigator.Screen
        options={{
          title: "Home",
        }}
        name="Cart"
        component={CartScreen}
      />
      <TabNavigator.Screen
        options={{
          title: "Profile",
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </TabNavigator.Navigator>
  );
};
