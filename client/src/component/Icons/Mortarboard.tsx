import React from "react";
import { Path, Svg } from "react-native-svg";

interface MortalboardProps {
  fill?: string;
  height?: number;
  width?: number;
}

export const Mortalboard = ({
  width = 32,
  height = 32,
  fill = "none",
}: MortalboardProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill={fill}>
      <Path
        d="M28.6533 13.5867L27.32 12.8534L15.32 6.18669H15.1733C15.0916 6.15213 15.0068 6.12534 14.92 6.10669H14.6667H14.4267C14.3356 6.12536 14.2463 6.15213 14.16 6.18669H14.0133L2.01333 12.8534C1.80814 12.9696 1.63746 13.1383 1.51871 13.3421C1.39997 13.5459 1.3374 13.7775 1.3374 14.0134C1.3374 14.2492 1.39997 14.4809 1.51871 14.6846C1.63746 14.8884 1.80814 15.0571 2.01333 15.1734L5.33333 17.0134V23.3334C5.33333 24.3942 5.75476 25.4116 6.50491 26.1618C7.25505 26.9119 8.27247 27.3334 9.33333 27.3334H20C21.0609 27.3334 22.0783 26.9119 22.8284 26.1618C23.5786 25.4116 24 24.3942 24 23.3334V17.0134L26.6667 15.52V19.3334C26.6667 19.687 26.8071 20.0261 27.0572 20.2762C27.3072 20.5262 27.6464 20.6667 28 20.6667C28.3536 20.6667 28.6928 20.5262 28.9428 20.2762C29.1929 20.0261 29.3333 19.687 29.3333 19.3334V14.7467C29.3329 14.5104 29.2697 14.2785 29.1503 14.0747C29.0308 13.8709 28.8593 13.7025 28.6533 13.5867ZM21.3333 23.3334C21.3333 23.687 21.1929 24.0261 20.9428 24.2762C20.6928 24.5262 20.3536 24.6667 20 24.6667H9.33333C8.97971 24.6667 8.64057 24.5262 8.39052 24.2762C8.14048 24.0261 8 23.687 8 23.3334V18.4934L14.0133 21.8267L14.2133 21.9067H14.3333C14.444 21.9206 14.556 21.9206 14.6667 21.9067C14.7773 21.9206 14.8893 21.9206 15 21.9067H15.12C15.1908 21.8918 15.2585 21.8647 15.32 21.8267L21.3333 18.4934V23.3334ZM14.6667 19.1467L5.41333 14L14.6667 8.85336L23.92 14L14.6667 19.1467Z"
        fill="#0055A3"
      />
    </Svg>
  );
};
