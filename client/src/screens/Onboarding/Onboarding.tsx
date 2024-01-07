import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Dot, Page } from "./OnboardingSlider";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { SafeAreaView } from "react-native-safe-area-context";

const PAGE_WIDTH = Dimensions.get("window").width;

interface OnBoardingProps {
  navigation: any;
}

export const OnBoarding = (props: OnBoardingProps) => {
  const WORDS = [
    {
      head: "Manage your tasks",
      des: "You can easily manage all of your daily tasks in DoMe for free",
    },

    {
      head: "Create daily routine",
      des: "In Uptodo  you can create your personalized routine to stay productive",
    },
    {
      head: "Organize your tasks",
      des: "You can organize your daily tasks by adding your tasks into separate categories",
    },
  ];
  const translateX = useSharedValue(0);
  /** handle Translation on scroll event  */
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const Skipable = () => {
    return (
      <Text
        onPress={() => {
          props.navigation.push("HomeScreen");
        }}
        className="text-white text-base text-center"
      >
        Skip
      </Text>
    );
  };
  return (
    <GradientLayout>
      <Animated.FlatList
        data={WORDS}
        onScroll={scrollHandler}
        initialScrollIndex={0}
        snapToInterval={PAGE_WIDTH}
        decelerationRate="fast"
        scrollEventThrottle={16}
        horizontal
        className="flex-1 bg-transparent"
        pagingEnabled={true}
        bounces={true}
        bouncesZoom={true}
        initialNumToRender={1}
        keyExtractor={(index) => index.toString()}
        renderItem={({ index, item }) => {
          return (
            <Page
              key={index.toString()}
              index={index}
              title={item}
              translateX={translateX}
            />
          );
        }}
      ></Animated.FlatList>
      <View className="relative">
        <View className="flex-row justify-between items-center">
          <Dot data={WORDS} translateX={translateX} color={"white"} />
          <Skipable />
        </View>
      </View>
      <SafeAreaView />
    </GradientLayout>
  );
};
