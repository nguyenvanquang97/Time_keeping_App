import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent, TouchableOpacity } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import FText from '../Text/FText';
import { COLORS } from '../../assets/styles/color';
interface CustomProgress {
    iconLeft?: IconSource | any,
    iconRight?: IconSource | any,
    action: any,
    colorAction?: string,
    contentTitle?: string,
    TextActionView?: string,
    value?: string,
    value1?: string,
    style?: ViewStyle;
}

const CustomProgress: React.FC<CustomProgress> = ({
    iconLeft,
    iconRight,
    action,
    colorAction,
    contentTitle,
    TextActionView,
    value,
    value1,
    style


}) => {

    return (
        <View style={{ padding: 5, paddingHorizontal: 15, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', paddingVertical: 2 }}>
                <View style={{ flex: 1 }}>
                    {contentTitle !== undefined &&
                        <FText textStyle='Title4'>{contentTitle}</FText>
                    }

                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                    {TextActionView !== undefined &&
                        <FText textStyle='ButonText2'>{TextActionView}</FText>
                    }

                </TouchableOpacity>
            </View>
            {iconLeft && iconRight ?

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 4 }}>

                    <View>
                        {iconLeft !== undefined && iconLeft
                        }
                    </View>
                    <View style={[{ flex: 1, backgroundColor: '#F3F3F3', borderRadius: 8, height: 10, marginHorizontal: 10 }, style]}>
                        <Text style={{ width: action, backgroundColor: colorAction ? colorAction : COLORS.PrimaryColor, borderRadius: 8 }}></Text>
                    </View>
                    <View>
                        {iconRight !== undefined && iconRight}

                    </View>

                </View>
                :
                (<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 4 }}>

                    <View>
                        <FText textStyle='Title6'>{value}</FText>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: '#F3F3F3', borderRadius: 8, height: 10, marginHorizontal: 10 }, style]}>
                        <Text style={{ width: action, backgroundColor: colorAction ? colorAction : COLORS.PrimaryColor, borderRadius: 8 }}></Text>
                    </View>
                    <View >
                        <FText textStyle='Title6'>{value1}</FText>
                    </View>
                </View>

                )
            }


            {value && value1 && iconLeft && iconRight &&
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <FText textStyle='Title6'>{value}</FText>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <FText textStyle='Title6'>{value1}</FText>
                    </View>
                </View>
            }



        </View>


    );
};

export default CustomProgress;
