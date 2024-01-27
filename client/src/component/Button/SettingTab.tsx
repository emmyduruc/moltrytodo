import { Text } from "../Text/Text";
import React from "react";
import { Pressable, View } from "react-native";

type SettingTabProps = {
  title: string;
  rightComponent: React.ReactNode;
  onPress: () => void;
  icon: React.ReactNode;
  isDeleteProfile?: boolean;
};
export const SettingTab = (props: SettingTabProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      className="flex mt-2 mb-2 h-14 flex-row justify-between items-center active:bg-purple-800/10 px-6 py-2"
    >
      <View className="flex-1 flex-col ml-4 mr-2">
        <Text
          numberOfLines={2}
          className={`${
            props.isDeleteProfile ? "text-red-500" : "text-white"
          } text-left`}
        >
          {props.title}
        </Text>
      </View>

      <View className={"flex items-end justify-end"}>
        {props.rightComponent}
      </View>
    </Pressable>
  );
};
