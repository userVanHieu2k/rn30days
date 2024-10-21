import Colors from "@app/assets/colors/Colors";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React, {ReactElement} from "react";
import {
  StyleSheet,
  TextStyle,
  TextInput,
  TextInputProps,
  Text,
  View,
  ViewStyle,
  ScrollView,
} from "react-native";

interface IProps extends TextInputProps {
  label: string | number;
  isRequire: boolean;
  styleInput?: TextStyle;
  styleContainer?: ViewStyle;
  isExpand?: boolean;
}
const FormInput = (props: IProps) => {
  const {label, isRequire, editable, styleInput, styleContainer, isExpand} =
    props;
  return (
    <View style={[{}, styleContainer]}>
      <Text style={styles.textTitleInput}>
        {label}
        {isRequire && <Text style={styles.textError}> *</Text>}
      </Text>
      {isExpand ? (
        <View style={styles.vExpand}>
          <ScrollView nestedScrollEnabled persistentScrollbar={true}>
            <Text style={styles.textExpand}>{props.value}</Text>
          </ScrollView>
        </View>
      ) : (
        <TextInput
          editable={editable}
          style={[
            styles.textInput,
            {color: editable ? Colors.textHeader : Colors.textHeaderOpacity40},
            {borderWidth: editable ? 1 : 0},
            editable && {borderColor: Colors.textHeaderOpacity10},
            {backgroundColor: editable ? Colors.white : Colors.blueLight},
            styleInput,
          ]}
          {...props}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  textTitleInput: {
    fontSize: moderateScale(16),
    color: Colors.grayOpacity80,
    alignSelf: "flex-start",
    fontWeight: "500",
    marginBottom: verticalScale(10),
  },
  textError: {
    color: Colors.primaryRed,
  },
  textExpand: {
    color: Colors.textHeaderOpacity40,
    fontSize: moderateScale(16),
    fontWeight: "400",
    lineHeight: moderateScale(16) * 1.33,
  },
  textInput: {
    height: 48,
    width: "100%",
    paddingHorizontal: scale(10),
    color: Colors.primaryColor,
    fontSize: moderateScale(16),
    fontWeight: "400",
    borderRadius: 10,
    marginBottom: verticalScale(20),
    paddingVertical: moderateScale(5),
  },
  vExpand: {
    width: "100%",
    paddingHorizontal: scale(10),
    borderRadius: 10,
    marginBottom: verticalScale(20),
    paddingVertical: moderateScale(5),
    backgroundColor: Colors.blueLight,
    height: moderateScale(16) * 1.33 * 3 + moderateScale(9),
  },
});
export default FormInput;
