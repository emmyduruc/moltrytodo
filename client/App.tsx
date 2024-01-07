import React, { useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { BaseNavigator } from "./src/stack/BaseNavigator";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  React.useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
          "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
          "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
          "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
          "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
          "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.log(e);
      }
    }
    loadFonts();
  }, []);

  const handleOnLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return (
    <View
      onLayout={() => {
        handleOnLayout();
        setAppIsReady(true);
      }}
      style={styles.container}
    >
      <BaseNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
