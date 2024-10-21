import React, {ReactElement} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


interface ButtonProps extends TouchableOpacityProps {
  children?: ReactElement | any;
  style?: ViewStyle | Array<ViewStyle>;
  onPress?: () => void;
  title?: string;
  textStyle?: TextStyle | Array<TextStyle>;
  disabled?: boolean;
};
const SimpleButton = ({
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
    borderRadius: 4,
    backgroundColor: Colors.black,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  defaultText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default SimpleButton;
