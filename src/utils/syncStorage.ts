import AsyncStorage from "@react-native-async-storage/async-storage";

const set = async (name: any, value: any) => {
  try {
    // Kiểm tra nếu value là đối tượng hoặc mảng, chuyển đổi thành chuỗi
    const valueToStore = (typeof value === 'object' && value !== null) ? JSON.stringify(value) : value;
    return await AsyncStorage.setItem(name, valueToStore);
  } catch (e) {
    console.error('Save error', e);
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      try {
        // Thử chuyển đổi chuỗi về đối tượng/mảng, nếu không được thì trả lại chuỗi ban đầu
        return JSON.parse(value);
      } catch (e) {
        return value; // Nếu không thể parse, trả về giá trị ban đầu
      }
    }
  } catch (e) {
    console.error('Get error', e);
    return null;
  }
};

const remove = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};

export default {
  set,
  get,
  remove,
};
