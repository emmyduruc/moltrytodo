import React from "react";
import { Text as CustomText } from "react-native";

interface TextProps extends React.ComponentProps<typeof CustomText> {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <CustomText className="text-white text-base text-center" {...rest}>
      {children}
    </CustomText>
  );
};
