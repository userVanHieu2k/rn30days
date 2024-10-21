import React, {useEffect, useState} from "react";
import UserApi from "../networking/apis/User";
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import {RootState} from "@app/app-reduxs/store";
import CommonActions from "@app/app-reduxs/common/actions";
import {asyncStorageSetItem, deleteData} from "@app/utils/syncStorage";
export default () => {
  const dispatch = useDispatch();
  const common = () => {};

  return {
    common,
  };
};
