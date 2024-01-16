import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import Modal from "react-native-modal";

interface ModalWrapperProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  children: React.ReactNode;
}

export const ModalWrapper = ({
  isVisible,
  onBackdropPress,
  children,
  ...props
}: ModalWrapperProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationIn={"slideInUp"}
      {...props}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        {children}
      </KeyboardAvoidingView>
    </Modal>
  );
};
