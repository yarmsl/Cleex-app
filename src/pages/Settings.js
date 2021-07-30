import React, {useState, useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { View, KeyboardAvoidingView, Text } from "react-native";
import { Avatar, Input, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { initials } from '../lib/services';
import { vertical } from '../UI/topka/gradients';
import { styles } from '../UI/topka/Settings_StyleSheet';

const Settings = () => {
    const [photo, setPhoto] = useState();
    const [name, setName] = useState('')
    const [motto, setMotto] = useState('');
    const [saveBtn, setSave] = useState(false);
    const [waiter, setWaiter] = useState({
        name: 'Ярослав Макаров', 
        motto: 'Девиз Девиз Девиз девиз длинный девиз девиз', 
        // photo: require('../images/avatar.jpg')
    });
    const [menu, setMenu] = useState(false)

    const addPhoto = () => {
        setMenu(p => !p)
    };

    const uploadPhoto = () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 400,
            maxHeight: 400,
            quality: 0.7,
            cameraType: 'front',
        }

        launchImageLibrary(options, r => {
            setPhoto(r);
            if (!r?.didCancel) {
                setWaiter(prev => {
                    return {
                        ...prev,
                        photo: r?.assets.uri
                    }
                })
            }
        });
    }

    const handleSave = () => {
        if (name || motto) {
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
        if ( name.length > 0 || motto.length > 0) {
            setSave(true)
        } else {
            setSave(false)
        }
    }, [name, motto])

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "position" : "height"} 
            keyboardVerticalOffset={0}
            style={styles.container}
            >
            <View style={styles.waiter}>
                <View >
                    <Avatar
                        containerStyle={styles.avatar.container}
                        overlayContainerStyle={styles.avatar.overlay}
                        renderPlaceholderContent={
                            <LinearGradient
                                start={{x: 0, y: 0}} 
                                end={{x: 0, y: 1}} 
                                colors={['#78bbe1', '#5c98b9']}
                                style={styles.avatar.placeholder}>
                                {waiter.name ? 
                                <Text style={styles.avatar.initials}>{initials(waiter.name)}</Text> : 
                                <Icon 
                                    size={56} 
                                    color={'#fff'} 
                                    name='user' 
                                    type='entypo'/>}
                            </LinearGradient>
                        }
                        source={photo?.didCancel ? null : {uri: photo?.assets[0].uri}}
                    />
                    <View style={[styles.addphoto, menu ? styles.blackout : null]}>
                        <Icon 
                            onPress={addPhoto}
                            name='plus' 
                            type='entypo' 
                            color='#fff' 
                            size={40} 
                            iconStyle={menu ? styles.avatar.cross: styles.avatar.plus} 
                        />
                        {
                            menu &&
                            <Icon 
                            onPress={addPhoto}
                            name='folder-images' 
                            type='entypo' 
                            color='#fff' 
                            size={30} 
                            iconStyle={styles.photo} 
                            />
                        }{ menu &&
                            <Icon 
                            onPress={addPhoto}
                            name='camera' 
                            type='entypo' 
                            color='#fff' 
                            size={30} 
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
        </KeyboardAvoidingView>
    )
}

export default Settings;