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
		shadowOffset: { width: 0, height: 4 },
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

		</View>
	);
};

export default Home;