import React, {useEffect} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Routes from "./Routes";
import { DayOne, TempScreen } from "../screens";
import { PanResponder, Text, TouchableOpacity } from "react-native";
import { navigate } from "./rootNavigation";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/button/BackButton";
import { scale } from "../utils/scale";
import { Weather } from "../screens/DayTwo";
import { PanResponsive, PushNoti } from "../screens/DayThree";
const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  const navigation = useNavigation()
  return (
    <>
      <MainStack.Navigator
        initialRouteName={Routes.HOME}
        screenOptions={{
          // headerShown: false,
          animation: "none",
        }}>
        <MainStack.Screen name={Routes.HOME} component={TempScreen} options={{title: '30 DAY OF REACT NATIVE'}}/>
        <MainStack.Screen name={Routes.DAYONE} component={DayOne} options={{title: 'A stop watch', headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack} >
              {/* <BackButton onPress={navigation.goBack} style={{width:  scale(24), height: scale(24)}}/> */}
              <Text>Back</Text>
            </TouchableOpacity>
          ),}}/>
        <MainStack.Screen name={Routes.DAYTWO} component={Weather} options={{title: 'WEATHER', headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack} >
              {/* <BackButton onPress={navigation.goBack} style={{width:  scale(24), height: scale(24)}}/> */}
              <Text>Back</Text>
            </TouchableOpacity>
          ),}}/>
        <MainStack.Screen name={Routes.DAYTHREE} component={PanResponsive} options={{title: 'PanResponsive', headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack} >
              {/* <BackButton onPress={navigation.goBack} style={{width:  scale(24), height: scale(24)}}/> */}
              <Text>Back</Text>
            </TouchableOpacity>
          ),}}/>
        <MainStack.Screen name={Routes.PUSHNOTI} component={PushNoti} options={{title: 'PUSH NOTI', headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack} >
              {/* <BackButton onPress={navigation.goBack} style={{width:  scale(24), height: scale(24)}}/> */}
              <Text>Back</Text>
            </TouchableOpacity>
          ),}}/>
      </MainStack.Navigator>
    </>
  );
};

export default MainNavigator;
