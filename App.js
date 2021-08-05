import React, {useEffect} from 'react';
import Screens from './Screens';
import AuthProvider from './src/context/AuthCtx';
import messaging, {firebase} from '@react-native-firebase/messaging';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification, {Importance} from "react-native-push-notification";

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
// var config = {
//   appId: "1:398425667760:ios:c2cf1bd07fcc98636b2375",
//   apiKey: "AIzaSyAtUPZworpbyCwliLFhd-jaw7jRvo-DxVk",
//   databaseURL: "",
//   messagingSenderId: "398425667760",
//   projectId: "cleex-ios-app",
//   storageBucket: "",
//   };
  
//   firebase.initializeApp(config);

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
requestUserPermission();

PushNotification.createChannel(
  {
    channelId: "default-channel-id", // (required)
    channelName: `Default channel`, // (required)
    channelDescription: "A default channel", // (optional) default: undefined.
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => console.log(`createChannel 'default-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

// const firebasePushSetup = async () => {
//   await messaging().registerDeviceForRemoteMessages();

//   const token = await messaging().getToken();
//   console.log('TOKEN =', token);

//   const granted = await messaging().requestPermission();
//   console.log('GRANTED =', granted);

//   messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//   });

//   const unsubscribe = messaging().onMessage(async remoteMessage => {
//     console.log('FCM Message Data:', remoteMessage.data);
//   });

//   return unsubscribe;
// };

// firebasePushSetup()


// // Must be outside of any component LifeCycle (such as `componentDidMount`).
// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },

//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);

//     // process the notification

//     // (required) Called when a remote is received or opened, or local notification is opened
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   onAction: function (notification) {
//     console.log("ACTION:", notification.action);
//     console.log("NOTIFICATION:", notification);

//     // process the action
//   },

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError: function(err) {
//     console.error(err.message, err);
//   },

//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,

//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    * - if you are not using remote notification or do not have Firebase installed, use this:
//    *     requestPermissions: Platform.OS === 'ios'
//    */
// 	requestPermissions: true,

// });
const idNotif = Math.floor(Math.random() * 1000);
export default function App() {
useEffect(() => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log('FCM Message Data:', remoteMessage);
    
      PushNotification.localNotification({
        /* Android Only Properties */
        channelId: 'default-channel-id',
        ticker: 'My Notification Ticker', // (optional)
        autoCancel: true, // (optional) default: true
        largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
        smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
        bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
        subText: 'This is a subText', // (optional) default: none
        color: 'red', // (optional) default: system default
        vibrate: true, // (optional) default: true
        vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        tag: 'some_tag', // (optional) add tag to message
        group: 'group', // (optional) add group to message
        groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
        ongoing: false, // (optional) set whether this is an "ongoing" notification
        actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
        invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
  
        when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
        usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
        timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
  
        /* iOS only properties */
        category: remoteMessage.category, // (optional) default: empty string
        subtitle: remoteMessage.notification.title, // (optional) smaller title below notification title
  
        /* iOS and Android properties */
        id: idNotif, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
        title: remoteMessage.notification.title, // (optional)
        message: remoteMessage.notification.body, // (required)
        playSound: true, // (optional) default: true
        number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
      });
    
  });
  return unsubscribe;
}, [])
  return (
    <AuthProvider>
		 <Screens/>
    </AuthProvider>
  );
}