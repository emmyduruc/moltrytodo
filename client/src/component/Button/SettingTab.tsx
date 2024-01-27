import { Text } from "../Text/Text";
import React from "react";
import { Pressable, View } from "react-native";

type SettingTabProps = {
  title: string;
  rightComponent: React.ReactNode;
  onPress: () => void;
  icon: React.ReactNode;
  isDeleteProfile?: boolean;
  logout?: boolean;
};
export const SettingTab = (props: SettingTabProps) => {
  return (
    <Pressable className="w-full rounded-xl bg-black-100 flex-row items-center active:bg-purple-800/10">
      <Pressable
        onPress={props.onPress}
        className="flex-1 pl-2 mt-2 mb-2 h-14 flex-row justify-between items-center py-2"
      >
        <View className="flex-row items-center">
          <View className="flex-row items-center justify-center">
            {props.icon}
          </View>
          <View className="flex-1 flex-col ml-4 mr-2">
            <Text
              numberOfLines={2}
              className={`${
                props.logout ? "text-red-500" : "text-white"
              } text-left`}
            >
              {props.title}
            </Text>
          </View>
        </View>
      </Pressable>
      <View className="pr-2">{props.rightComponent}</View>
    </Pressable>
  );
};
