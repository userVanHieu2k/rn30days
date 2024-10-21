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
  Image,
  ModalProps,
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import PrimaryButton from "../Button/PrimaryButton";
import {ModalNoteProps} from "./types";

interface IProps extends ModalProps {
  image: string;
  onClose: () => void;
}

const ModalImage = (props: IProps) => {
  const insets = useSafeAreaInsets();
  const {t, i18n} = useTranslation();
  const {visible, onClose, image} = props;

  return (
    <Modal
      statusBarTranslucent
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
      {...props}>
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={0.9}
        style={styles.viewContain}>
        <View style={styles.viewModal}>
          <Image
            source={{uri: image}}
            resizeMode="contain"
            style={{width: "100%", height: 500}}
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
    // backgroundColor: "white",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    borderRadius: 20,
    // paddingHorizontal: scale(20),
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
export default ModalImage;
