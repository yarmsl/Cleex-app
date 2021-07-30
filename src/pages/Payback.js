import React, {useEffect} from 'react'
import { Text, StyleSheet, ScrollView, BackHandler } from "react-native";
import { useHistory } from 'react-router-native';

const Payback = () => {
	 const router = useHistory();
	 const back = () => {
		 router.push('/');
	 }
	 useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', back)
		 return () => {
			BackHandler.removeEventListener('hardwareBackPress', back)
		 }
	 }, [])
    
    return (
        
        <Text>
            Вывод средств
        </Text>

    )
}

export default Payback;