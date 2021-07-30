import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import SuperHeader from '../components/SuperHeader';
import { useTheme } from '../context/ThemeCtx';

const MainLayout = ({children}) => {

  const {theme} = useTheme();

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
      paddingBottom: 16
    }
  });

    return (
        <SafeAreaView style={styles.container}>
			<StatusBar
				barStyle={theme.type === 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={theme.headerColor}
			/>
			<ImageBackground style={styles.bg} source={theme.backgroundImage} resizeMode='cover'>
			<SuperHeader/>
				<ScrollView contentContainerStyle={styles.wrapper}>
					{children}
				</ScrollView>
			</ImageBackground>
        </SafeAreaView>
    )
}

export default MainLayout;