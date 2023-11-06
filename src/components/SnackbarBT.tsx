import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native';
import Modal, { GestureResponderEvent } from 'react-native-modal';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Snackbar } from 'react-native-paper';
import TextItem from './TextItem';



interface SnackbarBT {
    visible: any,
    onDismiss: (e: GestureResponderEvent) => void;
    duration?: number,
    iconleft?: IconSource,
    title: string,
    backgroundColor: string
}

const SnackbarBT: React.FC<SnackbarBT> = ({
    visible,
    onDismiss,
    duration,
    iconleft,
    title,
    backgroundColor
}) => {

    return (
        <Snackbar
            visible={visible}
            onDismiss={() => onDismiss}
            duration={duration}
            style={{ backgroundColor: backgroundColor }}
        >
            <View style={{ flexDirection: 'row', }}>
                <View style={{ marginRight: 10 }}>
                    <Icon
                        source={iconleft}
                        size={5}
                    />
                </View>

                <TextItem styleName='text_14' color='rgba(255, 255, 255, 1)'>{title}</TextItem>
            </View>

        </Snackbar>
    );
};
export default SnackbarBT;
const styles = StyleSheet.create({

})