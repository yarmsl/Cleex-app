import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
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
      paddingHorizontal: 16,
      paddingBottom: 16
    }
  });

    return (
        <View style={styles.container}>
          <StatusBar
            barStyle={theme.type === 'dark' ? 'light-content' : 'dark-content'}
          />
          <ImageBackground style={styles.bg} source={theme.backgroundImage} resizeMode='cover'>
          <SuperHeader/>
            <View style={styles.wrapper}>
              {children}
            </View>
          </ImageBackground>
        </View>
    )
}

export default MainLayout;