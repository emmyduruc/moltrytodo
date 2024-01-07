//src/screens/slide.js

import React from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Text } from "../../component/Text/Text";

const PAGE_WIDTH = Dimensions.get("window").width;
const PAGE_HEIGHT = Dimensions.get("window").height;

const SIZE = PAGE_WIDTH * 0.7;

interface PageProps {
  index: number;
  title: { head: string; des: string; imgpath: string };
  translateX: any;
  onPress?: () => void;
}

interface DotProps {
  data: any;
  translateX: any;
  style?: any;
  color?: string;
  onPress?: () => void;
}

const Page = (props: PageProps) => {
  const { index, title, translateX, onPress } = props;
  const inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ];

  const rstyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale: scale }],
      borderRadius,
    };
  });
  const textStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [PAGE_HEIGHT / 2, 0, PAGE_HEIGHT / 2],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-4, 1, -4],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{ translateY: scale }],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        height: PAGE_HEIGHT,
        width: PAGE_WIDTH,
      }}
    >
      <Animated.View style={[rstyle, Style.square]} />
      <View style={Style.pageContainer}>
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 5,
            resizeMode: "contain",
            position: "absolute",
            top: 115,
          }}
          source={title.imgpath}
        />
      </View>
      <Animated.View style={[textStyle, Style.container]}>
        <Text style={Style.text}>{title?.head}</Text>
        <Text className="my-4 mr-4 text-center">{title?.des}</Text>
      </Animated.View>
    </View>
  );
};

const Dot = (props: DotProps) => {
  const { data, translateX, style, color } = props;

  return (
    <View>
      <View
        style={
          style
            ? style
            : {
                flexDirection: "row",
                backgroundColor: "transparent",
              }
        }
      >
        {data.map((_: any, index: number) => {
          const inputRange = [
            (index - 1) * PAGE_WIDTH,
            index * PAGE_WIDTH,
            (index + 1) * PAGE_WIDTH,
          ];
          const textStyle = useAnimatedStyle(() => {
            const size = interpolate(
              translateX.value,
              inputRange,
              [10, 25, 10],
              Extrapolate.CLAMP
            );
            const opacity = interpolate(
              translateX.value,
              inputRange,
              [0.5, 2, 0.5],
              Extrapolate.CLAMP
            );
            return {
              width: size,
              opacity,
              backgroundColor: color,
            };
          });
          return (
            <Animated.View
              style={[Style.dot, textStyle]}
              key={index.toString()}
            />
          );
        })}
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  pageContainer: {
    flex: 1,
    // height: PAGE_HEIGHT,
    // width: PAGE_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    top: SIZE / 3,
  },
  text: {
    fontSize: 18,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "center",
  },
  text2: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    fontWeight: "700",
    width: PAGE_WIDTH - 120,
    textAlign: "center",
  },
  dot: { height: 8, margin: 5, borderRadius: 10 },
});
export { Page, Dot };
