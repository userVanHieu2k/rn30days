import React, {useEffect, useRef, useState} from 'react';
import {Text, View, PermissionsAndroid, TouchableOpacity, Animated, PanResponder, Alert} from 'react-native';
import styles from './styles';
import usePushNotification from '../../hooks/useNotification';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import UserApi from '../../networking/apis/User';
import { useSelector } from 'react-redux';
import { RootState } from '../../app-reduxs/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PushNoti = () => {
  const {getToken} = usePushNotification()
  const [count, setCount] = useState<number>(0)

  const userState = useSelector((state: RootState) => state.comment);

  const getUserData = async () => {
    try {
      // Sử dụng await để đợi Promise hoàn thành
      const jsonValue = await AsyncStorage.getItem('comment0');
      if (jsonValue !== null) {
        // Chuyển đổi chuỗi JSON thành object
        const userObject = JSON.parse(jsonValue);
        console.log('User Data Object:', userObject);
        return userObject; // Trả về object người dùng
      } else {
        console.log('No data found for the key "user"');
        return null; // Trả về null nếu không có dữ liệu
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
      return null; // Trả về null trong trường hợp có lỗi
    }
  };

  useEffect(() => {
    // Log dữ liệu ra console khi component mount
    console.log('User State:', userState);
    getUserData()
  }, [userState]);

  useEffect(() => {
    getToken()
    notifee.setBadgeCount(count);
    
  }, [count])

  const fetchUser = async () => {
    try {
      const data = await UserApi.getUser();
      // console.log(data) // Giả sử bạn chỉ cần người dùng đầu tiên
    } catch (err) {
      Alert.alert('Error', 'Failed to fetch user')
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const pushNoti = () => {
    console.log('zooo');
    
    notifee.displayNotification({
      title: 'Your order has been shipped',
      body: `Your order was shipped at df!`,
      android: {
        channelId: 'orders',
      },
    });
  }

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <View style={styles.containerPush}>
      <TouchableOpacity onPress={onDisplayNotification} style={styles.buttonBlue}>
        <Text style={styles.text}>send local notification</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(5)} style={styles.buttonRed}>
        <Text style={styles.text}>set appicon bet to 5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(0)} style={styles.buttonBlack}>
        <Text  style={styles.text}>remove app icon</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PushNoti