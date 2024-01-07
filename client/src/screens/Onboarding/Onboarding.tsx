import React from "react";
import { View, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Dot, Page } from "./OnboardingSlider";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { SafeAreaView } from "react-native-safe-area-context";

import frame1 from "../../../assets/frame1.png";
import frame2 from "../../../assets/frame2.png";
import frame3 from "../../../assets/frame3.png";
import { Text } from "../../component/Text/Text";

const IMAGES = {
  frame1,
  frame2,
  frame3,
};

const PAGE_WIDTH = Dimensions.get("window").width;

interface OnBoardingProps {
  navigation: any;
}

export const OnBoarding = (props: OnBoardingProps) => {
  const WORDS = [
    {
      head: "Manage your tasks",
      des: "You can easily manage all of your daily tasks in DoMe for free",
      imgpath: IMAGES.frame1,
    },

    {
      head: "Create daily routine",
      des: "In Uptodo  you can create your personalized routine to stay productive",
      imgpath: IMAGES.frame2,
    },
    {
      head: "Organize your tasks",
      des: "You can organize your daily tasks by adding your tasks into separate categories",
      imgpath: IMAGES.frame3,
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
        showsHorizontalScrollIndicator={false}
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
