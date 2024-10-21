import React, {ReactElement} from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { verticalScale } from "../../utils/scale";

interface ButtonProps extends TouchableOpacityProps {
  children?: ReactElement | any;
  style?: ViewStyle | Array<ViewStyle>;
  onPress?: () => void;
  title?: string;
  textStyle?: TextStyle | Array<TextStyle>;
  disabled?: boolean;
}
const PrimaryButton = ({
  title,
  disabled = false,
  textStyle,
  onPress,
  style,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...{onPress}}
      style={[styles.defaultButton, style]}>
      <Text style={[styles.defaultText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  defaultButton: {
    borderRadius: 100,
    backgroundColor: Colors.primaryColor,
    height: verticalScale(54),
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  defaultText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default PrimaryButton;
