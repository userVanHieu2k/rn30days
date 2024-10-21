import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Routes from "./Routes";
import * as Screens from "@app/screens";
import {useSelector} from "react-redux";
import {RootState} from "@app/app-reduxs/store";
import {asyncStorageGetItem} from "@app/utils/syncStorage";
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}>
      <AuthStack.Screen
        name={Routes.LOGIN}
        component={Screens.LoginScreen}
        options={{gestureEnabled: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
