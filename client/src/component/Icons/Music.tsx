import React from "react";
import { Path, Svg } from "react-native-svg";

interface MusicProps {
  fill?: string;
  height?: number;
  width?: number;
}

export const Music = ({
  width = 32,
  height = 32,
  fill = "none",
}: MusicProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill={fill}>
      <Path
        d="M6.97097 26.932H5.97097C4.87797 26.932 3.91197 26.498 3.25197 25.712C2.59197 24.925 2.32297 23.848 2.51597 22.758C2.89397 20.612 4.87597 18.932 7.02997 18.932H9.54797V5.80296C9.55017 5.04234 9.84026 4.31077 10.3599 3.75533C10.8795 3.19988 11.5902 2.86177 12.349 2.80896L23.349 2.07596C23.7586 2.05008 24.1691 2.10794 24.5556 2.246C24.9421 2.38406 25.2965 2.59943 25.597 2.87896C26.201 3.44396 26.548 4.24296 26.548 5.06996L26.538 19.439C26.537 19.659 26.526 19.877 26.485 20.107C26.107 22.252 24.125 23.932 21.971 23.932H20.971C19.878 23.932 18.912 23.498 18.252 22.712C17.592 21.925 17.323 20.848 17.516 19.758C17.894 17.612 19.876 15.932 22.03 15.932H24.548V11.07C24.548 10.79 24.436 10.53 24.231 10.339C24.1315 10.2448 24.0136 10.1725 23.8846 10.1265C23.7556 10.0805 23.6185 10.062 23.482 10.072L12.482 10.805C12.229 10.8226 11.9922 10.9353 11.8189 11.1205C11.6457 11.3056 11.5489 11.5494 11.548 11.803V22.432C11.548 22.521 11.536 22.607 11.515 22.689C11.506 22.994 11.495 23.05 11.486 23.107C11.106 25.251 9.12397 26.932 6.97097 26.932ZM7.02897 20.932C5.85697 20.932 4.69197 21.927 4.48397 23.106C4.39397 23.62 4.50097 24.088 4.78397 24.427C5.05697 24.752 5.47897 24.932 5.97097 24.932H6.97097C8.14297 24.932 9.30797 23.937 9.51597 22.758C9.51297 22.756 9.52697 22.465 9.53597 20.932H7.02897ZM22.029 17.932C20.857 17.932 19.692 18.927 19.484 20.106C19.394 20.62 19.501 21.088 19.784 21.427C20.057 21.752 20.479 21.932 20.971 21.932H21.971C23.143 21.932 24.308 20.937 24.516 19.758C24.536 19.645 24.537 19.535 24.537 19.428L24.544 17.932H22.029ZM12.48 4.80496C12.227 4.82263 11.9902 4.93535 11.8169 5.12047C11.6437 5.30559 11.5469 5.54941 11.546 5.80296V8.97496C11.799 8.88496 12.067 8.82796 12.347 8.80896L23.347 8.07596C23.755 8.05296 24.164 8.10695 24.546 8.24195V5.06896C24.546 4.78896 24.434 4.52896 24.229 4.33796C24.1294 4.24404 24.0114 4.17182 23.8825 4.12586C23.7536 4.07991 23.6165 4.06121 23.48 4.07096L12.48 4.80496Z"
        fill="#A000A3"
      />
    </Svg>
  );
};