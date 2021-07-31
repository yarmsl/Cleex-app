import React, {useState, useEffect} from 'react';
import { Text, View } from "react-native";
import { useTheme } from '../context/ThemeCtx';
import { topkaTables as styles } from '../UI/topka/Tables_StyleSheet';
import { vertical as gradients } from '../UI/topka/gradients';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useAuth } from '../context/AuthCtx';
import LinearGradient from 'react-native-linear-gradient';
import PushNotification, {Importance} from 'react-native-push-notification';
import MainLayout from '../layouts/MainLayout';

const Tables = () => {
    const tableCount = 7;
    const busyTables = [1, 2, 3, 4];
    const selfBusyTables = [2, 3];
    
    const {id} = useAuth();
    const {theme} = useTheme();

    const [tables, setTables] = useState([]);
    const [selectedTables, setSelectedTables] = useState([]);
    
    useEffect(() => {
        for (let i = 1; i <= tableCount; i++) {
            if (tables.length === tableCount) {
                setTables(tables);
            } else {
                setTables(p => [...p, i])
            }
        }
    }, [tableCount])

    const selectTable = (num) => {
        if (selectedTables.includes(num)) {
            setSelectedTables(p => p.filter(table => table !== num))
        } else {
            setSelectedTables(p => [...p, num].sort())
        } 
    };

    const idNotif = Math.floor(Math.random()*1000);
    // Clear badge number at start
    PushNotification.getApplicationIconBadgeNumber(function (number) {
        if (number > 0) {
            PushNotification.setApplicationIconBadgeNumber(0);
        }
    });
        
    PushNotification.getChannels(function(channels) {
        console.log(channels);
    });

    function createDefaultChannels() { 
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
    };

    function popInitialNotification() {
        PushNotification.popInitialNotification((notification) => console.log('InitialNotication:', notification));
    }

    function localNotif(soundName) {
        PushNotification.localNotification({
          /* Android Only Properties */
          channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
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
          category: '', // (optional) default: empty string
          subtitle: "Hello from Cleex", // (optional) smaller title below notification title
    
          /* iOS and Android properties */
          id: idNotif, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
          title: 'Cleex Push', // (optional)
          message: 'Cleex test push', // (required)
          playSound: !!soundName, // (optional) default: true
          soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
          number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
        });
      }

    return (
		<MainLayout title={'Выбрать столик'}>
			<View style={styles.container}>
					{console.log(selectedTables)}
					<View style={styles.tableBox}>
						<View style={styles.tableLeft}>
							<LinearGradient 
									start={{x: 0, y: 0}} 
									end={{x: 1, y: 0}} 
									colors={['#192021', '#2E3435']}
									style={styles.bar}
									>
									<Text style={styles.barText}>Бар</Text>
							</LinearGradient>
						</View>
						<View style={styles.tableRight}>
							{tables.map(table => {
									return (
										<Button key={table}
											onPress={() => selectTable(table)}
											titleStyle={styles.tableTitle}
											buttonStyle={ table === 3 ? styles.tableLong :styles.table}
											title={table}
											ViewComponent={LinearGradient}
											linearGradientProps={selfBusyTables.includes(table) ? gradients.green : (busyTables.includes(table) ? gradients.black : (selectedTables.includes(table) ? gradients.blue : gradients.grey))}
											disabledTitleStyle={selfBusyTables.includes(table) ? null : styles.tableDisabledTitle}
											disabled={busyTables.includes(table) || selfBusyTables.includes(table) ? true : false}
										/>
									)
							})}
						</View>
					</View>
					<View style={styles.buttonBox}>
						<Button
							buttonStyle={theme.button.light}
							titleStyle={theme.button.lightTitle}
							title='Выбрать'
							ViewComponent={LinearGradient}
							linearGradientProps={gradients.grey}
						/>
						<Button
							title='Сброс'
							buttonStyle={theme.button.outlined}
							titleStyle={theme.button.outlinedTitle}
						/>
					</View>
					<View style={styles.buttonBox}>
						<Button
							title='Create default channel'
							buttonStyle={theme.button.outlined}
							titleStyle={theme.button.outlinedTitle}
							onPress={() => createDefaultChannels()}
						/>
					</View>
					<View style={styles.buttonBox}>
						<Button
							title='Init Notif'
							buttonStyle={theme.button.outlined}
							titleStyle={theme.button.outlinedTitle}
							onPress={() => popInitialNotification()}
						/>
						<Button
							title='Local Notif'
							buttonStyle={theme.button.outlined}
							titleStyle={theme.button.outlinedTitle}
							onPress={() => localNotif()}
						/>
					</View>
			</View>
		</MainLayout>
    )
}

export default Tables