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
import AddSender from './TapAddDetails/AddSender';
import InformationPrint from './TapAddDetails/InformationPrint';


function EditDetails(): JSX.Element {
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isOn, setIsOn] = useState(false);
    const [isMCenterErr, setMCenterErr] = useState(false);

    const handleBackButtonPress = () => {
        setMCenterErr(!isMCenterErr);
        return true;

    };
    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackButtonPress
        );

        return () => backHandler.remove();
    }, []);

    return (

        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: 'white' }}>
                <Header left={<Cancle />} onPressLeft={() => { handleBackButtonPress() }}
                    right={<TextItem styleName='text_14' color='rgba(24, 144, 255, 1)'>Lịch sử</TextItem>}
                >
                    <TextItem styleName='text_16'>Sửa thông tin người gửi</TextItem>
                </Header>
            </View>
            <Divider />
            <View style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
                <Switch
                    title='Đặt làm mặc định'
                    isSave={isOn}
                    switchPosition='left'
                    onPress={() => { setIsOn(!isOn) }}
                />
                <Switch
                    title='Địa chỉ in khác địa chỉ người gửi'
                    isSave={isOn}
                    switchPosition='left'
                    onPress={() => { setIsOn(!isOn) }}

                />
            </View>
            {(!isOn) ? (
                <AddSender />
            ) : (
                <Tab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: 'rgba(251, 175, 23, 1)',
                        tabBarInactiveTintColor: 'rgba(191, 191, 191, 1)',
                        tabBarIndicatorStyle: {
                            backgroundColor: 'rgba(251, 175, 23, 1)', // Thay đổi màu sắc ở đây
                        },
                    }}

                >
                    <Tab.Screen name="Thông tin người gửi" component={AddSender} />
                    <Tab.Screen name="Thông tin in" component={InformationPrint} />
                </Tab.Navigator>
            )}


            <MCenterProps
                isVisible={isMCenterErr}
                children={
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ marginBottom: 10 }}>
                            <Warning />
                        </View>
                        <Text style={[commonStyles.text_20, { fontWeight: '800', marginVertical: 5 }]}>Hủy tạo người gửi</Text>
                        <Text style={[commonStyles.text_14, { width: '100%', textAlign: 'center' }]}>Thông tin người gửi sẽ không được lưu lại khi bạn thoát ra.</Text>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity style={{ width: "46%", marginRight: 8 }} onPress={() => { setMCenterErr(!isMCenterErr) }}>
                                <CustomButton
                                    textColor='rgba(140, 140, 140, 1)'
                                    width={'100%'}
                                    name='Tiếp tục tạo'
                                    backgroundColor='rgba(243, 243, 243, 1)'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: "46%" }} onPress={() => { navigation.goBack() }}>
                                <CustomButton
                                    textColor='rgba(255, 255, 255, 1)'
                                    name='Hủy tạo'
                                    width={'100%'}
                                    backgroundColor='rgba(243, 115, 34, 1)'
                                />
                            </TouchableOpacity>
                        </View>


                    </View>
                }
                closeModal={() => { setMCenterErr(!isMCenterErr) }}
            />

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

export default EditDetails;
