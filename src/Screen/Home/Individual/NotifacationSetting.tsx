/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
*/

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import commonStyles from '../../../style/style';

import { Divider, TextInput } from 'react-native-paper';




import Cancle from '../../../../assets/svg/cancel';

import eye_slash from '../../../../assets/svg/eye-slash';
import { Formik } from 'formik'
import * as yup from 'yup'
import CustomButton from '../../../components/CustomButton';
import ViewRowOnpress from '../../../components/ListTileVIew';
import Arow from '../../../../assets/svg/Configuration/arow';

export type RootStackParamList = {
    Login: undefined,
    Sigup: undefined,
    Authenphone: undefined,
    ChooseOrganization: undefined,
    ForgetPhone: undefined,
    ForgetPhone2: undefined,
    ChangePass: undefined,
    Home: undefined,
    Notification: undefined,
    PersonalInformation: undefined,
    EditPersonalInformation: undefined,
    ChangePassWord: undefined,
    ThietlapIn: undefined,
    NotifacationSetting: undefined,
    NotifacationAll: undefined,
    StatusDon: undefined,
    NextDon: undefined,
    RequestCorrection: undefined,
    RequestSupport: undefined
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function NotifacationSetting(): JSX.Element {


    const goSettingAll = () => {
        navigation.navigate('NotifacationAll')
    }
    const goSettinStatus = () => {
        navigation.navigate('StatusDon')
    }
    const goSettinNext = () => {
        navigation.navigate('NextDon')
    }
    const goSettinRequest = () => {
        navigation.navigate('RequestCorrection')
    }
    const goSettinRequestSp = () => {
        navigation.navigate('RequestSupport')
    }

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)', height: '8%' }]}>
                <TouchableOpacity style={{ width: '5%', paddingLeft: 10 }} onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_20, { width: '90%', textAlign: 'center' }]}>Cấu hình nhận thông báo</Text>
                <Divider />
            </View>


            <View style={{ width: '90%', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 1)', height: '50%', marginVertical: 20, borderRadius: 8 }}>

                <ViewRowOnpress
                    title='Thông báo chung'
                    height='20%'
                    iconLeft={Arow}
                    onPress={goSettingAll}
                />


                <ViewRowOnpress
                    title='Trạng thái đơn hàng'
                    height='20%'
                    iconLeft={Arow}
                    onPress={goSettinStatus}
                />


                <ViewRowOnpress
                    title='Chuyển tiếp phát hoàn'
                    height='20%'
                    iconLeft={Arow}
                    onPress={goSettinNext}
                />


                <ViewRowOnpress
                    title='Yêu cầu hiệu chỉnh'
                    height='20%'
                    iconLeft={Arow}
                    onPress={goSettinRequest}
                />


                <ViewRowOnpress
                    title='Yêu cầu hỗ trợ'
                    height='20%'
                    isDiver={false}
                    iconLeft={Arow}
                    onPress={goSettinRequestSp}
                />


            </View>


        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(243, 243, 243, 1)',

    },
    view_input_forcus: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#1890FF'
    },
    view_input: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F3F3F3'
    },
    errorText: {
        color: '#E60000',
        marginTop: 5,
        marginBottom: 10
    },
    view_input_err: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red'
    },


});

export default NotifacationSetting;
