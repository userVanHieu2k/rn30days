// userSaga.ts
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  User,
  ListUser,
  saveUser1,
} from './slice';
import constants from '../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserApi from '../../networking/apis/User';
// import AsyncStorage from '../../utils/syncStorage';

function* fetchUser(index: number) {
  try {
    const response: [data: User] = yield UserApi.getUser();
    console.log('=========response?.data?.results=====', response);

    if (response) {
      yield call(
        AsyncStorage.setItem,
        `user${index}`,
        JSON.stringify(response[index]),
      );
    }

    yield put(fetchUserSuccess(response[index]));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));
  }
}
function* fetchUser1(index: number) {
  try {
    const response: [data: User] = yield UserApi.getUser();
    console.log('=========response?.data?.results=====', response);

    if (response) {
      yield call(
        AsyncStorage.setItem,
        `user${index}`,
        JSON.stringify(response[index]),
      );
    }

    yield put(saveUser1(response[index]));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));


  }
}

function* userSaga() {
  yield all([
    takeLatest(fetchUserRequest.type, fetchUser, 0),
    takeLatest(fetchUserRequest.type, fetchUser1, 1),
  ]);
}

export default userSaga;
