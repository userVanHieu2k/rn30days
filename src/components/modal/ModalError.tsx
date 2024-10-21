import Colors from "@app/assets/colors/Colors";
import {IC_FACE_ERROR, IC_X} from "@app/assets/icons";
import {images} from "@app/assets/images";
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
  Image,
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import PrimaryButton from "../Button/PrimaryButton";
import {ModalNoteProps} from "./types";

const ModalError = (props: ModalNoteProps) => {
  const insets = useSafeAreaInsets();
  const {t, i18n} = useTranslation();
  const {visible, onClose, textContent, successCheckin, stylesContent} = props;

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
          <TouchableWithoutFeedback onPress={onClose}>
            <IC_X width={scale(24)} height={scale(24)} style={styles.iconX} />
          </TouchableWithoutFeedback>
          {successCheckin ? (
            <Image source={images.IconSuccess} style={styles.iconFaceError} />
          ) : (
            <IC_FACE_ERROR
              width={scale(94)}
              height={scale(94)}
              style={styles.iconFaceError}
            />
          )}
          <Text style={[styles.textError, stylesContent]}>{textContent}</Text>
          <PrimaryButton
            onPress={onClose}
            title={t("button.label_action_cancel1")}
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
    width: scale(94),
    height: scale(94),
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
export default ModalError;
