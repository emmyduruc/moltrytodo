import React from "react";
import { Path, Svg } from "react-native-svg";

interface BreadProps {
  fill?: string;
  height?: number;
  width?: number;
}

export const Bread = ({
  width = 32,
  height = 32,
  fill = "none",
}: BreadProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M22.9999 6C24.6999 8.3 21.1999 8.3 22.9999 11M15.9999 27C29.4999 27 29.1999 25.2 28.8999 21.4C28.5999 17.2 23.9999 14 15.9999 14C7.99994 14 3.39994 17.2 3.09994 21.4C2.79994 25.2 2.49994 27 15.9999 27ZM15.9999 19C15.9999 17.5 16.0999 15.8 16.9999 14L15.9999 19ZM9.99994 19C9.99994 17.5 10.0999 16.4 10.9999 14.7L9.99994 19ZM21.9999 19C21.9999 17.7 22.0999 16.6 22.7999 15.1L21.9999 19ZM15.9999 5C17.6999 7.3 14.1999 7.3 15.9999 10V5ZM8.99994 6C10.6999 8.3 7.19994 8.3 8.99994 11V6Z"
        stroke="#21A300"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
