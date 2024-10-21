import { IIcon } from "@app/types/icon";
import { scale } from "@app/utils/scale";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IC_COPY = (props: IIcon) => {
  const { width, height, color = "white" } = props;
  return (
    <Svg width={width || scale(24)} height={height || scale(24)} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.24025 3.62665L19.8384 10.9239C20.2461 11.1276 20.5037 11.5442 20.5037 12C20.5037 12.4558 20.2461 12.8724 19.8384 13.0761L5.24025 20.3733C4.81724 20.5849 4.30952 20.5291 3.94261 20.2306C3.5757 19.9321 3.41763 19.4464 3.53863 18.9892L5.38988 12L3.53863 5.01079C3.41763 4.55356 3.5757 4.06785 3.94261 3.7694C4.30952 3.47094 4.81724 3.41509 5.24025 3.62665Z"
        fill={color}
      />
      <Path d="M10.8831 12.0001H5.38989"
        stroke="#4263EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export default IC_COPY;


