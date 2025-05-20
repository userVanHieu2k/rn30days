import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContainer from './src/navigators/AppContainer';
import messaging from '@react-native-firebase/messaging';
import { Provider } from 'react-redux';
import store from './src/app-reduxs/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      // Đảm bảo đăng ký thiết bị trước khi lấy token
      await messaging().registerDeviceForRemoteMessages();
      console.log('Device registered for remote messages');
    } else {
      console.log('Permission denied');
    }
  } catch (error) {
    console.log('Error requesting permission:', error);
  }
}

function App() {
  React.useEffect(() => {
    requestUserPermission();

    // Sau khi thiết bị đã được đăng ký, lấy token FCM
    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token:', token);
      })
      .catch(err => {
        console.log('Error getting FCM token:', err);
      });

    // Xử lý thông báo khi ứng dụng đang chạy
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    // Xử lý thông báo khi ứng dụng chạy nền
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
