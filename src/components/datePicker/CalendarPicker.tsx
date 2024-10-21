import Colors from "@app/assets/colors/Colors";
import {IC_CALENDAR} from "@app/assets/icons";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React, {useState} from "react";
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
import CalendarModal from "./CalendarModal";

interface IProps extends TextInputProps {
  label: string;
  isRequire: boolean;
  value: string;
  onSelect: (selectedDate: any) => void;
  styleText?: TextStyle;
  maxDate?: string;
  minDate?: string;
}

const CalendarPicker = (props: IProps) => {
  const {t} = useTranslation();
  const {label, isRequire, value, onSelect, styleText, minDate, maxDate} =
    props;
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const hideDatePicker = () => {
    setIsShowModal(false);
  };

  return (
    <View>
      <Text style={styles.textTitleInput}>
        {label}
        {isRequire && <Text style={styles.textError}> *</Text>}
      </Text>
      <TouchableOpacity
        style={styles.vPicker}
        onPress={() => setIsShowModal(!isShowModal)}>
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
      <CalendarModal
        initialDate={moment(value, "DD/MM/YYYY").format("YYYY-MM-DD")}
        visible={isShowModal}
        onClose={() => {
          hideDatePicker();
        }}
        onDayPress={day => {
          onSelect(day.dateString);
          hideDatePicker();
        }}
        minDate={minDate}
        maxDate={maxDate}
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
export default CalendarPicker;
