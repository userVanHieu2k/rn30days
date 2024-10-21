import Colors from "@app/assets/colors/Colors";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React, {memo, MutableRefObject, Ref, RefObject, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {ItemType} from "./ScrollableTabView";
import {decode} from "html-entities";

type Props = {
  item: ItemType;
  onItemPress?: () => void;
  i: number;
  currentIndex: number;
};
const TabItem = React.forwardRef(
  ({item, onItemPress, currentIndex, i}: Props, ref: Ref<any>) => {
    const isFocus = i === currentIndex;
    const {t} = useTranslation();
    return (
      <Pressable onPress={onItemPress}>
        <View
          key={item?.title}
          ref={ref}
          style={{
            height: verticalScale(40),
            justifyContent: "center",
            paddingHorizontal: scale(15),
          }}>
          <Text
            style={[
              styles.textTab,
              {color: isFocus ? Colors.white : Colors.textHeaderOpacity40},
            ]}>
            {decode(item?.title)}
          </Text>
        </View>
      </Pressable>
    );
  },
);

export default memo(TabItem);
const styles = StyleSheet.create({
  textTab: {
    fontWeight: "500",
    fontSize: moderateScale(16),
  },
});
