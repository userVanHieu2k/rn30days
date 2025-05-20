import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Routes from "./Routes";
import LoginScreen from "../screens/login";
import { FirstAnimated } from "../screens";
const AuthStack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}>
      <AuthStack.Screen
        name={Routes.FIRSTANIMATION}
        component={FirstAnimated}
        options={{gestureEnabled: false}}
      />
      <AuthStack.Screen
        name={Routes.LOGIN}
        component={LoginScreen}
        options={{gestureEnabled: false}}
        
      />
    </AuthStack.Navigator>
  );
};

export default ProfileNavigator;
