import React from 'react';
import { Image, View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useHistory } from 'react-router-native';
import { useAuth } from '../context/AuthCtx';
import { useTheme } from '../context/ThemeCtx';

const Account = () => {
    const {logOut, destroySession, userId} = useAuth();
    const {theme} = useTheme();
    const router = useHistory();
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '90%',
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

    console.log('Barmen: ',userId);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.img} resizeMode='contain' source={theme.logo}/>
            </View>
            <View style={styles.bottom}>
                <Button 
                    buttonStyle={theme.button.light}
                    titleStyle={theme.button.light.title}
                    title='Выбрать столик на сегодня'
                    onPress={() => router.push('/tables')}
                />
                <Button 
                    buttonStyle={theme.button.light}
                    titleStyle={theme.button.light.title}
                    title='Настройка профиля'
                    onPress={() => router.push('/settings')}
                />
                <Button 
                    buttonStyle={theme.button.light}
                    titleStyle={theme.button.light.title}
                    title='Вывод средств'
                    onPress={() => router.push('/payback')}
                />
                <Button 
                    buttonStyle={theme.button.light}
                    titleStyle={theme.button.light.title}
                    title='Выйти'
                    onPress={() => {destroySession().then(() => logOut())}}    
                />
            </View>
        </View>
    )
}

export default Account;