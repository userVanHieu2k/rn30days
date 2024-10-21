import Colors from "@app/assets/colors/Colors";
import {IC_X} from "@app/assets/icons";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
  Image,
} from "react-native";
import {isAndroid} from "@app/utils/helpler";
import {SvgSource} from "@app/assets/icons/SvgCss";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {navigate} from "@app/navigators/rootNavigation";
import Routes from "@app/navigators/Routes";
import {ModalConfirmProps} from "./types";
import {SvgCss} from "react-native-svg";
import {images, fontImages} from "@app/assets/images";
interface Item {
  grade_subject_unit_id: number;
  subject_id: number;
  name: string;
  grade_cd?: string;
}
const ModalConfirm = (props: ModalConfirmProps) => {
  const insets = useSafeAreaInsets();
  const {t, i18n} = useTranslation();
  const {visible, onClose, data} = props;
  const [index, setIndex] = useState<number>(23);
  const navigateSearch = (item: Item) => {
    const grade_cd = index == 1 ? "21" : index == 2 ? "22" : "23";
    navigate(Routes.SEARCH, {
      grade_subject_unit_id: item?.grade_subject_unit_id,
      subject_id: item?.subject_id,
      grade_cd: item?.grade_cd,
    });
  };
  console.log("data", data);

  const title = () => {
    switch (data?.subject) {
      case "english":
        return fontImages.titleEng;
      case "japanese":
        return fontImages.titleJp;
      case "mathematics":
        return fontImages.titleMath;
      case "science":
        return fontImages.titleSci;
      case "social_studies":
        return fontImages.titleSoc;
      default:
        null;
        break;
    }
  };
  const Item = ({item}: {item: Item}) => {
    return (
      <TouchableOpacity
        style={styles.vItem}
        onPress={() => {
          onClose(), navigateSearch(item);
        }}>
        <Text style={styles.textItem1} numberOfLines={1}>
          {item?.name}
        </Text>
        <View style={styles.vNext}>
          <Text style={styles.textItem2}>詳細</Text>
          <SvgCss
            xml={SvgSource.iconArrow}
            height={scale(18)}
            width={scale(18)}
            style={{marginTop: isAndroid ? moderateScale(0.58) : 0}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      visible={visible}
      animationType="fade"
      statusBarTranslucent={true}
      transparent
      onRequestClose={() => {
        setIndex(23), onClose();
      }}
      {...props}>
      <View style={styles.viewContain}>
        <View style={styles.viewModal}>
          <View style={{width: "100%"}}>
            <TouchableOpacity
              onPress={() => {
                setIndex(23), onClose();
              }}>
              <IC_X width={scale(40)} height={scale(40)} style={styles.iconX} />
            </TouchableOpacity>
          </View>
          <Image
            source={title()}
            resizeMode="contain"
            style={{
              width: scale(165),
              height: scale(30),
              marginBottom: verticalScale(10),
            }}
          />
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity
              onPress={() => {
                setIndex(21);
              }}>
              <Image
                source={
                  index == 21
                    ? fontImages.buttonSelectModal1
                    : fontImages.buttonModal1
                }
                style={styles.buttonMiddle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIndex(22);
              }}>
              <Image
                source={
                  index == 22
                    ? fontImages.buttonSelectModal2
                    : fontImages.buttonModal2
                }
                style={[
                  {marginRight: scale(20), marginLeft: scale(20)},
                  styles.buttonMiddle,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIndex(23);
              }}>
              <Image
                source={
                  index == 23
                    ? fontImages.buttonSelectModal3
                    : fontImages.buttonModal3
                }
                style={styles.buttonMiddle}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: scale(40),
              marginTop: scale(20),
              maxHeight: scale(370),
            }}>
            <FlatList
              contentContainerStyle={{
                paddingHorizontal: 15,
              }}
              data={data?.data[index]}
              renderItem={({item}) => <Item item={item} />}
              keyExtractor={item => item.grade_subject_unit_id}
            />
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
    width: scale(700),
    height: scale(579),
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
export default ModalConfirm;
