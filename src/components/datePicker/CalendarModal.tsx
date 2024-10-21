import Colors from "@app/assets/colors/Colors";
import {IC_FACE_ERROR, IC_X} from "@app/assets/icons";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React from "react";
import {useTranslation} from "react-i18next";
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  ModalProps,
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import PrimaryButton from "../Button/PrimaryButton";
import {Calendar, DateData} from "react-native-calendars";
import moment from "moment";

interface IProps extends ModalProps {
  onClose: () => void;
  initialDate?: string;
  minDate?: string;
  maxDate?: string;
  onDayPress?: (day: DateData) => void;
}
const CalendarModal = (props: IProps) => {
  const insets = useSafeAreaInsets();
  const {t, i18n} = useTranslation();
  const {visible, onClose, initialDate, maxDate, minDate, onDayPress} = props;
  const dateTo = moment().subtract(1, "d").format("YYYY-MM-DD");
  const dateFrom = moment().subtract(7, "d").format("YYYY-MM-DD");
  return (
    <Modal
      statusBarTranslucent
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
      {...props}>
      <StatusBar backgroundColor={Colors.textHeaderOpacity60} />
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={0.9}
        style={styles.viewContain}>
        <View style={styles.viewModal}>
          <Calendar
            // Initially visible month. Default = now
            initialDate={initialDate}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={dateFrom}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={dateTo}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={onDayPress}
            // Handler which gets executed on day long press. Default = undefined
            // onDayLongPress={day => {
            //   console.log("selected day", day);
            // }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={"MM-yyyy"}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            // onMonthChange={month => {
            //   console.log("month changed", month);
            // }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  btnCancel: {
    width: "48%",
    backgroundColor: Colors.backgroundButton,
    marginBottom: verticalScale(40),
  },
  textCancel: {
    color: Colors.primaryColor,
  },
  textError: {
    fontWeight: "400",
    color: Colors.textHeader,
    fontSize: moderateScale(16),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(15),
    textAlign: "center",
  },
  iconX: {
    alignSelf: "flex-end",
  },
  iconFaceError: {
    marginTop: verticalScale(23),
  },
  textHere: {
    color: Colors.secondaryColor,
    textDecorationLine: "underline",
  },
  textNote: {
    fontWeight: "400",
    fontSize: moderateScale(14),
    color: Colors.tertiaryOrange,
    marginBottom: verticalScale(10),
  },
  viewModal: {
    backgroundColor: "white",
    width: scale(388),
    position: "absolute",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(5),
  },
  viewContain: {
    flex: 1,
    backgroundColor: Colors.textHeaderOpacity60,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CalendarModal;
