import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export const DismissKeyboard = ({children}) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}

export const initials = (str) => {
    if (!str) {
        return ' ';
    };
    if (str.indexOf(' ') !== -1) {
        str = `${str.substr(0,1)}${str.substr(str.indexOf(' ') + 1, 1)}`
    } else {
        str = str.substr(0,1)
    }
    return str.toUpperCase();
}

export const addRubbleMark = (str) => {
    if (str.indexOf('₽') !== -1) {
        return str;
    } else if (!str) {
        return '';
    } else {
        return `${str} ₽`;
    }
}
export const onlyDigits = (str) => {
    if (str) {
        return str.replace(/\D+/g, '');
    } else {
        return '';
    }
    
}