import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing} from 'react-native';

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

    const animation = new Animated.Value(0);

    const changeActiveStyle = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };
    const activeAnimationStyle = {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.34],
        }),
        shadowRadius: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 4.65],
        }),
        elevation: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 8],
        }),

        backgroundColor: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [sideColor, activeColor],
        }),
    };

    useEffect(() => {
        changeActiveStyle();
    }, [value, changeActiveStyle]);


    const elements = switches.map(val =>
        <TouchableWithoutFeedback key={val} onPress={() => {
            onChangeValue(val)
        }
        } disabled={disabled}>
            <Animated.View style={val === value ? [customItemStyle, activeAnimationStyle] : customItemStyle}>
                <Text style={val === value ? {...fontStyles, color: activeTextColor} : fontStyles}>{val}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    )

    return (
        <View style={styles.container}>
            {elements}
        </View>
    )
};


export default CustomSwitch;

