import React, {ReactElement} from 'react';
import {StyleSheet, TextStyle,TextInput, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps{
  children?: ReactElement | any;
  style?: TextStyle | Array<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};
const Input = ({
  placeholder = 'placeholder',
  onChangeText,
  value,
  style,
  secureTextEntry,
}: InputProps) => {
  return (
    <TextInput
      placeholderTextColor={'#CCCCCC'}
      {...{placeholder, value, onChangeText, secureTextEntry}}
      style={[styles.textInput, style]}
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    borderColor: '#999999',
    borderWidth: 0.5,
    borderRadius: 4,
    height:50,
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 10,
  },
});
export default Input;
