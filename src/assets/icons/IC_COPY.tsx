import { IIcon } from "@app/types/icon";
import { scale } from "@app/utils/scale";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IC_COPY = (props: IIcon) => {
  const { width, height, color = "#797C7B" } = props;
  return (
    <Svg width={width || scale(26)} height={height || scale(24)} viewBox="0 0 26 24" fill="none">
      <Path
        d="M7.56003 18L7.56003 10C7.56003 7.79086 9.46073 6 11.8054 6L18.1734 6M7.56003 18C7.56003 20.2091 9.46073 22 11.8054 22H14.2922C15.4182 22 16.498 21.5786 17.2941 20.8284L21.1753 17.1716C21.9714 16.4214 22.4187 15.404 22.4187 14.3431V10C22.4187 7.79086 20.518 6 18.1734 6M7.56003 18C5.2154 18 3.3147 16.2091 3.3147 14L3.3147 6C3.3147 3.79086 5.2154 2 7.56003 2L13.928 2C16.2727 2 18.1734 3.79086 18.1734 6M16.0507 22V20C16.0507 17.7909 17.9514 16 20.296 16H22.4187"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export default IC_COPY;



