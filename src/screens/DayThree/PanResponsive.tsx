import React, {useEffect, useRef, useState} from 'react';
import {Text, View, PermissionsAndroid, TouchableOpacity, Animated, PanResponder} from 'react-native';
import styles from './styles';

const PanResponsive = () => {

  const pan = React.useRef(new Animated.ValueXY()).current;
  const panRes = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.Circle, {transform: [{translateX: pan.x}, {translateY: pan.y}]}]} {...panRes.panHandlers}>
      </Animated.View>
      
    </View>
  );
};
export default PanResponsive