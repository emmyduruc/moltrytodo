import React from "react";
import { Path, Svg } from "react-native-svg";

interface CameraProps {
  fill?: string;
  height?: number;
  width?: number;
}

export const Camera = ({
  width = 32,
  height = 32,
  fill = "none",
}: CameraProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
      <Path
        d="M17.2399 22.75H6.75993C3.95993 22.75 2.17993 21.08 2.01993 18.29L1.49993 10.04C1.41993 8.79 1.84993 7.59 2.70993 6.68C3.55993 5.77 4.75993 5.25 5.99993 5.25C6.31993 5.25 6.62993 5.06 6.77993 4.76L7.49993 3.33C8.08993 2.16 9.56993 1.25 10.8599 1.25H13.1499C14.4399 1.25 15.9099 2.16 16.4999 3.32L17.2199 4.78C17.3699 5.06 17.6699 5.25 17.9999 5.25C19.2399 5.25 20.4399 5.77 21.2899 6.68C22.1499 7.6 22.5799 8.79 22.4999 10.04L21.9799 18.3C21.7999 21.13 20.0699 22.75 17.2399 22.75ZM10.8599 2.75C10.1199 2.75 9.17993 3.33 8.83993 4L8.11993 5.44C7.69993 6.25 6.88993 6.75 5.99993 6.75C5.15993 6.75 4.37993 7.09 3.79993 7.7C3.22993 8.31 2.93993 9.11 2.99993 9.94L3.51993 18.2C3.63993 20.22 4.72993 21.25 6.75993 21.25H17.2399C19.2599 21.25 20.3499 20.22 20.4799 18.2L20.9999 9.94C21.0499 9.11 20.7699 8.31 20.1999 7.7C19.6199 7.09 18.8399 6.75 17.9999 6.75C17.1099 6.75 16.2999 6.25 15.8799 5.46L15.1499 4C14.8199 3.34 13.8799 2.76 13.1399 2.76H10.8599V2.75Z"
        fill="white"
        fill-opacity="0.87"
      />
      <Path
        d="M13.5 8.75H10.5C10.09 8.75 9.75 8.41 9.75 8C9.75 7.59 10.09 7.25 10.5 7.25H13.5C13.91 7.25 14.25 7.59 14.25 8C14.25 8.41 13.91 8.75 13.5 8.75Z"
        fill="white"
        fill-opacity="0.87"
      />
      <Path
        d="M12 18.75C9.79 18.75 8 16.96 8 14.75C8 12.54 9.79 10.75 12 10.75C14.21 10.75 16 12.54 16 14.75C16 16.96 14.21 18.75 12 18.75ZM12 12.25C10.62 12.25 9.5 13.37 9.5 14.75C9.5 16.13 10.62 17.25 12 17.25C13.38 17.25 14.5 16.13 14.5 14.75C14.5 13.37 13.38 12.25 12 12.25Z"
        fill="white"
        fill-opacity="0.87"
      />
    </Svg>
  );
};