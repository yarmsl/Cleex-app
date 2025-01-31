import React from 'react'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	root: {
		paddingBottom: 32,
	},
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingHorizontal: 16,
		paddingTop: 32
	},
	waiter: {
		minWidth: '100%',
		width: '100%',
		marginBottom: 10,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatarContainer: {
		width: 120,
		height: 120,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	avatarOverlay: {
		borderRadius: 100,
		backgroundColor: '#78bbe1',

	},
	plus: {
		transform: [{ rotateZ: '0deg' }]
	},
	cross: {
		transform: [{ rotateZ: '45deg' }]
	},
	addphoto: {
		backgroundColor: 'rgba(25,32,33,0.123)',
		borderRadius: 50,
		position: 'absolute',
		top: -3,
		right: -3
	},
	blackout: {
		backgroundColor: 'rgba(25,32,33,0.7)',
		zIndex: 800,
	},
	photo: {
		paddingVertical: 8
	},
	name: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 5,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 10
	},
	motto: {
		color: '#fff',
		fontSize: 15,
		width: '80%',
		textAlign: 'center',
		marginVertical: 5,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	form: {
		minWidth: '100%',
		width: '100%',
		backgroundColor: '#192021',
		borderRadius: 8,
		paddingHorizontal: 16,
		paddingVertical: 32,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elevation: 6
	},
	inputContainer: {
		borderColor: '#78bbe1',
		borderBottomWidth: 2,
		marginVertical: 6
	},
	inputLabel: {
		color: '#fff'
	},
	input: {
		color: '#fff'
	},
	button: {
		borderRadius: 12,
	},
	buttonTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#fff',
		textTransform: 'uppercase',
		paddingHorizontal: 32,
		paddingVertical: 6
	},
});