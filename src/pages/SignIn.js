import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { useAuth } from '../context/AuthCtx';
import { useTheme } from '../context/ThemeCtx';
import { getDataByPost } from '../lib/fetch';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingVertical: 32,
	},
	signin: {
		width: '100%',
		backgroundColor: '#fff',
		borderRadius: 8,
		paddingHorizontal: 16,
		paddingVertical: 32,
		shadowOffset: {width: 0, height: 0},
        shadowOpacity: .25,
        shadowRadius: 16
	},
	inputContainer: {
		marginVertical: 5
	},
	rightIconContainer: {
		marginRight: 2,
	},
	button: {
		borderRadius: 4,
		backgroundColor: '#AA9B71',
		opacity: .8
	},
	buttonText: {
		fontWeight: '700'
	}
});

const SignIn = () => {
	const { logIn, setSession } = useAuth();
	const { switchTheme } = useTheme();
	const [login, setLogin] = useState('');
	const [pass, setPass] = useState('');
	const [visible, setVisible] = useState(true);
	const [errorLogin, setErrorLogin] = useState('');
	const [errorPass, setErrorPass] = useState('');
	const handleLog = async (e) => {
		e.preventDefault();
		setErrorLogin('');
		setErrorPass('');
		let logdata = { login: login, pass: pass };
		getDataByPost('https://cleex.ru/appleAuch', logdata)
			.then(data => {
				if (data !== undefined) {
					if (data.idUsers) {
						setSession(data.idUsers);
						switchTheme('topka');
						logIn();
					} else if (data.Message === 'No isset login.') {
						setErrorLogin('Неверный логин');
					} else if (data.Message === 'No isset password.') {
						setErrorPass('Неверный пароль');
					}
				} else {
					console.error('server dead');
				}
			});
	}

	return (
		<View style={styles.container}>
			<View style={styles.signin}>
				<Input
					inputContainerStyle={styles.inputContainer}
					rightIconContainerStyle={styles.rightIconContainer}
					value={login}
					onChangeText={setLogin}
					label='Логин'
					rightIcon={{ type: 'entypo', name: 'user' }}
					errorMessage={errorLogin}
				/>
				<Input
					inputContainerStyle={styles.inputContainer}
					rightIconContainerStyle={styles.rightIconContainer}
					value={pass}
					onChangeText={setPass}
					label='Пароль'
					secureTextEntry={visible}
					keyboardType='numeric'
					rightIcon={<Icon
						onPress={() => setVisible(p => !p)}
						name={visible ? 'eye' : 'eye-with-line'}
						type='entypo'
					/>}
					errorMessage={errorPass}
				/>
				<Button
					title='Войти'
					buttonStyle={styles.button}
					titleStyle={styles.buttonText}
					onPress={e => handleLog(e)}
				/>
			</View>
		</View>
	);
};

export default SignIn;