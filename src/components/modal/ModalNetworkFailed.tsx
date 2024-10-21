import Colors from "@app/assets/colors/Colors";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import PrimaryButton from "../Button/PrimaryButton";
import {useNetInfo} from "@react-native-community/netinfo";

const ModalNetworkFailed = () => {
  const {t, i18n} = useTranslation();
  const [visible, setVisible] = useState(false);
  const netInfo = useNetInfo();

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    if (netInfo?.isConnected != null) {
      setVisible(!netInfo?.isConnected);
    }
  }, [netInfo?.isConnected]);

  return (
    <Modal
      statusBarTranslucent
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}>
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={0.9}
        style={styles.viewContain}>
        <View style={styles.viewModal}>
          <TouchableWithoutFeedback>
            <Text>X</Text>
          </TouchableWithoutFeedback>

          <Text style={styles.textError1}>{t("page_title.lost_connect")}</Text>
          <Text style={styles.textError}>
            {t("page_title.label_lost_connect")}!
          </Text>
          <PrimaryButton
            onPress={onClose}
            title={t("page_title.button_retry")}
            style={styles.btnCancel}
            textStyle={styles.textCancel}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  btnCancel: {
    width: "48%",
    marginBottom: verticalScale(40),
  },
  textError1: {
    fontWeight: "600",
    fontSize: moderateScale(20),
    color: Colors.textHeader,
    marginTop: verticalScale(17),
  },
  textCancel: {},
  textError: {
    fontWeight: "400",
    color: Colors.textHeader,
    fontSize: moderateScale(16),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(15),
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
export default ModalNetworkFailed;
