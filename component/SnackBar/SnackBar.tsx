import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Snackbar } from 'react-native-paper';
import FText from '../Text/FText';




interface SnackBar {
    visible: any,
    onDismiss: () => void;
    onPressRight?: (e: GestureResponderEvent) => void
    duration?: number,
    iconLeft?: IconSource | any,
    title: string,
    backgroundColor: string,
    titleRight?: string | any,
    textColor?: string
}

const SnackBar: React.FC<SnackBar> = ({
    visible,
    onDismiss,
    duration,
    iconLeft,
    title,
    backgroundColor,
    onPressRight,
    titleRight,
    textColor
}) => {
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            duration={duration}
            style={{ backgroundColor: backgroundColor }

            }

            action={{
                label: titleRight && titleRight,
                onPress: onPressRight,
                labelStyle: { color: textColor }
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 10 }}>
                    {iconLeft}
                </View>
                <FText textStyle='BodyText2' color={textColor}>{title}</FText>
            </View>

        </Snackbar>
    );
};
export default SnackBar;
