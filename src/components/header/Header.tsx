import {DrawerActions, useNavigation} from "@react-navigation/core";
import React, {ReactElement} from "react";
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
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
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
  statusBarColor,
}: HeaderProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <>
      {/* <StatusBar
        translucent
        backgroundColor={"transparent"}
        // barStyle={statusBarStyle || 'light-content'}
        // backgroundColor={statusBarColor || Colors.Cobalt}
      /> */}
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
            navigation.goBack();
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
            },
            styleViewCenter,
          ]}>
          <Text numberOfLines={1} style={[styles.titleStyle, titleStyle]}>
            {title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (onRightPress) {
              onRightPress();
              return;
            }
          }}>
          {showIconRight && (
            <View style={[styles.iconContainer, containerLeftStyle]}>
              {rightIcon}
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
    fontSize: moderateScale(20),
    color: Colors.textHeader,
    fontWeight: "600",
  },
  iconContainer: {
    height: "100%",
    paddingHorizontal: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
});
