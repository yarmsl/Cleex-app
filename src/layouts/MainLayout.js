import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from '../context/ThemeCtx';

const MainLayout = ({ children }) => {
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
			minHeight: '100%',
			
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
					<View style={styles.wrapper}>
						{children}
					</View>
				</ImageBackground>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

export default MainLayout;