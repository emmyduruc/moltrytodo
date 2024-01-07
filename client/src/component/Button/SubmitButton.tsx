import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../Text/Text";

interface SubmitButtonProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  children: React.ReactNode;
  disabled?: boolean;
}

export const SubmitButton = ({
  children,
  disabled,
  ...rest
}: SubmitButtonProps) => {
  return (
    <TouchableOpacity
      className={`
      ${disabled ? "bg-gray-400" : "bg-purple-100"}
        rounded-lg
        py-2
        px-4
        mt-6
        `}
      {...rest}
      disabled={disabled}
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
