import axios from 'axios';
import Config from "react-native-config";

// Tạo một instance của axios
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // Địa chỉ gốc của API
  timeout: 10000, // Thời gian chờ tối đa cho mỗi yêu cầu (10 giây)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm một interceptor để xử lý các yêu cầu trước khi gửi đi
instance.interceptors.request.use(
  (config) => {
    console.log("cxz", Config.BASE_URL);
    
    // Bạn có thể thêm token vào header nếu cần
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Thêm một interceptor để xử lý các phản hồi từ server
instance.interceptors.response.use(
  (response) => {
    // Xử lý dữ liệu trả về nếu cần
    return response.data;
  },
  (error) => {
    // Xử lý lỗi (ví dụ: thông báo lỗi, log lỗi, ...)
    return Promise.reject(error);
  }
);

export default instance;
