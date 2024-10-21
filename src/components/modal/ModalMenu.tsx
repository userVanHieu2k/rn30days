import Colors from "@app/assets/colors/Colors";
import {moderateScale, scale, verticalScale} from "@app/utils/scale";
import React, {ReactElement} from "react";
import Routes from "@app/navigators/Routes";
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  ModalProps,
  Image,
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {navigate, push} from "@app/navigators/rootNavigation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@app/app-reduxs/store";
import AppActions from "@app/app-reduxs/app/actions";
import {fontImages} from "@app/assets/images";

interface IProps extends ModalProps {}

const ModalMenu = (props: IProps) => {
  const dispatch = useDispatch();
  const visible = useSelector(
    (state: RootState) => state.appReducer.visibleMenu,
  );

  const onClose = () => {
    dispatch(AppActions.toggleMenu(false));
  };
  const insets = useSafeAreaInsets();
  const data = [
    {
      image: (
        <Image
          source={fontImages.menu1}
          style={{
            width: scale(108 / 3),
            height: scale(36 / 3),
            tintColor: Colors.black1,
          }}
        />
      ),
      name: Routes.HOME,
    },
    {
      image: (
        <Image
          source={fontImages.menu2}
          style={{
            width: scale(72 / 3),
            height: scale(36 / 3),
            tintColor: Colors.black1,
          }}
        />
      ),
      name: Routes.SEARCH,
    },
    {
      image: (
        <Image
          source={fontImages.menu3}
          style={{
            width: scale(216 / 3),
            height: scale(36 / 3),
            tintColor: Colors.black1,
          }}
        />
      ),
      name: Routes.GUILDE_SCREEN,
    },
    {
      image: (
        <Image
          source={fontImages.menu4}
          style={{
            width: scale(216 / 3),
            height: scale(36 / 3),
            tintColor: Colors.black1,
          }}
        />
      ),
      name: Routes.QA,
    },
    {
      image: (
        <Image
          source={fontImages.menu8}
          style={{
            width: scale(216 / 3),
            height: scale(36 / 3),
            tintColor: Colors.black1,
          }}
        />
      ),
      name: Routes.CONTACT,
    },
    {
      image: (
        <Image
          source={fontImages.menu5}
          style={{
            width: scale(144 / 3),
            height: scale(36 / 3),
            tintColor: Colors.black1,
          }}
        />
      ),
      name: Routes.PROFILECOMPANY,
    },
    {
      image: (
        <Image
          source={fontImages.menu6}
          style={{
            width: scale(144 / 3),
            height: scale(36 / 3),
            tintColor: Colors.black1,
          }}
        />
      ),
      name: Routes.USER_POLICY,
    },
    {
      image: (
        <Image
          source={fontImages.menu7}
          style={{
            width: scale(360 / 3),
            height: scale(36 / 3),
            tintColor: Colors.black1,
          }}
        />
      ),
      name: Routes.PRIVACIPOLICY,
    },
  ];
  const itemMenu = (child: ReactElement, name?: never, index?: number) => {
    return (
      <TouchableOpacity
        style={{height: 42, justifyContent: "center"}}
        key={`item${index}`}
        onPress={() => {
          name && navigateScreen(name);
        }}>
        {child}
      </TouchableOpacity>
    );
  };
  const navigateScreen = (name: never) => {
    if (name == Routes.HOME) {
      dispatch(AppActions.scrollToTop());
    }
    push(name, {isMenu: true});
    onClose();
  };
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
        style={[styles.viewContain, ,]}>
        <View style={[styles.viewModal, {top: verticalScale(40) + insets.top}]}>
          {data.map((item, index) => itemMenu(item.image, item.name, index))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textItem: {
    fontSize: moderateScale(12),
    fontWeight: "bold",
    color: Colors.black1,
    marginBottom: scale(13),
  },
  viewModal: {
    backgroundColor: "white",
    width: scale(155),
    position: "absolute",
    // paddingVertical: 7,
    paddingHorizontal: 10,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  viewContain: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
  },
});
export default ModalMenu;
