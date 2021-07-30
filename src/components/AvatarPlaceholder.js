import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text } from "react-native";
import { Icon } from 'react-native-elements';
import { initials } from '../lib/services';

const styles = StyleSheet.create({
	placeholder: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	 },
	 initials: {
		color: '#fff',
		fontSize: 40
	 }
}) 

const AvatarPlaceholder = ({name}) => {
	return (
		<LinearGradient
			start={{x: 0, y: 0}} 
			end={{x: 0, y: 1}} 
			colors={['#78bbe1', '#5c98b9']}
			style={styles.placeholder}>
			{name ? 
			<Text style={styles.initials}>{initials(name)}</Text> : 
			<Icon 
				size={56} 
				color={'#fff'} 
				name='user' 
				type='entypo'/>}
  		</LinearGradient>
	)
}

export default AvatarPlaceholder;