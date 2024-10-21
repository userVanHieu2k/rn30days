import React from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { scale } from "../../utils/scale";

const TempScreen = (props: any) => {

  const onPress = () => {
    console.log('props', props);
    
    props.navigation.navigate('DAYONE')
  };
  const onPressW = () => {
    props.navigation.navigate('DAYTWO')
  };
  const DayThree = () => {
    props.navigation.navigate('DAYTHREE')
  };
  const PushNoti = () => {
    props.navigation.navigate('PUSHNOTI')
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TouchableOpacity style={{height: scale(50)}} onPress={onPress}>
          <Text>Day 1(stop watch)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: scale(50)}} onPress={onPressW}>
          <Text>Day 2(weather)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: scale(50)}} onPress={DayThree}>
          <Text>Day 3(PanResponder)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: scale(50)}} onPress={PushNoti}>
          <Text>Day 3(PushNoti)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TempScreen;
