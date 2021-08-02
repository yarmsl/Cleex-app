import React from 'react';
import { useTheme } from '../context/ThemeCtx';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../context/AuthCtx';
import { Avatar } from 'react-native-elements';
import AvatarPlaceholder from './AvatarPlaceholder';

const SuperHeader = () => {
	const nav = useNavigation();
	const route = useRoute();
	const { theme, switchTheme } = useTheme();
	const { isAuth } = useAuth();

	const styles = StyleSheet.create({
		header: {
			width: '100%',
			height: 50,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingHorizontal: 15,
			backgroundColor: theme.headerColor,
			// shadowOffset: { width: 0, height: 10 },
			// shadowOpacity: 0.5,
			// shadowRadius: 5,
			elevation: 6
		},
		sideblock: {
			width: 35,
		},
		avatarContainer: {
			width: 34,
			height: 34,
			shadowOffset: { width: 0, height: 0 },
			shadowOpacity: 0.5,
			shadowRadius: 2,
		},
		avatarOverlay: {
			borderRadius: 40,
			backgroundColor: '#78bbe1',
			elevation: 3
		}
	});

	const title = () => {
		switch (route.name) {
			case 'Account':
				return 'Topka Reborn';
			case 'Tables':
				return 'Выбрать столик';
			case 'Settings':
				return 'Настройка профиля';
			case 'Payback':
				return 'Вывод средств';
			default:
				return 'Topka Reborn'
		}
	}

	return (
		<View style={styles.header}>
			<View style={styles.sideblock}>
				{route.name !== 'Home' &&
					<Icon
						onPress={() => nav.goBack()}
						iconStyle={{ width: '100%', paddingLeft: 4 }}
						name='left'
						type='antdesign'
						color={theme.textColor}
					/>
				}
			</View>
			{theme.headerLogo || <Text style={{ color: '#fff', fontSize: 20 }}>{title()}</Text>}
			<View style={styles.sideblock}>
				{isAuth && <Avatar
					containerStyle={styles.avatarContainer}
					overlayContainerStyle={styles.avatarOverlay}
					// source={}
					renderPlaceholderContent={<AvatarPlaceholder name={''} size={'small'} />}
					onPress={() => route.name === 'Home' ? (nav.navigate('Account'), switchTheme('topka')) : nav.navigate('Settings') }
				/>}
			</View>
		</View>
	)
}

export default SuperHeader;