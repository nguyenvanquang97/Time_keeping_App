import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native';
import Modal, { GestureResponderEvent } from 'react-native-modal';
import commonStyles from '../style/style';
import { TouchableOpacity } from 'react-native';



interface Header {
    left: any,
    children: React.ReactNode;
    right?: any,
    onPressRight?: (e: GestureResponderEvent) => void;
    onPressLeft?: (e: GestureResponderEvent) => void;
}

const Header: React.FC<Header> = ({
    left,
    right,
    children,
    onPressLeft,
    onPressRight

}) => {

    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPressLeft} style={{ width: '20%' }}>
                    {left}
                </TouchableOpacity>
                <View style={{ width: '60%', alignItems: 'center' }}>
                    {children}
                </View>
                <TouchableOpacity onPress={onPressRight} style={{ width: '20%', alignItems: 'flex-end' }}>
                    {right}
                </TouchableOpacity>

            </View>
    );
};
export default Header;
const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 15
    }
})