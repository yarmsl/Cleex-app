import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import SignIn from '../components/SignIn';
import { useAuth } from '../context/AuthCtx';
import { useTheme } from '../context/ThemeCtx';
import messaging from '@react-native-firebase/messaging';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		paddingVertical: 32,
		paddingHorizontal: 16
	},
	buttonContainer: {
		marginBottom: 8,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elevation: 3
	},
	button: {
		backgroundColor: '#fff',
	},
	buttonText: {
		color: '#192921'
	}
});

const Home = ({navigation}) => {
	const {isAuth} = useAuth();
	const {switchTheme} = useTheme();
	const [tok, setTok] = useState('init');

	const testPush = async() => {
		const data = await messaging().getToken();
		return data
	}

	return (
		<View style={styles.container}>
			
			{isAuth && <Button
				title="Личный кабинет"
				onPress={() => {navigation.navigate('Account'), switchTheme('topka');}}
				containerStyle={styles.buttonContainer}
				buttonStyle={styles.button}
				titleStyle={styles.buttonText}
			/> ||
			<SignIn/>}

			<Button
				title="Пользовательское соглашение"
				onPress={() => navigation.navigate('Policy', {policy: 'TermOfUse'})}
				containerStyle={styles.buttonContainer}
				buttonStyle={styles.button}
				titleStyle={styles.buttonText}
			/> 
			<Button
				title="Политика конфиденциальности"
				onPress={() => navigation.navigate('Policy', {policy: 'PersonalData'})}
				containerStyle={styles.buttonContainer}
				buttonStyle={styles.button}
				titleStyle={styles.buttonText}
			/> 
			<Button
				title="TEST"
				onPress={() => testPush().then(r => {setTok(r), console.log(r)})}
				containerStyle={styles.buttonContainer}
				buttonStyle={styles.button}
				titleStyle={styles.buttonText}
			/> 
			<Input value={tok} />
		</View>
	);
};

export default Home;