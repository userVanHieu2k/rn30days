import { scale } from "@app/utils/scale";
import * as React from "react";
import Svg, { Path, SvgProps, Defs, ClipPath, Rect, G } from "react-native-svg";
const IconCheck = (props: SvgProps) => (
  <Svg
    width={props?.width || scale(26)}
    height={props?.height || scale(28)}
    viewBox="0 0 16 17"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3733 3.99334C14.5606 4.18084 14.6658 4.435 14.6658 4.7C14.6658 4.965 14.5606 5.21917 14.3733 5.40667L6.24397 13.536C6.15012 13.6298 6.03856 13.7039 5.91577 13.7541C5.79299 13.8043 5.66144 13.8296 5.52879 13.8285C5.39614 13.8274 5.26503 13.7999 5.14311 13.7476C5.02119 13.6953 4.91089 13.6193 4.81864 13.524L1.61464 10.212C1.43192 10.0211 1.3322 9.76559 1.33728 9.50136C1.34236 9.23714 1.45183 8.98567 1.64175 8.80191C1.83168 8.61815 2.08662 8.51705 2.35087 8.52069C2.61511 8.52432 2.86718 8.63242 3.05197 8.82134L5.5493 11.4027L12.96 3.99334C13.1475 3.80607 13.4016 3.70088 13.6666 3.70088C13.9316 3.70088 14.1858 3.80607 14.3733 3.99334Z"
      fill={props?.color || "#4263EB"}
    />
  </Svg>
);
export default IconCheck;
