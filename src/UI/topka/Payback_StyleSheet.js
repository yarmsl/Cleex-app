import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
	waiter: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
        marginTop: 24,
		marginBottom: 12
	},
	avatarContainer: {
		width: 120,
		height: 120,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elevation: 3
	},
	avatarOverlay: {
		borderRadius: 100,
		backgroundColor: '#78bbe1',
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
	sum: {
		display: 'flex',
		flexDirection: 'row'
	},
	primeColorText: {
		color: '#78bbe1',
		fontSize: 14,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
	},
	lightColorText: {
		color: '#fff',
		fontSize: 14,
	},
	bottomBlock: {
		width: '100%',
		height: '100%',
		marginTop: 12,
		paddingHorizontal: 32,
		paddingVertical: 16,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		backgroundColor: '#192021',
		shadowOffset: { width: 0, height: -4 },
		shadowOpacity: 0.25,
		shadowRadius: 10,
		elevation: 3
	},
	inputSum: {
		color: '#fff',
		fontSize: 36,
		marginVertical: 8,
		textAlign: 'center'

	},
	inputSumContainer: {
		width: '100%',
		borderBottomWidth: 2,
		borderColor: '#78bbe1'
	},
	info: {
		textAlign: 'left',
		width: '100%',
		paddingVertical: 8,
		paddingHorizontal: 8
	},
	buttonTitle: {
		fontSize: 20,
		fontWeight: '600',
		color: '#192021'
	},
	buttonIcon: {
		marginLeft: 8
	},
	buttonContainer: {
		width: '100%',
		marginTop: 24,
	},
	policies: {
		width: '100%',
		marginTop: 16,
		display: 'flex',
		flexDirection: 'row',
		
	},
	checkBoxContainer: {
		width: '10%',
		paddingLeft: 0,
		marginLeft: 0
		
	},
	policiesBox: {
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingTop: 15,
	}
});