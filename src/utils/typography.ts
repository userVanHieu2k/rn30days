import React from "react";
import {StyleProp, Text, TextStyle} from "react-native";
// import {isAndroid} from "../helper";
import _ from "lodash";
import { log } from "./log";

export const FONT_FAMILY = {
  100: "Inter-Thin",
  200: "Inter-ExtraLight",
  300: "Inter-Light",
  400: "Inter-Regular",
  500: "Inter-Medium",
  600: "Inter-SemiBold",
  700: "Inter-Bold",
  800: "Inter-ExtraBold",
  900: "Inter-Black",
  bold: "Inter-Bold",
  normal: "Inter-Regular",
};

export const typography = () => {
  const oldTextRender = Text.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    const originFontStyle: TextStyle = _.isArray(origin.props.style)
      ? _.reduce(
          origin.props.style,
          function (result, value, key) {
            return Object.assign(result, value);
          },
          {},
        )
      : origin.props.style;
    const fontStyles: StyleProp<TextStyle> = {};

    // if (
    //   originFontStyle?.fontSize! &&
    //   originFontStyle?.lineHeight! === undefined
    // ) {
    //   fontStyles.lineHeight = 1.33 * originFontStyle?.fontSize!;
    // } else if (
    //   originFontStyle?.fontSize! === undefined &&
    //   originFontStyle?.lineHeight! === undefined
    // ) {
    //   fontStyles.lineHeight = 1.33 * 14;
    // }
    
    if (!originFontStyle?.fontFamily!) {
      switch (originFontStyle?.fontWeight!) {
        case "100":
          fontStyles.fontFamily = FONT_FAMILY[100];
          break;
        case "200":
          fontStyles.fontFamily = FONT_FAMILY[200];
          break;
        case "300":
          fontStyles.fontFamily = FONT_FAMILY[300];
          break;
        case "400":
          fontStyles.fontFamily = FONT_FAMILY[400];
          break;
        case "500":
          fontStyles.fontFamily = FONT_FAMILY[500];
          // fontStyles.fontWeight = "400";
          break;
        case "600":
          fontStyles.fontFamily = FONT_FAMILY[600];
          break;
        case "700":
          fontStyles.fontFamily = FONT_FAMILY[700];
          break;
        case "800":
          fontStyles.fontFamily = FONT_FAMILY[800];
          break;
        case "900":
          fontStyles.fontFamily = FONT_FAMILY[900];
          break;
        case "bold":
          fontStyles.fontFamily = FONT_FAMILY.bold;
          break;
        default:
          fontStyles.fontFamily = FONT_FAMILY.normal;
          break;
      }
    }

    return React.cloneElement(origin, {
      style: [origin.props.style, fontStyles],
    });
  };
};
