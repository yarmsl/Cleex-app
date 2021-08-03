import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import SignIn from '../components/SignIn';
import { useAuth } from '../context/AuthCtx';
import { useTheme } from '../context/ThemeCtx';

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
		</View>
	);
};

export default Home;