/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    BackHandler,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,

    TouchableOpacity,

    useColorScheme,
    View,
} from 'react-native';


import Cancle from '../../../assets/svg/cancel';
import commonStyles from '../../style/style';
import { TextInput } from 'react-native-paper';

import CustomButton from '../../components/CustomButton';
import Popup from '../../../assets/svg/popup';
import Map from '../../../assets/svg/icon_map';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';


import FBottomSheet from '../../components/BottomSheetBar';
import Out from '../../../assets/svg/delete';
import Search from '../../../assets/svg/search';

import { Divider, Text } from 'react-native-paper';
import { Formik } from 'formik'
import * as yup from 'yup'
import MCenterProps from '../../components/ModalCenter';
import Warning from '../../../assets/svg/warning';
import Header from '../../components/Header';
import TextItem from '../../components/TextItem';
import Switch from '../../components/Switch';
import Edit from '../../../assets/svg/edit';
import Remove from '../../../assets/svg/remove';

    import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../Login';
import SignUp from '../SignUp';
import Oder from '../Home/Home/Oder';
import You from '../Home/User/You';

import SenderInformation from './TapDetails/SenderInformation';
import PrintedInformation from './TapDetails/PrintedInformation';


function SenderDetails(): JSX.Element {
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    return (

        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: 'white' }}>
                <View style={{
                    width: '90%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginVertical: 15
                }}>
                    <TouchableOpacity style={{ width: '20%' }}>
                        <Cancle />
                    </TouchableOpacity>
                    <View style={{ width: '60%', alignItems: 'center' }}>
                        <TextItem styleName='text_16' fontWeight='700'>Nguyễn Văn Thuận</TextItem>
                    </View>
                    <View style={{ width: '20%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ width: '50%', alignItems: 'flex-end' }}>
                            <Edit />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '50%', alignItems: 'flex-end' }}>
                            <Remove />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <Divider />
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'rgba(251, 175, 23, 1)',
                    tabBarInactiveTintColor: 'rgba(191, 191, 191, 1)',
                    tabBarIndicatorStyle: {
                        backgroundColor: 'rgba(251, 175, 23, 1)', // Thay đổi màu sắc ở đây
                    },
                }}

            >
                <Tab.Screen name="Thông tin người gửi" component={SenderInformation} />
                <Tab.Screen name="Thông tin in" component={PrintedInformation} />
            </Tab.Navigator>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    view: {
        width: '100%',
        alignItems: 'center'
    },
    view_input: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F3F3F3'
    },

    view_input_err: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red'
    },
    view_input_forcus: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#1890FF'
    },
    view_input_search: {
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#F3F3F3',
        height: 35,

    },

    errorText: {
        color: '#E60000',
        marginTop: 5,
        marginBottom: 10
    },

});

export default SenderDetails;
