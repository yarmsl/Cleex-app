import React, {useState} from 'react';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { useTheme } from '../context/ThemeCtx';

const PolicyListItem = ({icon, title, child}) => {
    const {theme} = useTheme();
    const styles = StyleSheet.create({
        listContainer: {
            backgroundColor: theme.backgroundColor
        },
        icon: {
            color: theme.textColor,
        },
        title: {
            color: theme.textColor,
            fontSize: 18
        },
        chevronDown: {
            transform: [{ rotateZ: '90deg' }]
        },
        list2Container: {
            backgroundColor: theme.darkColor
        },
        text: {
            color: theme.textColor,
            fontSize: 16
        },
        text2Container: {
            backgroundColor: theme.darkColorAlpha8,
            paddingHorizontal: 16
        },
        text2: {
            color: theme.textColor,
            fontSize: 14
        }
    });
    const [openF, setOpenF] = useState(false);
    
    return (
        <>
            <ListItem containerStyle={styles.listContainer} onPress={() => setOpenF(p=>!p)}>
                {!!icon && <Icon iconStyle={styles.icon} name={icon} size={30} />}
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>{title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color={theme.textColor} size={20} containerStyle={openF ? styles.chevronDown : null}/>
            </ListItem>
            {!!child && openF && child.map((item, i) => {
                return (
                    <Fragment key={i} >
                        <ListItem containerStyle={styles.list2Container}>
                            <ListItem.Content>
                                <ListItem.Title style={styles.text} >{item.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <View style={styles.text2Container}>
                            {!!item.children && item.children.map((list, n) => {
                                return (
                                    <Text style={styles.text2} key={n}>{`   - ${list.name}`}</Text>
                                )
                            })}
                        </View>
                    </Fragment>
                )
            })}
        </>
    )
}

export default PolicyListItem;