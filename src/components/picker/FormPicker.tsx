import Colors from "@app/assets/colors/Colors";
import {ICON_ARROW} from "@app/assets/icons";
import {mockData} from "@app/utils/mockData";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React, {ReactElement, useState} from "react";
import {
  StyleSheet,
  TextStyle,
  TextInput,
  TextInputProps,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import {ModalPicker} from "../Modal";

interface IProps extends TextInputProps {
  label: string;
  isRequire: boolean;
  styleViewModal?: ViewStyle;
  data: any;
  value: string;
  type?: any;
  onSelect: (item: any) => void;
}

const FormPicker = (props: IProps) => {
  const {label, isRequire, value, onSelect, styleViewModal, data, type} = props;
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <View>
      <Text style={styles.textTitleInput}>
        {label}
        {isRequire && <Text style={styles.textError}> *</Text>}
      </Text>
      <TouchableOpacity
        style={styles.vPicker}
        onPress={() => setIsShowModal(true)}>
        <Text style={styles.textPicker} numberOfLines={1}>
          {value}
        </Text>
        <ICON_ARROW width={scale(15)} height={scale(10)} />
      </TouchableOpacity>
      <ModalPicker
        value={value}
        label={label}
        visible={isShowModal}
        data={data}
        type={type}
        onClose={() => {
          setIsShowModal(false);
        }}
        onSelect={onSelect}
        styleViewModal={styleViewModal}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textTitleInput: {
    fontSize: moderateScale(16),
    color: Colors.grayOpacity80,
    alignSelf: "flex-start",
    fontWeight: "500",
    marginBottom: 10,
  },
  textError: {
    color: Colors.primaryRed,
  },
  vPicker: {
    height: 48,
    width: "100%",
    paddingHorizontal: scale(10),
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Colors.textHeaderOpacity10,
    borderRadius: 10,
    marginBottom: 20,
  },
  textPicker: {
    color: Colors.textHeader,
    fontSize: moderateScale(16),
    fontWeight: "400",
    maxWidth: scale(310),
  },
});
export default FormPicker;
