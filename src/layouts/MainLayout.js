import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import SuperHeader from '../components/SuperHeader';
import { useTheme } from '../context/ThemeCtx';
import { useAuth } from '../context/AuthCtx';

const MainLayout = ({ children, title }) => {
	const {isAuth} = useAuth();
	const { theme } = useTheme();


	const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'column',
			backgroundColor: theme.backgroundColor,
			alignItems: 'center',
			justifyContent: 'center',
		},
		bg: {
			width: '100%',
			height: '100%'
		},
		wrapper: {
			width: '100%',
			minHeight: '90%',
			height: 'auto',
			paddingHorizontal: 16,

		}
	});

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
				<StatusBar
					barStyle={theme.type === 'dark' ? 'light-content' : 'dark-content'}
					backgroundColor={theme.headerColor}
				/>
				<ImageBackground style={styles.bg} source={theme.backgroundImage} resizeMode='cover'>
					<SuperHeader title={title}/>
					<ScrollView contentContainerStyle={styles.wrapper}>
						{children}
					</ScrollView>
				</ImageBackground>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

export default MainLayout;