import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TouchableOpacity } from 'react-native';

import FText from '../Text/FText';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { GestureResponderEvent } from 'react-native-modal';
import { COLORS } from '../../assets/styles/color';


interface FButton {
    title: string,
    icon?: IconSource | any,
    backgroundColor?: string,
    labelColor?: string,
    poiIcon?: boolean | any
    width?: any,
    disabled?: boolean,
    style?: ViewStyle,
    styleButtonTex?: 'ButonText1' | 'ButonText2' | 'ButonText3',
    onPress?: (e: GestureResponderEvent) => void

}


const FButton: React.FC<FButton> = ({
    title,
    icon,
    width,
    backgroundColor,
    labelColor,
    poiIcon,
    onPress,
    disabled,
    styleButtonTex,
    style,
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[{ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, alignItems: 'center', backgroundColor: disabled ? 'yellow' : (backgroundColor ? (backgroundColor) : COLORS.PrimaryColor), width: width ? width : "100%"}, style]}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {!poiIcon &&
                    icon !== undefined &&
                    <View style={{ marginRight: 6 }}>{icon}</View>
                }
                <FText textStyle={styleButtonTex} color={labelColor !== undefined ? labelColor : 'white'}>{title}</FText>
                {poiIcon && icon !== undefined &&
                    <View style={{ marginLeft: 6 }}>{icon}</View>}
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {

    }
})
export default FButton;