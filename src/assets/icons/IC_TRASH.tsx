import { IIcon } from "@app/types/icon";
import { scale } from "@app/utils/scale";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconTrash = (props: IIcon) => {
  const { width, height, color } = props;
  return (
    <Svg
      width={width || scale(34)}
      height={height || scale(34)}
      viewBox="0 0 34 34"
      fill="none"
      {...props}
    >
      <Path
        d="M13.1042 4.25C13.1042 3.96821 13.2161 3.69796 13.4154 3.4987C13.6146 3.29944 13.8849 3.1875 14.1667 3.1875H19.8333C20.1151 3.1875 20.3854 3.29944 20.5846 3.4987C20.7839 3.69796 20.8958 3.96821 20.8958 4.25V5.3125H26.9167C27.1985 5.3125 27.4687 5.42444 27.668 5.6237C27.8672 5.82296 27.9792 6.09321 27.9792 6.375C27.9792 6.65679 27.8672 6.92704 27.668 7.1263C27.4687 7.32556 27.1985 7.4375 26.9167 7.4375H7.08334C6.80155 7.4375 6.5313 7.32556 6.33204 7.1263C6.13279 6.92704 6.02084 6.65679 6.02084 6.375C6.02084 6.09321 6.13279 5.82296 6.33204 5.6237C6.5313 5.42444 6.80155 5.3125 7.08334 5.3125H13.1042V4.25Z"
        fill={color || "white"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.84 11.2554C8.85919 11.0821 8.94163 10.9219 9.07154 10.8056C9.20145 10.6893 9.36971 10.625 9.54409 10.625H24.4559C24.6303 10.625 24.7986 10.6893 24.9285 10.8056C25.0584 10.9219 25.1408 11.0821 25.16 11.2554L25.4433 13.8068C25.9548 18.4067 25.9548 23.0492 25.4433 27.6491L25.415 27.8998C25.3244 28.7141 24.9653 29.4749 24.3942 30.0624C23.8232 30.6498 23.0728 31.0304 22.2615 31.144C18.7709 31.6327 15.2292 31.6327 11.7385 31.144C10.9269 31.0307 10.1762 30.6502 9.60491 30.0628C9.0336 29.4753 8.67425 28.7143 8.58359 27.8998L8.55526 27.6491C8.04424 23.0496 8.04424 18.4077 8.55526 13.8082L8.84 11.2554ZM15.2292 16.15C15.2292 15.8682 15.1172 15.598 14.918 15.3987C14.7187 15.1994 14.4485 15.0875 14.1667 15.0875C13.8849 15.0875 13.6146 15.1994 13.4154 15.3987C13.2161 15.598 13.1042 15.8682 13.1042 16.15V26.0667C13.1042 26.3485 13.2161 26.6187 13.4154 26.818C13.6146 27.0172 13.8849 27.1292 14.1667 27.1292C14.4485 27.1292 14.7187 27.0172 14.918 26.818C15.1172 26.6187 15.2292 26.3485 15.2292 26.0667V16.15ZM20.8958 16.15C20.8958 15.8682 20.7839 15.598 20.5846 15.3987C20.3854 15.1994 20.1151 15.0875 19.8333 15.0875C19.5515 15.0875 19.2813 15.1994 19.082 15.3987C18.8828 15.598 18.7708 15.8682 18.7708 16.15V26.0667C18.7708 26.3485 18.8828 26.6187 19.082 26.818C19.2813 27.0172 19.5515 27.1292 19.8333 27.1292C20.1151 27.1292 20.3854 27.0172 20.5846 26.818C20.7839 26.6187 20.8958 26.3485 20.8958 26.0667V16.15Z"
        fill={color || "white"}
      />
    </Svg>
  );
};
export default IconTrash;