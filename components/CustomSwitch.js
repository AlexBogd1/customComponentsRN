import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const CustomSwitch = (
    {
        style,
        value,
        onChangeValue,
        activeColor,
        sideColor,
        activeText,
        inactiveText,
        fontStyles,
        disabled
    }) => {

    let activeStyle = {...styles.active} ;
    let inactiveStyle = {...styles.inactive};
    let backStyle = {...styles.container};

    activeColor ? activeStyle = {...activeStyle, backgroundColor: activeColor} : activeStyle;
    sideColor ? inactiveStyle = {...inactiveStyle, backgroundColor: sideColor} : inactiveStyle;
    style ? backStyle = {...backStyle, ...style} : backStyle;
    sideColor ? backStyle = {...backStyle, backgroundColor: sideColor} : backStyle;

    return (
        <View style={backStyle}>
            <TouchableWithoutFeedback onPress={onChangeValue} disabled = {disabled}>
                <View style={styles.component}>
                    <View style={!value ? activeStyle : inactiveStyle}>
                        <Text style={fontStyles}>{inactiveText ? inactiveText: 'off'}</Text>
                    </View>
                    <View style={value ? activeStyle: inactiveStyle}>
                        <Text style={fontStyles}>{activeText ? activeText : 'on'}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#45549e',
        borderRadius: 20,
        justifyContent: 'center',
        width: 200,
        height: 40,
        overflow: 'hidden',
    },
    component: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    active: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 8,
        marginHorizontal: 3,
        minWidth: '35%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    inactive: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '35%',
        height: '85%',
        marginHorizontal: 3,
        paddingHorizontal: 8,
        borderRadius: 20,
    }
});

export default CustomSwitch;
