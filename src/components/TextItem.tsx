import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native';
import Modal from 'react-native-modal';
import commonStyles from '../style/style';



interface TextItem {
    styleName: keyof typeof commonStyles,
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    color?: string,
    children: React.ReactNode;
}

const TextItem: React.FC<TextItem> = ({
    styleName,
    fontWeight,
    color,
    children
}) => {
    const style = { ...commonStyles[styleName], color: color, fontWeight };
    return (
        <Text style={style}>{children}</Text>
    );
};



export default TextItem;