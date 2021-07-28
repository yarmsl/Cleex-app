import React, {useState, useEffect} from 'react';
import { Text, ScrollView, View } from "react-native";
import { useTheme } from '../context/ThemeCtx';
import { topkaTables as styles, gradients } from '../UI/theme';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useAuth } from '../context/AuthCtx';
import LinearGradient from 'react-native-linear-gradient';

const Tables = () => {
    const tableCount = 7;
    const busyTables = [1, 2, 3, 4];
    const myBusyTables = [2, 3];

    const {id} = useAuth();
    const {theme} = useTheme();

    const [tables, setTables] = useState([]);
    const [selectedTables, setSelectedTables] = useState([]);
    
    useEffect(() => {
        for (let i = 1; i <= tableCount; i++) {
            if (tables.length === tableCount) {
                setTables(tables);
            } else {
                setTables(p => [...p, i])
            }
        }
    }, [tableCount])

    const selectTable = (num) => {
        if (selectedTables.includes(num)) {
            setSelectedTables(p => p.filter(table => table !== num))
        } else {
            setSelectedTables(p => [...p, num].sort())
        } 
    };

    return (
        <ScrollView style={styles.container}>
            {console.log(selectedTables)}
            <View style={styles.tableBox}>
                <View style={styles.tableLeft}>
                    <LinearGradient 
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}} 
                        colors={['#192021', '#2E3435']}
                        style={styles.bar}
                        >
                        <Text style={styles.barText}>Бар</Text>
                    </LinearGradient>
                </View>
                <View style={styles.tableRight}>
                    {tables.map(table => {
                        return (
                            <Button key={table}
                                onPress={() => selectTable(table)}
                                titleStyle={styles.tableTitle}
                                buttonStyle={ table === 3 ? styles.tableLong :styles.table}
                                title={table}
                                ViewComponent={LinearGradient}
                                linearGradientProps={myBusyTables.includes(table) ? gradients.green : (busyTables.includes(table) ? gradients.black : (selectedTables.includes(table) ? gradients.blue : gradients.grey))}
                                disabledTitleStyle={myBusyTables.includes(table) ? null : styles.tableDisabledTitle}
                                disabled={busyTables.includes(table) || myBusyTables.includes(table) ? true : false}
                            />
                        )
                    })}
                </View>
            </View>
            <View style={styles.buttonBox}>
                <Button
                    buttonStyle={theme.button.light}
                    titleStyle={theme.button.light.title}
                    title='Выбрать'
                    ViewComponent={LinearGradient}
                    linearGradientProps={theme.button.light.linearGradient}
                />
                <Button
                    title='Сброс'
                    buttonStyle={theme.button.outlined}
                    titleStyle={theme.button.outlined.title}
                />
            </View>
        </ScrollView>
    )
}

export default Tables