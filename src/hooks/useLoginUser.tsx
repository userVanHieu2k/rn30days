import React, {useEffect, useState} from "react";
import UserApi from "../networking/apis/User";
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import {RootState} from "@app/app-reduxs/store";
import LoginActions from "@app/app-reduxs/login/actions";
import {asyncStorageSetItem} from "@app/utils/syncStorage";
import messaging from "@react-native-firebase/messaging";
export default () => {
  const {user, isLoading, error} = useSelector(
    (state: RootState) => state.loginReducer,
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState(new Array<any>());
  const dispatch = useDispatch();
  // const addFCMtoken = async (user_id: any) => {
  //   const token = await messaging().getToken();

  //   try {
  //     const [res, res1] = await Promise.all([
  //       UserApi.addPushNews({
  //         push_subscription: token,
  //         user_id: `${parseInt(user_id)}`,
  //       }),
  //       UserApi.addPushBase({
  //         fcm_token: token,
  //       }),
  //     ]);
  //   } catch (error) {}
  // };
  const login = async () => {
    const trimPassWord = password.trim();
    dispatch(
      LoginActions.loginStartAction(
        {email, password: trimPassWord},
        {
          onSuccess: (response: any) => {
            asyncStorageSetItem("@Token", "response.data.token");
          },
          onFailed: (response: any) => {
            setShowModal(true);
          },
        },
      ),
    );
  };

  return {
    login,
    isLoading,
    error,
    email,
    setEmail,
    password,
    setPassword,
    user,
    showPass,
    setShowPass,
    errors,
    setErrors,
    showModal,
    setShowModal,
  };
};
