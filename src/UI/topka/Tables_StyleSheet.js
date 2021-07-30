import React from 'react';
import { StyleSheet } from "react-native";

export const topkaTables = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
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
        marginVertical: 5,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});
