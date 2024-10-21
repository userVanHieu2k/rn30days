import React, {ReactElement} from "react";
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import PropTypes from "prop-types";
import Colors from "../../assets/colors/Colors";

const LoadingLogin = () => {
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      </View>
    </>
  );
};

export default LoadingLogin;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.loadingLogin,
    alignItems: "center",
    justifyContent: "center",
  },
  indicatorDefault: {},
});
