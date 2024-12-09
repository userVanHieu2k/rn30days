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
        <MainStack.Screen name={Routes.MYTABS} component={MyTabs}/>
        <MainStack.Screen name={Routes.DAYONE} component={DayOne} />
        <MainStack.Screen name={Routes.DAYTWO} component={Weather} />
        <MainStack.Screen name={Routes.DAYTHREE} component={PanResponsive}/>
        <MainStack.Screen name={Routes.PUSHNOTI} component={PushNoti}/>
      </MainStack.Navigator>
    </>
  );
};

export default MainNavigator;
