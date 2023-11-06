import { StyleSheet, Text, View, ViewStyle, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import commonStyles from '../style/style'
import ToggleSwitch from 'toggle-switch-react-native';
import { GestureResponderEvent } from 'react-native-modal';
;


type CustomButtonProps = {
    title: string,
    isSave: boolean,
    onPress?: (e: GestureResponderEvent) => void;
    style?: ViewStyle;
    styleText?: StyleProp<TextStyle>
    switchPosition?: 'left' | 'right';
};

export default function Switch(
    { title, isSave, onPress, style, styleText, switchPosition }: CustomButtonProps) {
    const switchOnLeft = switchPosition === 'left';
    return (
        <View style={[styles.button, style]}>
            {switchOnLeft && (
                <View style={{ width: '15%', alignItems: 'center' }}>
                    <ToggleSwitch
                        isOn={isSave}
                        onColor="rgba(251, 175, 23, 1)"
                        size='medium'
                        offColor="rgba(217, 217, 217, 1)"
                        onToggle={onPress}
                    />
                </View>
            )}
            <Text style={[styleText, { width: '80%', marginHorizontal: 5 }]}>
                {title}
            </Text>
            {!switchOnLeft && (
                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <ToggleSwitch
                        isOn={isSave}
                        onColor="rgba(251, 175, 23, 1)"
                        size='medium'
                        offColor="rgba(217, 217, 217, 1)"
                        onToggle={onPress}
                    />
                </View>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
    }
})