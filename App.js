import React, {useEffect} from 'react';
import Screens from './Screens';
import AuthProvider from './src/context/AuthCtx';
import { androidChannel, backgroundPushNotifs, localPushesProps, reqIosPermission } from './src/lib/pushNotif';

backgroundPushNotifs();
reqIosPermission();
androidChannel();

export default function App() {

useEffect(() => {
  localPushesProps();
}, []);

  return (
    <AuthProvider>
		 <Screens/>
    </AuthProvider>
  );
}