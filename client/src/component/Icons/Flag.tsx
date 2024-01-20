import React from "react";
import { Path, Svg } from "react-native-svg";
import { colors } from "../../utils/colors";

interface FlagProps {
  fill?: string;
  height?: number;
  width?: number;
}

export const Flag = ({
  fill = colors.purple[300],
  height = 24,
  width = 24,
}: FlagProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
      <Path
        d="M5.1499 22.75C4.7399 22.75 4.3999 22.41 4.3999 22V2C4.3999 1.59 4.7399 1.25 5.1499 1.25C5.5599 1.25 5.8999 1.59 5.8999 2V22C5.8999 22.41 5.5599 22.75 5.1499 22.75Z"
        fill={fill}
        fill-opacity="0.87"
      />
      <Path
        d="M16.3499 16.75H5.1499C4.7399 16.75 4.3999 16.41 4.3999 16C4.3999 15.59 4.7399 15.25 5.1499 15.25H16.3499C17.4399 15.25 17.9499 14.96 18.0499 14.71C18.1499 14.46 17.9999 13.9 17.2199 13.13L16.0199 11.93C15.5299 11.5 15.2299 10.85 15.1999 10.13C15.1699 9.37 15.4699 8.62 16.0199 8.07L17.2199 6.87C17.9599 6.13 18.1899 5.53 18.0799 5.27C17.9699 5.01 17.3999 4.75 16.3499 4.75H5.1499C4.7299 4.75 4.3999 4.41 4.3999 4C4.3999 3.59 4.7399 3.25 5.1499 3.25H16.3499C18.5399 3.25 19.2399 4.16 19.4699 4.7C19.6899 5.24 19.8399 6.38 18.2799 7.94L17.0799 9.14C16.8299 9.39 16.6899 9.74 16.6999 10.09C16.7099 10.39 16.8299 10.66 17.0399 10.85L18.2799 12.08C19.8099 13.61 19.6599 14.75 19.4399 15.3C19.2099 15.83 18.4999 16.75 16.3499 16.75Z"
        fill={fill}
        fill-opacity="0.87"
      />
    </Svg>
  );
};
