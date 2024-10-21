import React, {useEffect} from "react";
import notifee, {
  AndroidImportance,
  EventDetail,
  EventType,
  Notification,
} from "@notifee/react-native";
import messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";
import {Platform} from "react-native";
// import {useDispatch} from "react-redux";
import { isAndroid } from "../utils/helpler";

enum SCREEN_TYPE {
  PLAN_SCREEN = "1",
}

const usePushNotification = () => {
  // const dispatch = useDispatch();
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // console.console.log("Authorization status:", authStatus)
    }
  }
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log("device_token", token);

    return token;
  };

  useEffect(() => {
    if (Platform.OS === "ios") {
      requestUserPermission();
    }
    (async () => {
      if (isAndroid) {
        await notifee.createChannel({
          id: "Base.main",
          name: "Base",
          badge: false,
          importance: AndroidImportance?.HIGH!,
        });
      }
    })();
    getToken();

    messaging().onNotificationOpenedApp(message => {
      console.log("onNotificationOpenedApp", message);
      switchScreen(message.data);
    });

    messaging()
      .getInitialNotification()
      .then(res => {
        console.log("getInitialNotification", res);
        initialNotification(res);
      });

    messaging().onMessage(onDisplayNotification);
    //@ts-ignore
    messaging().setBackgroundMessageHandler(() => {
      console.log("setBackgroundMessageHandler");
    });
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          onDismissNotification(detail.notification);
          break;
        case EventType.PRESS:
          onPressNotification(detail.notification);
          break;
        default:
          break;
      }
    });
  }, []);

  const initialNotification = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
  ) => {
    console.log("data initialNotification:", remoteMessage);
    const data = remoteMessage?.data;
    switchScreen(data);
  };

  const onPressNotification = (notification: Notification | undefined) => {
    const data = notification?.data;
    console.log("onPressNotification:", notification, data?.type);
    switchScreen(data);
  };
  interface dataNoti {
    task_id: string;
    type: string;
  }
  const switchScreen = (data: dataNoti | any | null) => {
    switch (data?.type) {
      case SCREEN_TYPE.PLAN_SCREEN:
        onNavigatePlanScreen();
        break;
      default:
        break;
    }
  };

  const onDismissNotification = (data: Notification | undefined) => {
    console.log("onDismissNotification", data);
  };

  async function onDisplayNotification(
    remoteMessage: FirebaseMessagingTypes.RemoteMessage,
  ) {
    console.log("remoteMessage", remoteMessage);
    const channelId = "Base.main";
    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage?.notification?.title! || "Base",
      body: remoteMessage?.notification?.body! || "Base",
      android: {
        channelId,
        smallIcon: "ic_launcher",
        color: "#00b136",
        colorized: true,
        badgeCount: 0,
        importance: AndroidImportance?.HIGH!,
        pressAction: {
          id: "default",
          mainComponent: "App",
        },
      },
      data: remoteMessage?.data!,
    });
  }

  const onNavigatePlanScreen = async () => {};

  return {
    getToken,
    onDisplayNotification
  };
};
export default usePushNotification
