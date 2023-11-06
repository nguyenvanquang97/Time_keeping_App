import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'

import commonStyles from '../style/style'
import Icon, { IconSource } from '../../node_modules/react-native-paper/src/components/Icon';
import { GestureResponderEvent } from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import { useEffect } from 'react';

type CustomViewProps = {
    iconRight?: IconSource,
    iconLeft?: IconSource,
    title: string,
    addtitle?: string,
    onPress?: (e: GestureResponderEvent) => void;
    style?: ViewStyle;
    styleText?: StyleProp<TextStyle>
    isDiver?: boolean
};

export default function ButtonIcon({ iconRight, iconLeft, title, onPress, style, styleText, addtitle }: CustomViewProps) {

    return (

        <TouchableOpacity
            onPress={onPress}
            style={[style, styles.View]}
        >

            <View style={{ width: '10%' }} >
                <Icon
                    source={iconLeft}
                    size={5}
                />
            </View>


            <View style={{ width: '80%' }}>
                <Text style={styleText}>{title}{addtitle}
                </Text>
            </View>
            <View style={{ width: '10%', alignItems: 'flex-end' }}>
                <Icon
                    source={iconRight}
                    size={5}
                />
            </View>
        </TouchableOpacity>


    )
}
const styles = StyleSheet.create({
    View: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        borderRadius: 10,
        minHeight: 40
    },
})
