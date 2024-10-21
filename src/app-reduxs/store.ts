// store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user/slice'; // Import user reducer
import userSaga from './user/saga'; // Import user saga
import { all } from 'redux-saga/effects';
import commentSaga from './catagory/saga';
import commentReducer from './catagory/slice';

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Root saga để kết hợp tất cả các sagas
function* rootSaga() {
  yield all([
    userSaga(),
    commentSaga(),
    // Thêm các saga khác nếu có
  ]);
}

// Cấu hình store
const store = configureStore({
  reducer: {
    user: userReducer, // Đặt tên reducer là 'user'
    comment: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Chạy root saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
