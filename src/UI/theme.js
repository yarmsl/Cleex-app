import React from "react";
import Logo from "../components/Logo";
import { Text } from "react-native";

export const design = {
    cleex: {
        headerColor: '#FFFFFF',
        headerLogo: <Logo/>,
        backgroundColor: '#F5F2ED',
        backgroundImage: require('../images/bgw.png'),
        textColor: '#192921',
        primeColor: '#AA9B71',

    },
    topka: {
        logo: require('../images/topka_logo.png'),
        headerColor: '#192021',
        headerLogo: <Text style={{color: '#fff', fontSize: 20}}>Topka Reborn</Text>,
        backgroundColor: '#2E3435',
        backgroundImage: require('../images/topka_bg.png'),
        textColor: '#FFFFFF',
        primeColor: '#78BBE1',
        button: {
            light: {
                title: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#000',
                    textTransform: 'uppercase',
                    paddingHorizontal: 32,
                    paddingVertical: 6
                },
                backgroundColor: '#EDF1F5',
                borderRadius: 12
            }
        }
    }
};