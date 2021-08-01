import React, { useState, useEffect } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { View, KeyboardAvoidingView, Text, ScrollView, Platform } from "react-native";
import { Avatar, Input, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { vertical } from '../UI/topka/gradients';
import { styles } from '../UI/topka/Settings_StyleSheet';
import AvatarPlaceholder from '../components/AvatarPlaceholder';

const Settings = () => {
	const [photo, setPhoto] = useState();
	const [name, setName] = useState('')
	const [motto, setMotto] = useState('');
	const [saveBtn, setSave] = useState(false);
	const [waiter, setWaiter] = useState({
		name: '',
		motto: 'Девиз Девиз Девиз девиз длинный девиз девиз',
		// photo: require('../images/avatar.jpg')
	});
	const [menu, setMenu] = useState(false)

	const addPhoto = () => {
		setMenu(p => !p)
	};

	const uploadPhoto = (where) => {
		const options = {
			mediaType: 'photo',
			maxWidth: 400,
			maxHeight: 400,
			quality: 0.7,
			cameraType: 'front',
		}

		const savePhoto = (file) => {
			setPhoto(file);
			if (!file?.didCancel) {
				setMenu(false);
				setWaiter(prev => {
					return {
						...prev,
						photo: file?.assets[0].uri
					}
				})
			} else {
				setMenu(false)
			}
		}
		if (where === 'gallery') {
			launchImageLibrary(options, r => savePhoto(r));
		} else if (where === 'camera') {
			launchCamera(options, r => savePhoto(r))
		}

	}

	const handleSave = () => {
		if (name || motto) { //Для отправки на бэк возможно придётся разделить
			setWaiter(prev => {
				return {
					...prev,
					name: name ? name : prev.name,
					motto: motto ? motto : prev.motto
				}
			})
		}
	}

	useEffect(() => {
		if (name.length > 0 || motto.length > 0) {
			setSave(true)
		} else {
			setSave(false)
		}
	}, [name, motto])
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "position" : "height"}
			keyboardVerticalOffset={0}
			style={styles.root}
		>
			<ScrollView  contentContainerStyle={styles.container}>
				<View style={styles.waiter}>
					<View>
						<Avatar
							containerStyle={styles.avatar.container}
							overlayContainerStyle={styles.avatar.overlay}
							source={waiter.photo ? { uri: waiter.photo } : null}
							renderPlaceholderContent={<AvatarPlaceholder name={waiter.name} size={'large'} />}
						/>
						<View style={[styles.addphoto, menu ? styles.blackout : null]}>
							<Icon
								onPress={addPhoto}
								name='plus'
								type='entypo'
								color='#fff'
								size={40}
								iconStyle={menu ? styles.avatar.cross : styles.avatar.plus}
							/>
							{
								menu &&
								<Icon
									onPress={() => uploadPhoto('gallery')}
									name='folder-images'
									type='entypo'
									color='#fff'
									size={28}
									iconStyle={styles.photo}
								/>
							}{menu &&
								<Icon
									onPress={() => uploadPhoto('camera')}
									name='camera'
									type='entypo'
									color='#fff'
									size={28}
									iconStyle={styles.photo}
								/>
							}
						</View>
					</View>
					<Text style={styles.name}>{waiter.name}</Text>
					<Text style={styles.motto}>{waiter.motto}</Text>
				</View>
				<View style={styles.form}>
					<Input
						label='Имя'
						placeholder='Введите имя'
						inputContainerStyle={styles.input.inputContainer}
						inputStyle={styles.input.input}
						labelStyle={styles.input.label}
						value={name}
						onChangeText={setName}
					/>
					<Input
						label='Девиз'
						placeholder='Введите девиз'
						inputContainerStyle={styles.input.inputContainer}
						inputStyle={styles.input.input}
						labelStyle={styles.input.label}
						value={motto}
						onChangeText={setMotto}
					/>
					{saveBtn && <Button
						onPress={() => handleSave()}
						title='Сохранить'
						buttonStyle={styles.button.button}
						titleStyle={styles.button.title}
						ViewComponent={LinearGradient}
						linearGradientProps={vertical.blue}
					/>}
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default Settings;