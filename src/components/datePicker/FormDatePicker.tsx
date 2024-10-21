import Colors from "@app/assets/colors/Colors";
import {IC_CALENDAR} from "@app/assets/icons";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React, {useCallback, useEffect, useState} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  StyleSheet,
  TextInputProps,
  Text,
  View,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import {useTranslation} from "react-i18next";
import moment from "moment";
import {isAndroid} from "@app/utils/helpler";

interface IProps extends TextInputProps {
  label: string;
  isRequire: boolean;
  value: string;
  onSelect: (event: any, selectedDate: any) => void;
  styleText?: TextStyle;
  mode: "date" | "time" | "datetime";
}

const FormDatePicker = (props: IProps) => {
  const {t} = useTranslation();
  const {label, isRequire, value, onSelect, styleText, mode} = props;
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [initDate, setInitDate] = useState<any>(undefined);

  const hideDatePicker = useCallback(() => {
    setIsShowModal(false);
  }, []);

  useEffect(() => {
    setInitDate(initValue());
  }, [value]);

  const initValue = useCallback(() => {
    if (mode == "time" && value !== "HH:mm") {
      const date = new Date();
      const hour = value?.slice(0, 2);
      const minutes = value?.slice(3);
      return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDay(),
        Number(hour),
        Number(minutes),
      );
    } else if (mode == "date" && value !== "DD/MM/YYYY") {
      const day = Number(value?.slice(0, 2));
      const month = Number(value?.slice(3, 5));
      const year = Number(value?.slice(6));
      return new Date(year, month - 1, day);
    } else if (mode == "datetime" && value !== "HH:mm DD/MM/YYYY") {
      const hour = Number(value?.slice(0, 2));
      const minutes = Number(value?.slice(3, 5));
      const day = Number(value?.slice(6, 8));
      const month = Number(value?.slice(9, 11));
      const year = Number(value?.slice(-4));
      return new Date(year, month - 1, day, hour, minutes);
    } else {
      return new Date();
    }
  }, [value]);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <View>
      <Text style={styles.textTitleInput}>
        {label}
        {isRequire && <Text style={styles.textError}> *</Text>}
      </Text>
      <TouchableOpacity style={styles.vPicker} onPress={toggleModal}>
        <Text
          style={[
            styles.textPicker,
            value != "HH:mm" && {color: Colors.textHeader},
            styleText,
          ]}>
          {value}
        </Text>
        <IC_CALENDAR width={scale(24)} height={scale(24)} />
      </TouchableOpacity>
      <DateTimePickerModal
        date={initDate}
        isVisible={isShowModal}
        mode={mode}
        is24Hour={true}
        locale={"en_GB"}
        onConfirm={(selectedDate: any) => {
          onSelect(null, selectedDate);
          hideDatePicker();
        }}
        onCancel={hideDatePicker}
        cancelTextIOS={t("create_overtime.cancel")}
        confirmTextIOS={t("create_overtime.OK")}
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
    marginBottom: verticalScale(10),
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
    marginBottom: verticalScale(20),
  },
  textPicker: {
    color: Colors.textHeaderOpacity40,
    fontSize: moderateScale(16),
    fontWeight: "400",
  },
});
export default FormDatePicker;
