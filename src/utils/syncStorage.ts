import AsyncStorage from "@react-native-async-storage/async-storage";

const set = async (name: any, value: any) => {
  try {
    return await AsyncStorage.setItem(name, value);
  } catch (e) {
    // save error
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return "";
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
