import React, {
  Children,
  LegacyRef,
  MutableRefObject,
  ReactElement,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Colors from "@app/assets/colors/Colors";
import {scale, verticalScale} from "@app/utils/scale";
import {useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {
  Animated,
  Dimensions,
  findNodeHandle,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Indicator from "./Indicator";
import TabItem from "./TabItem";
import {MaterialTopTabBarProps} from "@react-navigation/material-top-tabs";
const {height, width} = Dimensions.get("window");
export type ItemType = {
  title: string;
  ref: RefObject<View>;
  tabName: never;
  component: ReactElement | any;
  keyTranslate: string;
};
type Props = {
  data: Array<ItemType>;
  props: MaterialTopTabBarProps;
};

const ScrollableTabView = ({data, props}: Props) => {
  const containerRef = React.useRef() as MutableRefObject<ScrollView>;
  const [measures, setMeasures] = useState<any>([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [tabIndex, setTabIndex] = React.useState(0);

  useEffect(() => {
    setTimeout(() => {
      let m: Array<any> = [];
      data?.forEach((e: ItemType, i) => {
        e?.ref?.current?.measureLayout(
          containerRef.current.getScrollableNode(),
          (x: number, y: number, width: number, height: number) => {
            m.push({x, y, width, height});
            if (m.length === data.length) {
              setMeasures(m);
            }
          },
          () => {},
        );
      });
    }, 50);
  }, []);

  const onItemPress = React.useCallback(
    (i: number, isFocused: boolean) => {
      const scrollIndex = i > 0 ? i - 1 : 0;
      if (measures.length > 0) {
        containerRef?.current.scrollTo({
          x: measures[scrollIndex].x,
          y: 0,
          animated: true,
        });
        setTabIndex(i);
      }
      navigateTab(i, isFocused);
    },
    [measures],
  );
  const navigateTab = (index: number, isFocused: boolean) => {
    const {navigation, state} = props;
    const routeKey = state.routes[index].key;
    const routeName = state.routes[index].name;
    const event = navigation.emit({
      type: "tabPress",
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      //@ts-ignore
      navigation.navigate({name: routeName, merge: true});
    }
  };

  return (
    <View style={styles.borderTabContainer}>
      <View style={styles.topTabContainer}>
        {measures.length > 0 && (
          <Indicator
            scrollX={scrollX}
            measures={measures}
            index={tabIndex}
            data={data}
          />
        )}
        <ScrollView
          bounces={false}
          style={{backgroundColor: undefined}}
          contentContainerStyle={{backgroundColor: undefined}}
          ref={containerRef}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          horizontal>
          {data.map((e: ItemType, i: number) => {
            const isFocused = props.state.index === i;
            return (
              <TabItem
                key={i.toString()}
                i={i}
                currentIndex={tabIndex}
                item={e}
                ref={e.ref}
                onItemPress={() => {
                  onItemPress(i, isFocused);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ScrollableTabView;
const styles = StyleSheet.create({
  textTab: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  borderTabContainer: {
    marginHorizontal: scale(15),
    backgroundColor: Colors.tabNewsBackgroundColor,
    height: verticalScale(50),
    justifyContent: "center",
    borderRadius: scale(20),
    overflow: "hidden",
  },
  topTabContainer: {
    marginHorizontal: scale(5),
    backgroundColor: Colors.tabNewsBackgroundColor,
    height: verticalScale(40),
    justifyContent: "center",
    // alignItems: "center",
    borderRadius: scale(20),
    overflow: "hidden",
  },
});
