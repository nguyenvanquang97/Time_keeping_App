import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from 'react-native-svg';


interface MCenterProps {
    isVisible: boolean;
    closeModal: () => void;
    children: ReactNode;
    style?: ViewStyle;
}

const MCenterProps: React.FC<MCenterProps> = ({
    isVisible,
    closeModal,
    children,
    style,
}) => {
    return (
        <Modal

            isVisible={isVisible}
            onBackdropPress={closeModal}
            onSwipeComplete={closeModal}
            backdropOpacity={0.8}
            // onBackdropPress={closeModal}
            // swipeDirection="down"
            style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.container, style]}>
                {children}

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '92%',
        padding: 25
    },
});

export default MCenterProps;