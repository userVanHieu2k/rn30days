import Colors from '@app/assets/colors/Colors';
import { scale, verticalScale } from '@app/utils/scale';
import React, {memo, RefObject, useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import { SharedValue } from 'react-native-reanimated';
type Props = {
  scrollX: Animated.Value
  measures: Array<{x: number; y: number; width: number; height: number}>;
  index: number;
  data: Array<any>;
};
const width = Dimensions.get('window').width;
const Indicator = ({index, measures, scrollX}: Props) => {
  const widthAnim = useRef(new Animated.Value(measures[0]?.width)).current;
  const tranXAmin = useRef(new Animated.Value(0)).current;
 
  useEffect(() => {
    Animated.parallel([
      Animated.timing(widthAnim, {
        toValue: measures[index]?.width,
        duration: 180,
        useNativeDriver: false,
      }),
      Animated.timing(tranXAmin, {
        toValue: measures[index].x ,
        duration: 180,
        useNativeDriver: false,
      }),
    ]).start();
  }, [index]);

  return (
    <Animated.View
      style={{
        height: verticalScale(40),
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.primaryColor,
        borderRadius: 20,
        width: widthAnim,
        transform: [{translateX: Animated.subtract(tranXAmin, scrollX)}],
        left: 0,
      }}></Animated.View>
  );
};

export default Indicator;
const styles = StyleSheet.create({
  textTab: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
