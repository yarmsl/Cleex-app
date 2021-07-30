import React from "react";
import Logo from "../components/Logo";
import { Text } from "react-native";

export const design = {
    cleex: {
        type: 'light',
        headerColor: '#fff',
        headerLogo: <Logo/>,
        backgroundColor: '#F5F2ED',
        backgroundImage: require('../images/bgw.png'),
        textColor: '#192921',
        primeColor: '#AA9B71',
        button: {
            light: {
                backgroundColor: '#EDF1F5',
                borderRadius: 12,
            },
            lightTitle: {
                fontSize: 14,
                fontWeight: 'bold',
                color: '#000',
                textTransform: 'uppercase',
                paddingHorizontal: 32,
                paddingVertical: 6
            },
            outlined: {
                backgroundColor: 'rgba(120, 186, 225, 0.2)',
                borderTopWidth: 2,
                borderRightWidth: 2,
                borderBottomWidth: 2,
                borderLeftWidth: 2,
                borderRadius: 12,
                borderColor: '#78bbe1',
            },
            outlinedTitle: {
                color: '#78bbe1',
                fontSize: 14,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                paddingHorizontal: 30,
                paddingVertical: 4
            }

        }
    },
    topka: {
        type: 'dark',
        logo: require('../images/topka_logo.png'),
        headerColor: '#192021',
        headerLogo: <Text style={{color: '#fff', fontSize: 20}}>Topka Reborn</Text>,
        backgroundColor: '#2E3435',
        backgroundImage: require('../images/topka_bg.jpg'),
        textColor: '#FFFFFF',
        primeColor: '#78BBE1',
        button: {
            light: {
                backgroundColor: '#EDF1F5',
                borderRadius: 12,
            },
            lightTitle: {
                fontSize: 14,
                fontWeight: 'bold',
                color: '#000',
                textTransform: 'uppercase',
                paddingHorizontal: 32,
                paddingVertical: 6
            },
            outlined: {
                backgroundColor: 'rgba(120, 186, 225, 0.2)',
                borderTopWidth: 2,
                borderRightWidth: 2,
                borderBottomWidth: 2,
                borderLeftWidth: 2,
                borderRadius: 12,
                borderColor: '#78bbe1',
            },
            outlinedTitle: {
                color: '#78bbe1',
                fontSize: 14,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                paddingHorizontal: 30,
                paddingVertical: 4
            }

        }
    }
};
