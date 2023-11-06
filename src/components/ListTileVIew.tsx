import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'

import commonStyles from '../style/style'
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { GestureResponderEvent } from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import { useEffect } from 'react';

type CustomViewProps = {
    iconRight?: IconSource,
    iconLeft?: IconSource,
    title: string,
    style_select?: ViewStyle;
    onPress?: (e: GestureResponderEvent) => void;
    height?: any,
    isDiver?: boolean
};

export default function ViewRowOnpress({ iconRight, iconLeft, title, onPress, height, isDiver, style_select }: CustomViewProps) {

    return (
        <View style={[{ height: height }]}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.config, style_select]}
            >
                {iconLeft !== undefined && <View style={{ width: '10%' }}>
                    <Icon
                        source={iconLeft}
                        size={5}
                    />
                </View>}


                <View style={{ flex: 1 }}>
                    <Text style={[commonStyles.text_16, styles.text]}>{title}
                    </Text>
                </View>
                <View style={{ width: '10%', alignItems: 'center' }}>
                    <Icon
                        source={iconRight}
                        size={5}
                    />
                </View>

            </TouchableOpacity>
            {isDiver != false && (
                <Divider style={{ height: 1, backgroundColor: 'rgba(243, 243, 243, 1)' }} />
            )

            }
        </View>


    )
}

const styles = StyleSheet.create({
    config: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        width: '100%',

    }
})