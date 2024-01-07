import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../Text/Text";

interface SubmitButtonProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  children: React.ReactNode;
}

export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  return (
    <TouchableOpacity
      className="
        bg-purple-100
        rounded-lg
        py-2
        px-4
        mt-6
        "
      {...rest}
    >
      <Text
        className="
            text-white
            text-base
            text-center
            "
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
