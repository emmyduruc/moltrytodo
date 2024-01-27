import { Text } from "../Text/Text";
import React from "react";
import { Pressable, View } from "react-native";

type SettingTabProps = {
  title: string;
  rightComponent: React.ReactNode;
  onPress: () => void;
  icon: React.ReactNode;
  isAvatar?: boolean;
  isDeleteProfile?: boolean;
  userName?: string;
};
export const SettingTab = (props: SettingTabProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      className="flex mt-2 mb-2 h-14 flex-row justify-between items-center active:bg-purple-800/10 px-6 py-2"
    >
      <View
        className={
          props.isAvatar
            ? "h-12 w-12 rounded-12xl relative"
            : `${
                props.isDeleteProfile ? "bg-red-black-100" : "bg-gray-100"
              } h-12 w-12 rounded-full justify-center self-center flex items-center`
        }
      >
        {props.icon}
      </View>
      <View className="flex-1 flex-col ml-4 mr-2">
        {props.userName ? (
          <Text numberOfLines={1} className="text-lg font-semibold">
            {props.userName}
          </Text>
        ) : (
          <Text
            numberOfLines={2}
            className={`${
              props.isDeleteProfile ? "text-red-500" : "text-white"
            } text-left`}
          >
            {props.title}
          </Text>
        )}
      </View>

      <View className={"flex items-end justify-end"}>
        {props.rightComponent}
      </View>
    </Pressable>
  );
};
