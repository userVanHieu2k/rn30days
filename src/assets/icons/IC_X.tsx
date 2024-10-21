import { scale } from "@app/utils/scale";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}
const IconX = (props: IIcon) => {
  const { width, height, color } = props;
  return (
    <Svg
      width={width || scale(32)}
      height={width || scale(32)}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M9.01068 22.9906L16.0013 15.9999L22.992 22.9906M22.992 9.00928L16 15.9999L9.01068 9.00928"
        stroke={color || "#4263EB"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default IconX;
