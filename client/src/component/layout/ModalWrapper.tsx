import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Text } from "../Text/Text";
import { translate } from "../../services/translation.service";
import { Icon } from "../Icons/Icon";
import { useStorage } from "../../store";

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
  const store = useStorage().primaryUI;
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationIn={"slideInUp"}
      {...props}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <View className="p-4 h-[65%] bg-black-100 rounded-2xl">
          <View className="flex-row justify-center items-center">
            <Text>{translate("set_due_date")}</Text>
            <TouchableOpacity
              onPress={() => store.toggleCalendar(false)}
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
//className="p-4 h-[65%] bg-black-100 rounded-2xl"
