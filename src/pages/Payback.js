import React from 'react'
import { Text, StyleSheet, ScrollView, BackHandler } from "react-native";

const Payback = () => {
    BackHandler.addEventListener('hardwareBackPress', () => console.log('Ill be back'))
    return (
        
        <Text>
            Вывод средств
        </Text>

    )
}

export default Payback;