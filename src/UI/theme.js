import React from "react";
import Logo from "../components/Logo";
import { Text, StyleSheet } from "react-native";

export const design = {
    cleex: {
        headerColor: '#FFFFFF',
        headerLogo: <Logo/>,
        backgroundColor: '#F5F2ED',
        backgroundImage: require('../images/bgw.png'),
        textColor: '#192921',
        primeColor: '#AA9B71',
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
                borderRadius: 12,
                linearGradient: {
                    colors: ['#fff', '#c4c4c4'],
                    start: {x: 0, y: 0.2},
                    end: {x: 0, y: 1}
                }
            }
        }
    },
    topka: {
        logo: require('../images/topka_logo.png'),
        headerColor: '#192021',
        headerLogo: <Text style={{color: '#fff', fontSize: 20}}>Topka Reborn</Text>,
        backgroundColor: '#2E3435',
        backgroundImage: require('../images/topka_bg.jpg'),
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
                borderRadius: 12,
                linearGradient: {
                    colors: ['#fff', '#c4c4c4'],
                    start: {x: 0, y: 0.2},
                    end: {x: 0, y: 1}
                }
            },
            outlined: {
                backgroundColor: 'rgba(120, 186, 225, 0.2)',
                borderTopWidth: 2,
                borderRightWidth: 2,
                borderBottomWidth: 2,
                borderLeftWidth: 2,
                borderRadius: 12,
                borderColor: '#78bbe1',
                title: {
                    color: '#78bbe1',
                    fontSize: 14,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    paddingHorizontal: 30,
                    paddingVertical: 4
                }
            }
        }
    }
};

export const topkaTables = StyleSheet.create({
    container: {
        width: '100%',
        height: '90%',
        display: 'flex',
        },
    tableBox: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 20
    },
    tableLeft: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bar: {
        width: '50%',
        height: '100%',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    barText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700'
    },
    tableRight: {
        width: '50%',
        paddingRight: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    table: {
        width: 56,
        height: 56,
        borderRadius: 56,
        marginVertical: 6
    },
    tableLong: {
        width: 100,
        height: 56,
        borderRadius: 56,
        marginVertical: 6
    },
    tableTitle: {
        color: '#000',
        fontSize: 24,
        fontWeight: '700'
    },
    tableDisabledTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700'
    },
    buttonBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});

export const gradients = {
    grey: {
        colors: ['#fff', '#c4c4c4'],
        start: {x: 0, y: 0.2},
        end: {x: 0, y: 1}
    },
    blue: {
        colors: ['#78bbe1', '#5c98b9'],
        start: {x: 0, y: 0.2},
        end: {x: 0, y: 1}
    },
    green: {
        colors: ['#baffae', '#73b768'],
        start: {x: 0, y: 0.2},
        end: {x: 0, y: 1}
    },
    black: {
        colors: ['#2e3435', '#192021'],
        start: {x: 0, y: 0.2},
        end: {x: 0, y: 1}
    }
};