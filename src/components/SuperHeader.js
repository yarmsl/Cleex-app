import React from 'react';
import { useTheme } from '../context/ThemeCtx';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const SuperHeader = ({title}) => {
	const nav = useNavigation();
	const route = useRoute();
	const { theme } = useTheme();
	const styles = StyleSheet.create({
		header: {
			width: '100%',
			height: 50,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingHorizontal: 15,
			backgroundColor: theme.headerColor,
		},
		sideblock: {
			width: 25,
		}
	});

	return (
		<View style={styles.header}>
			<View style={styles.sideblock}>
				{ (route.name !== 'Home' && route.name !== 'Account') && <Icon
					onPress={() => nav.goBack()}
					iconStyle={{ width: '100%' }}
					name='left'
					type='antdesign'
					color={theme.textColor}
				/>}
			</View>
			{theme.headerLogo || <Text style={{ color: '#fff', fontSize: 20 }}>{title}</Text>} 
			<View style={styles.sideblock}></View>
		</View>
	)
}

export default SuperHeader;
