import React, {useEffect} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Routes from "./Routes";
import { DayOne, TempScreen } from "../screens";
import { PanResponder, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../utils/scale";
import { Weather } from "../screens/DayTwo";
import { PanResponsive, PushNoti } from "../screens/DayThree";
import MyTabs from "./BottomTapNavigation";
import FirstAnimated from "../screens/Animated/FirstAnimated";
import SecondAnimated from "../screens/Animated/SecondAnimated";
import TimingAnimated from "../screens/Animated/TimimgAnimated";
import DrawAndDrops from "../screens/Animated/DrawAndDrops";
const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  const navigation = useNavigation()
  return (
    <>
      <MainStack.Navigator
        initialRouteName={Routes.MYTABS}
        screenOptions={{
          // headerShown: false,
          animation: "none",
          // headerShown: false
        }}>
        <MainStack.Screen name={Routes.MYTABS} component={TempScreen}/>
        <MainStack.Screen name={Routes.DAYONE} component={DayOne} />
        <MainStack.Screen name={Routes.DAYTWO} component={Weather} />
        <MainStack.Screen name={Routes.DAYTHREE} component={PanResponsive}/>
        <MainStack.Screen name={Routes.PUSHNOTI} component={PushNoti}/>
        <MainStack.Screen name={Routes.FIRSTANIMATION} component={FirstAnimated}/>
        <MainStack.Screen name={Routes.SECONDANIMATION} component={SecondAnimated}/>
        <MainStack.Screen name={Routes.TIMINGANIMATION} component={TimingAnimated}/>
        <MainStack.Screen name={Routes.DRAWANDDROPS} component={DrawAndDrops}/>
      </MainStack.Navigator>
    </>
  );
};

export default MainNavigator;
