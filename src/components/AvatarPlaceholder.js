import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text } from "react-native";
import { Icon } from 'react-native-elements';
import { initials } from '../lib/services';
import { useTheme } from '../context/ThemeCtx';

const AvatarPlaceholder = ({name, size}) => {

	const { theme } = useTheme()
	const fontSize = () => {
		switch (size) {
			case 'small':
				return 15;
			case 'medium':
				return 24;
			case 'large':
				return 40;
			default: 
				return 24;
		}
	};

	const iconSize = () => {
		switch (size) {
			case 'small':
				return 18;
			case 'medium':
				return 24;
			case 'large':
				return 56;
			default: 
				return 24;
		}
	};

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
			fontSize: fontSize()
		 }
	}) 

	return (
		<LinearGradient
			start={{x: 0, y: 0}} 
			end={{x: 0, y: 1}} 
			colors={[theme.primeColor, theme.primeDarkColor]}
			style={styles.placeholder}>
			{name ? 
			<Text style={styles.initials}>{initials(name)}</Text> : 
			<Icon 
				size={iconSize()} 
				color={'#fff'} 
				name='user' 
				type='entypo'/>}
  		</LinearGradient>
	)
}

export default AvatarPlaceholder;