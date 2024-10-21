import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import rootNavigation from "./rootNavigation";
import { useDispatch } from "react-redux";
import { fetchUserRequest } from "../app-reduxs/user/slice";
import { saveCommentStart } from "../app-reduxs/catagory/slice";
const AppContainer = () => {
    const dispatch = useDispatch();

  React.useEffect(() => {
    // Dispatch action để gọi API khi ứng dụng mở
    // dispatch(fetchUserRequest()); 
    dispatch(saveCommentStart());
  }, [dispatch]);

  return (
    <>
      <NavigationContainer ref={rootNavigation.navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

export default AppContainer;
