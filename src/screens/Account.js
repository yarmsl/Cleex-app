import React, {useEffect} from 'react';
import { Image, View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useAuth } from '../context/AuthCtx';
import { useTheme } from '../context/ThemeCtx';
import { vertical } from '../UI/topka/gradients';
import LinearGradient from 'react-native-linear-gradient';

const Account = ({ navigation }) => {
	const { logOut, destroySession } = useAuth();
	const { theme, switchTheme } = useTheme();

	useEffect(() => {
		navigation.addListener('beforeRemove', () => switchTheme('cleex'))
	}, [navigation])

	const styles = StyleSheet.create({
		container: {
			width: '100%',
			minHeight: '90%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		top: {
			width: '100%',
			height: '50%',
			alignItems: 'center',
			justifyContent: 'center'
		},
		bottom: {
			width: '100%',
			height: '50%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center'
		},
		img: {
			width: '85%',
			height: '85%',
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Image style={styles.img} resizeMode='contain' source={theme.logo} />
			</View>
			<View style={styles.bottom}>
				<Button
					buttonStyle={theme.button.light}
					titleStyle={theme.button.lightTitle}
					title='Выбрать столик на сегодня'
					onPress={() => navigation.navigate('Tables')}
					ViewComponent={LinearGradient}
					linearGradientProps={vertical.grey}
				/>
				<Button
					buttonStyle={theme.button.light}
					titleStyle={theme.button.lightTitle}
					title='Настройка профиля'
					onPress={() => navigation.navigate('Settings')}
					ViewComponent={LinearGradient}
					linearGradientProps={vertical.grey}
				/>
				<Button
					buttonStyle={theme.button.light}
					titleStyle={theme.button.lightTitle}
					title='Вывод средств'
					onPress={() => navigation.navigate('Payback')}
					ViewComponent={LinearGradient}
					linearGradientProps={vertical.grey}
				/>
				<Button
					buttonStyle={theme.button.light}
					titleStyle={theme.button.lightTitle}
					title='Выйти'
					onPress={() => { destroySession().then(() => {logOut(), switchTheme('cleex')}) }}
					ViewComponent={LinearGradient}
					linearGradientProps={vertical.grey}
				/>
			</View>
		</View>
	)
}

export default Account;