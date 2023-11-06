import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native';
import FText from '../Text/FText';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { } from 'react-native-modal';
import { COLORS } from '../../assets/styles/color';


interface FIconButton {
    icon: IconSource | any,
    style?: ViewStyle,
    background?: string,
    onPress?: (e: GestureResponderEvent) => void

}

const FIconButton: React.FC<FIconButton> = ({
    icon,
    style,
    background,

    onPress
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style, {
                backgroundColor: background ? background : 'white', borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
            }]}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {icon}

            </View>

        </TouchableOpacity>
    );
};
export default FIconButton;