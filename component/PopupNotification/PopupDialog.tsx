import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Text } from 'react-native-svg';
import FText from '../Text/FText';


interface PopupDialog {
    isVisible: boolean;
    closeModal: () => void;
    ImageNotification?: IconSource | any
    style?: ViewStyle;
    title: string,
    bodyTitle: string,
    titleButtonleft?: string,
    titleButton: string,
    backgroundColor: string
}

const PopupDialog: React.FC<PopupDialog> = ({
    isVisible,
    closeModal,
    ImageNotification,
    style,
    title,
    bodyTitle,
    titleButtonleft,
    titleButton,
    backgroundColor
}) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            onSwipeComplete={closeModal}
            backdropOpacity={0.8}
            // onBackdropPress={closeModal}
            // swipeDirection="down"
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.container, style]}>
                {ImageNotification !== undefined &&
                    <View style={{ marginBottom: 15 }}>
                        {ImageNotification}
                    </View>

                }
                <FText textStyle='Title2'>{title}</FText>
                <View style={{ marginVertical: 10 }}>
                    <FText textStyle='BodyText2' textAlign='center'>{bodyTitle}</FText></View>

                <View style={{ flexDirection: 'row' }}>
                    {titleButtonleft !== undefined &&
                        <TouchableOpacity style={[styles.viewButton, { backgroundColor: '#F3F3F3', marginRight: 10 }]}>
                            <FText textStyle='ButonText2' color='#8C8C8C'>{titleButtonleft}</FText>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={[styles.viewButton, { backgroundColor: backgroundColor }]}>
                        <FText textStyle='ButonText2' color='#FFFFFF'>{titleButton}</FText>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 16,
        paddingTop: 25
    },
    viewButton: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8
    }
});

export default PopupDialog;