import Colors from "@app/assets/colors/Colors";
import {IC_NO_DATA} from "@app/assets/icons";
import {images} from "@app/assets/images";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React from "react";
import {useTranslation} from "react-i18next";
import {Image, StyleSheet, Text, View} from "react-native";

const NoDataView = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>一致する検索結果がありません</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "600",
    color: Colors.textHeader,
    fontSize: moderateScale(20),
    marginTop: verticalScale(76),
    marginBottom: verticalScale(10),
  },
  subTitle: {
    fontWeight: "400",
    color: Colors.textHeader,
    fontSize: moderateScale(16),
    marginBottom: verticalScale(45),
  },
  img: {
    width: scale(148),
    height: scale(69),
  },
  vContent: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.textHeaderOpacity10,
    borderRadius: 10,
  },
});
export default NoDataView;
