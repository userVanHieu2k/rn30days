import {DrawerActions, useNavigation} from "@react-navigation/core";
import React, {ReactElement, useState} from "react";
import {
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Colors from "../../assets/colors/Colors";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {fontCheck, moderateScale, scale, verticalScale} from "@app/utils/scale";
import Routes from "@app/navigators/Routes";
import ModalMenu from "../modal/ModalMenu";
import {IconMenu} from "@app/assets/icons";
import {useDispatch} from "react-redux";
import AppActions from "@app/app-reduxs/app/actions";
// import {
//   horizontalScale,
//   moderateScale,
//   scale,
//   verticalScale,
// } from '../../assets/dimens';

type HeaderProps = {
  showIconLeft?: boolean;
  showIconRight?: boolean;
  renderLeft?: ReactElement;
  renderRight?: ReactElement;
  title?: string;
  titleStyle?: TextStyle;
  styleContainer?: ViewStyle;
  styleViewCenter?: ViewStyle;
  onRightPress?: () => void;
  onLeftPress?: () => void;
  centerIcon?: ReactElement | any;
  leftIcon?: ReactElement | any;
  rightIcon?: ReactElement | any;
  containerLeftStyle?: ViewStyle;
  statusBarStyle?: null | StatusBarStyle | undefined;
  statusBarColor?: string;
};
export default ({
  showIconLeft = true,
  showIconRight = true,
  leftIcon,
  rightIcon,
  title,
  titleStyle = {},
  styleContainer,
  styleViewCenter,
  onRightPress,
  onLeftPress,
  containerLeftStyle,
  statusBarStyle,
  centerIcon,
  statusBarColor,
}: HeaderProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            height: verticalScale(40) + insets.top,
          },
          styleContainer,
        ]}>
        <TouchableOpacity
          onPress={() => {
            if (onLeftPress) {
              onLeftPress();
              return;
            }
            navigation.navigate(Routes.HOME);
            dispatch(AppActions.scrollToTop());
          }}>
          {showIconLeft && <View style={styles.iconContainer}>{leftIcon}</View>}
        </TouchableOpacity>

        <View
          style={[
            {
              flex: 1,
              backgroundColor: Colors.white,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: verticalScale(3),
            },
            styleViewCenter,
          ]}>
          {title ? (
            <Text numberOfLines={1} style={[styles.titleStyle, titleStyle]}>
              {title}
            </Text>
          ) : (
            centerIcon
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            if (onRightPress) {
              onRightPress();
              return;
            }
            dispatch(AppActions.toggleMenu(true));
          }}>
          {showIconRight && (
            <View
              style={[
                styles.iconContainer,
                {alignItems: "flex-end"},
                containerLeftStyle,
              ]}>
              {rightIcon ? (
                rightIcon
              ) : (
                <IconMenu width={fontCheck(32)} height={fontCheck(19)} />
              )}
            </View>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: moderateScale(11),
    color: Colors.blueStrong,
    fontWeight: "400",
  },
  iconContainer: {
    height: "100%",
    paddingHorizontal: scale(15),
    minWidth: scale(110),
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
