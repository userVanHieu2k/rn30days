// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppContainer from './src/navigators/AppContainer';
import messaging from '@react-native-firebase/messaging';
import {Provider} from 'react-redux';
import store from './src/app-reduxs/store';

const Stack = createNativeStackNavigator();

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

function App() {
  React.useEffect(() => {
    requestUserPermission();

    // Lấy token FCM
    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token:', token);
      });

    // Xử lý thông báo khi ứng dụng đang chạy
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
  );
}

export default App;
