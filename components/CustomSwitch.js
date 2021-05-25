import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';

const CustomSwitch = (
    {
        itemStyle,
        switches,
        value,
        onChangeValue,
        activeColor,
        sideColor,
        activeTextColor,
        fontStyles,
        disabled
    }) => {


    const generalItemStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 6,
        margin: 4,
    };
    const customItemStyle = {...generalItemStyle, ...itemStyle}

    const styles = StyleSheet.create({
        container: {
            backgroundColor: sideColor ? sideColor : '#45549e',
            flexDirection: 'row',
            borderRadius: 10,
            justifyContent: 'center',
        },
    });

    const elements = switches.map(val =>
        <TouchableWithoutFeedback key={Math.random().toString()} onPress={() => onChangeValue(val)} disabled={disabled}>
            <View style={val === value ? {...customItemStyle, backgroundColor: activeColor,} : customItemStyle}>
                <Text style={val === value ? {...fontStyles, color: activeTextColor} : fontStyles}>{val}</Text>
            </View>
        </TouchableWithoutFeedback>
    )

    return (
        <View style={styles.container}>
            {elements}
        </View>
    )
};



export default CustomSwitch;

