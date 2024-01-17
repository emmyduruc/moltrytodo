import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Text } from "../Text/Text";
import { Icon } from "../Icons/Icon";

interface ModalWrapperProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  children: React.ReactNode;
  modalHeaderText?: string;
}

export const ModalWrapper = ({
  isVisible,
  onBackdropPress,
  children,
  modalHeaderText,
  ...props
}: ModalWrapperProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationIn={"slideInUp"}
      {...props}
      style={{
        justifyContent: "flex-end",
        margin: 0,
        marginTop: 100,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <View className="p-4 h-[100%] justify-center bg-black-100 rounded-2xl">
          <View className="flex-row justify-center items-center">
            <Text>{modalHeaderText}</Text>
            <TouchableOpacity
              onPress={onBackdropPress}
              className="
                    absolute
                    right-0"
            >
              <Icon color={"white"} size={25} name={"close"} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
