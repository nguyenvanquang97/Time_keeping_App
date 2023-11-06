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
import IconNotifi from '../../../../assets/svg/iconNotifi2';
import IconQR from '../../../../assets/svg/iconQR2';
import { Divider } from 'react-native-paper';
import Arow from '../../../../assets/svg/Configuration/arow';

import IconHotro from '../../../../assets/svg/Support/iconHotro2';
import IconThuVien from '../../../../assets/svg/Support/iconThuVien';
import IconManagerSupport from '../../../../assets/svg/Support/iconManagerSupport';
import User from '../../../../assets/svg/You/user';
import Pass from '../../../../assets/svg/You/pass';
import Notifation from '../../../../assets/svg/You/notifation';
import InDon from '../../../../assets/svg/You/in';
import ThietLap from '../../../../assets/svg/You/thietLap';
import ViewRowOnpress from '../../../components/ListTileVIew';
import ThietlapIn from '../Individual/ThietlapIn';
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
    NotifacationSetting: undefined
}
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function You(): JSX.Element {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const goPersonalInformation = () => {
        navigation.navigate('PersonalInformation');
    }
    const goChangePass = () => {
        navigation.navigate('ChangePassWord');
    }
    const goThietlapin = () => {
        navigation.navigate('ThietlapIn');
    }
    const goNotifacationSetting = () => {
        navigation.navigate('NotifacationSetting');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={commonStyles.tool_bar}>
                <View style={{ width: '15%' }}>
                    <ImageBackground
                        source={require('../../../../assets/png/avata.png')} // Đường dẫn đến tệp ảnh của bạn
                        style={{ width: 50, height: 50 }}
                    ></ImageBackground>
                </View>
                <Text style={[commonStyles.text_20, { width: '60%' }]}>Nguyễn Văn Thuận </Text>

                <TouchableOpacity style={{ marginHorizontal: 20 }}>
                    <IconQR />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconNotifi />
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', padding: 15, height: '50%', backgroundColor: '#FFFFFF', marginTop: 20 }}>
                <ViewRowOnpress
                    iconRight={User}
                    iconLeft={Arow}
                    height='20%'
                    title='Thông tin tài khoản'
                    onPress={goPersonalInformation}
                />



                <ViewRowOnpress
                    iconRight={Pass}
                    iconLeft={Arow}
                    height='20%'
                    title='Đổi mật khẩu'
                    onPress={goChangePass}
                />




                <ViewRowOnpress
                    iconRight={InDon}
                    iconLeft={Arow}
                    height='20%'
                    title='Thiết lập in '
                    onPress={goThietlapin}
                />


                <ViewRowOnpress
                    iconRight={Notifation}
                    iconLeft={Arow}
                    height='20%'
                    title='Cấu hình thông báo'
                    onPress={goNotifacationSetting}
                />

                <ViewRowOnpress
                    iconRight={ThietLap}
                    iconLeft={Arow}
                    height='20%'
                    title='Thiết lập nhận báo cáo vận hành'
                    isDiver={false}
                />

            </View>


        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center'
    },
    view: {
        width: '100%',
        marginVertical: 25
    },

});

export default You;
