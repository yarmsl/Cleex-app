import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text } from "react-native";
import { Avatar, Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { vertical } from '../UI/gradients';


const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 32,
        },
    waiter: {
        width: '100%',
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        container: {
            width: 120,
            height: 120,
        },
        overlay: {
            borderRadius: 100
        }
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5
    },
    motto: {
        color: '#fff',
        fontSize: 15,
        width: '80%',
        textAlign: 'center',
        marginVertical: 5
    },
    form: {
        width: '100%',
        backgroundColor: '#192021',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        inputContainer: {
            borderColor: '#78bbe1',
            borderBottomWidth: 2,
            marginVertical: 6
        },
        label: {
            color: '#fff'
        },
        input: {
            color: '#fff'
        }
    },
    button: {
        button: {
            borderRadius: 12,
        },
        title: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000',
            textTransform: 'uppercase',
            paddingHorizontal: 32,
            paddingVertical: 6
        },
        disabled: {
            title: {
                color: '#000'
            }
        }
    }
};

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