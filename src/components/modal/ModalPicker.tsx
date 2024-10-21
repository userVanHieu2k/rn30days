import Colors from "@app/assets/colors/Colors";
import {images} from "@app/assets/images";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React from "react";
import {
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {ItemPicker, ModalPickerProps} from "./types";

const ModalPicker = (props: ModalPickerProps) => {
  const insets = useSafeAreaInsets();
  const {data, onClose, onSelect, isClose, styleViewModal, label, value, type} =
    props;
  const handleItem = (item: ItemPicker) => {
    onSelect(item);
    onClose();
  };

  const pickerItem = (item: ItemPicker, index: number) => {
    const name = () => {
      if (type == "reason") {
        return item.reason;
      } else if (type == "approve") {
        return item.name;
      } else if (type == "TypeReason") {
        return item.label;
      } else {
        return item.name;
      }
    };

    return (
      <TouchableOpacity
        key={index}
        style={{
          height: verticalScale(48),
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          borderBottomWidth: index !== data.length - 1 ? 1 : 0,
          borderBottomColor: Colors.gray10,
        }}
        onPress={() => handleItem(item)}>
        <Text
          style={{
            fontSize: moderateScale(16),
            color: Colors.textHeader,
            fontWeight: "400",
            marginHorizontal: scale(10),
          }}>
          {name()}
        </Text>
        {value == name() && (
          <Image
            source={images.IconCheck}
            style={{width: scale(30), height: scale(30)}}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      statusBarTranslucent
      visible={props.visible}
      animationType="fade"
      transparent
      onRequestClose={props.onClose}
      {...props}>
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={0.9}
        style={{
          flex: 1,
          backgroundColor: Colors.textHeaderOpacity60,
          justifyContent: "flex-end",
          alignItems: "center",
        }}>
        <View
          style={[
            {
              backgroundColor: "white",
              width: "100%",
              position: "absolute",
              paddingBottom: insets.bottom + 10,
              paddingTop: 10,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: scale(20),
            },
            styleViewModal,
          ]}>
          <View
            style={{
              width: scale(50),
              height: scale(5.5),
              borderRadius: 20,
              backgroundColor: Colors.gray30,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontSize: moderateScale(18),
              color: Colors.textHeader,
              fontWeight: "500",
              marginTop: verticalScale(20),
              marginBottom: verticalScale(10),
            }}>
            {label}
          </Text>
          {data?.map((item, index) => pickerItem(item, index))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalPicker;
