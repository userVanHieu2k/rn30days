import { IIcon } from "@app/types/icon";
import { scale } from "@app/utils/scale";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IC_EDIT = (props: IIcon) => {
  const { width, height, color = "#4263EB" } = props;
  return (
    <Svg width={width || scale(20)} height={height || scale(20)} viewBox="0 0 20 20" fill="none">
      <Path
        d="M2.5 14.375V17.5H5.625L14.8417 8.28336L11.7167 5.15836L2.5 14.375ZM17.2583 5.86669C17.3356 5.78959 17.3969 5.69802 17.4387 5.59721C17.4805 5.4964 17.502 5.38833 17.502 5.27919C17.502 5.17005 17.4805 5.06198 17.4387 4.96117C17.3969 4.86036 17.3356 4.76878 17.2583 4.69169L15.3083 2.74169C15.2312 2.66444 15.1397 2.60315 15.0389 2.56133C14.938 2.51951 14.83 2.49799 14.7208 2.49799C14.6117 2.49799 14.5036 2.51951 14.4028 2.56133C14.302 2.60315 14.2104 2.66444 14.1333 2.74169L12.6083 4.26669L15.7333 7.39169L17.2583 5.86669Z"
        fill={color}
      />
    </Svg>
  )
}
export default IC_EDIT;



