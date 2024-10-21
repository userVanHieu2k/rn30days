import React, {ReactElement} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
interface IProps extends TextProps {
  children?: ReactElement | any;
  style?: TextStyle | Array<TextStyle>;
}

const RegularText = (props: IProps) => {
  const {children, style} = props;
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize:  16,
    fontWeight: "400"
    //lineHeight: scale(20),
  },
});
export default RegularText;
