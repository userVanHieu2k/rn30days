import React, { useRef } from "react";
import { PanResponder, Animated, StyleSheet, View, Text } from "react-native";

const SecondAnimated = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Chuyển giá trị hiện tại thành offset
        pan.extractOffset();
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x, // Điều chỉnh theo trục X
            dy: pan.y, // Điều chỉnh theo trục Y
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        // Đưa về vị trí ban đầu
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start(() => {
          // Reset offset khi hoàn thành
          pan.flattenOffset();
        });
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default SecondAnimated;
