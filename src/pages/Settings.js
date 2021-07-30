import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text } from "react-native";
import { Avatar, Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { vertical } from '../UI/topka/gradients';
import { styles } from '../UI/topka/Settings_StyleSheet';

const Settings = () => {
    const [saveBtn, setSave] = useState(true);
    
    const [nameError, setNameError] = useState('');
    const [mottoError, setMottoError] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.waiter}>
                <Avatar
                    containerStyle={styles.avatar.container}
                    overlayContainerStyle={styles.avatar.overlay}
                    title='ЯМ'
                    source={require('../images/avatar.jpg')}
                />
                <Text style={styles.name}>Андрей Чепатубрей</Text>
                <Text style={styles.motto}>Девиз Девиз Девиз девиз длинный девиз девиз</Text>
            </View>
            <View style={styles.form}>
                <Input
                    label='Имя'
                    placeholder='Введите имя'
                    errorMessage={nameError}
                    inputContainerStyle={styles.input.inputContainer}
                    inputStyle={styles.input.input}
                    labelStyle={styles.input.label}
                />
                <Input
                    label='Девиз'
                    placeholder='Введите девиз'
                    errorMessage={mottoError}
                    inputContainerStyle={styles.input.inputContainer}
                    inputStyle={styles.input.input}
                    labelStyle={styles.input.label}
                />
                {saveBtn && <Button
                    title='Сохранить'
                    buttonStyle={styles.button.button}
                    titleStyle={styles.button.title}
                    ViewComponent={LinearGradient}
                    linearGradientProps={vertical.blue} 
                />}
            </View>
        </ScrollView>
    )
}

export default Settings;