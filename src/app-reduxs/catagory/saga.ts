import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, takeEvery, all, takeLatest } from "redux-saga/effects"; // Sửa import đúng
import UserApi from "../../networking/apis/User";
import { err, saveComment, saveCommentStart } from "./slice"; // Sửa import đúng cho actions

// Sửa hàm savComment để nhận action và trích xuất payload
function* savComment(index: number) {
  console.log('=========response?.data?.results=====');
  
  try {
    const response: any[] = yield call(UserApi.getUserTodos); // Đảm bảo gọi API đúng
    console.log('=========response?.data?. results=====', response);

    if (response && response[index]) {
      yield call(
        AsyncStorage.setItem,
        `comment${index}`,
        JSON.stringify(response[index]),
      );
      yield put(saveComment(response[index])); // Dispatch saveComment với phần tử mảng đúng
    }
  } catch (error: any) {
    yield put(err(error.message));
  }
}

// Sử dụng takeEvery để lắng nghe action saveCommentStart
function* commentSaga() {
//   yield takeEvery(saveCommentStart.type, savComment);
  yield all([takeLatest(saveCommentStart.type, savComment, 0)])
}

export default commentSaga;