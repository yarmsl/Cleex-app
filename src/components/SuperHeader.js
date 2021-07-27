import React from 'react';
import { useTheme } from '../context/ThemeCtx';
import {  StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-native';

const SuperHeader = () => {
    const {pathname} = useLocation();
    const router = useHistory();
    const {theme} = useTheme();
    const styles = StyleSheet.create({
        header: {
            width: '100%',
            height: 80,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 45,
            paddingHorizontal: 20,
            backgroundColor: theme.headerColor,
            },
        sideblock: {
            width: 25,
        }
        });

    return (
            <View style={styles.header}> 
                <View style={styles.sideblock}>
                    {(pathname !== '/') &&  
                        <Icon
                        onPress={() => router.push('/')}
                        iconStyle={{width: '100%'}}
                        name='left'
                        type='antdesign'
                        color={theme.textColor}
                    />}
                </View>
                {theme.headerLogo}
                <View style={styles.sideblock}></View>
            </View>
    )
}

export default SuperHeader;
