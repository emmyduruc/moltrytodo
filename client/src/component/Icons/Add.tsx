import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

interface AddProps {
  fill?: string;
  height?: number;
  width?: number;
}

export const Add = ({ width = 32, height = 32, fill = "none" }: AddProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_2_13421)">
        <Path
          d="M2.4375 17.9375H14.0625V29.5625C14.0625 30.631 14.9315 31.5 16 31.5C17.0685 31.5 17.9375 30.631 17.9375 29.5625V17.9375H29.5625C30.631 17.9375 31.5 17.0685 31.5 16C31.5 14.9315 30.631 14.0625 29.5625 14.0625H17.9375V2.4375C17.9375 1.36896 17.0685 0.5 16 0.5C14.9315 0.5 14.0625 1.36896 14.0625 2.4375V14.0625H2.4375C1.36896 14.0625 0.5 14.9315 0.5 16C0.5 17.0685 1.36896 17.9375 2.4375 17.9375Z"
          fill="#00A369"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_13421">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
