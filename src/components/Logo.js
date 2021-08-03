import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const Logo = () => {

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center'
        },
        logoBox: { 
            width: 120,
            height: 24,
        }, 
        logo: {
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'contain'
            },
        title: {
            fontSize: 7,
        }
        });

    return (
        <View style={styles.container}> 
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={require('../images/logo.png')}/>
            </View>
            <Text style={styles.title}>Современное решение для бизнеса</Text>
        </View>
    )
}

export default Logo
