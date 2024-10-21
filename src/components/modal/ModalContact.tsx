import Colors from "@app/assets/colors/Colors";
import {IC_X} from "@app/assets/icons";
import {
  moderateScale,
  scale,
  verticalScale,
  isTabletDevices,
} from "@app/utils/scale";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";
import {isAndroid} from "@app/utils/helpler";
import {SvgSource} from "@app/assets/icons/SvgCss";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {navigate} from "@app/navigators/rootNavigation";
import Routes from "@app/navigators/Routes";
import {ModalContactProps} from "./types";
import {SvgCss} from "react-native-svg";
import {images, fontImages} from "@app/assets/images";
import UserApi from "@app/networking/apis/User";
interface Item {
  grade_subject_unit_id: number;
  subject_id: number;
  name: string;
  grade_cd?: string;
}
const ModalContact = (props: ModalContactProps) => {
  const insets = useSafeAreaInsets();
  const {t, i18n} = useTranslation();
  const {visible, onClose, data, onContact} = props;
  const [isLoading, setIsLoading] = useState(false);
  const onConfirm = () => {
    onContact(data);
  };
  return (
    <Modal
      visible={visible}
      animationType="fade"
      statusBarTranslucent={true}
      transparent
      onRequestClose={() => {
        onClose();
      }}
      {...props}>
      <View style={styles.viewContain}>
        <View style={styles.viewModal}>
          <View style={{width: "100%"}}>
            <Text
              style={{
                textAlign: "center",
                fontSize: moderateScale(16),
                color: "#144B85",
                marginTop: scale(10),
              }}>
              お問い合わせ内容を送信しますか？
            </Text>
            <ScrollView
              style={{
                paddingHorizontal: isTabletDevices() ? scale(80) : scale(5),
                marginTop: scale(30),
                height: isTabletDevices() ? scale(500) : scale(455),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  marginBottom: scale(5),
                  color: "#333333",
                }}>
                氏名
              </Text>
              <Text style={{fontSize: moderateScale(14), color: "#333333"}}>
                {data.name}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  marginBottom: scale(5),
                  color: "#333333",
                  marginTop: scale(20),
                }}>
                メールアドレス
              </Text>
              <Text style={{fontSize: moderateScale(14), color: "#333333"}}>
                {data.mail}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  marginBottom: scale(5),
                  color: "#333333",
                  marginTop: scale(20),
                }}>
                お問い合わせ内容
              </Text>
              <Text style={{fontSize: moderateScale(14), color: "#333333"}}>
                {data.contentContact}
              </Text>
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              bottom: 20,
              justifyContent: isTabletDevices() ? "center" : "space-between",
              position: "absolute",
            }}>
            <TouchableOpacity
              style={{
                height: scale(36),
                width: scale(158),
                borderWidth: scale(1),
                borderColor: "#BBBBBB",
                borderRadius: scale(30),
                justifyContent: "center",
                alignItems: "center",
                marginRight: isTabletDevices() ? scale(20) : undefined,
              }}
              onPress={() => {
                onClose();
              }}>
              <Text>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: scale(32),
                width: scale(158),
              }}
              onPress={() => {
                onConfirm();
              }}>
              <ImageBackground
                source={images.ButtonContact}
                style={{
                  height: scale(36),
                  width: scale(158),
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: moderateScale(14),
                    textAlign: "center",
                  }}>
                  送信
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textCancel: {
    color: Colors.primaryColor,
  },
  textConfirm: {
    color: "#FFFFFF",
  },
  textError: {
    fontWeight: "500",
    color: Colors.textHeader,
    textAlign: "center",
    fontSize: moderateScale(22),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(10),
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
    width: isTabletDevices() ? "90%" : scale(345),
    height: isTabletDevices() ? scale(650) : scale(600),
    position: "absolute",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(5),
  },
  viewContain: {
    flex: 1,
    backgroundColor: Colors.textHeaderOpacity60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonMiddle: {
    height: scale(32),
    width: scale(84),
  },
  buttonSelect: {
    height: scale(32),
    width: scale(84),
  },
  vItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray2,
    marginBottom: 5,
    paddingVertical: 8,
    width: scale(400),
  },
  textItem1: {
    fontSize: moderateScale(17),
    fontWeight: "400",
    color: Colors.black1,
    marginRight: scale(10),
    flex: 7,
    includeFontPadding: false,
  },
  vNext: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  vList: {
    marginTop: verticalScale(15),
  },
  textItem2: {
    fontSize: moderateScale(15),
    fontWeight: "400",
    color: Colors.blueStrong,
    textDecorationLine: "underline",
    includeFontPadding: false,
  },
});
export default ModalContact;
