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
import Cancle from '../../../../assets/svg/cancel';
import Option from '../../../../assets/svg/option';
import PopupMenu from '../../../../assets/svg/popupMenu';
import FBottomSheet from '../../../components/BottomSheetBar';
import Out from '../../../../assets/svg/delete';

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
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function PersonalInformation(): JSX.Element {

    const [isFBottomSheet, setFBottomSheer] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={[commonStyles.tool_bar, { alignItems: 'center' }]}>
                <TouchableOpacity style={{ width: '25%' }} onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_16, { width: '50%', textAlign: 'center' }]}>Thông tin tài khoản </Text>
                <TouchableOpacity style={{ width: '25%' }} onPress={() => { navigation.navigate('EditPersonalInformation') }}>
                    <Text style={[commonStyles.text_14, { width: '100%', textAlign: 'right', color: 'rgba(24, 144, 255, 1)' }]}>Chỉnh sửa</Text>
                </TouchableOpacity>

            </View>

            <Text style={[commonStyles.text_20, { marginVertical: 8, width: '90%' }]}>Thông tin cá nhân</Text>


            <View style={{ width: '100%', padding: 15, height: '30%', backgroundColor: 'rgba(255, 255, 255, 1)' }}>

                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Họ tên</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>Nguyễn Văn Anh</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />



                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Số điện thoại</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>09858****495</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />



                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Email</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>Nguyenvananh@gmail.com</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />

                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Địa chỉ</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>11 Thái Hà, Trung Liệt Đống Đa, Hà Nội</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />

                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Ngày sinh</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>14/04/2000</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />

                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>CMT/CCCD</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>001057756474</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />

                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Mã số thuế</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>1234567654</Text>
                </View>


            </View>


        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignItems: 'center'
    },
    config: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    text: {
        marginHorizontal: 10,
        width: '40%',
        color: 'rgba(140, 140, 140, 1)'
    },
    divider: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        height: 1
    },
    textRight: {
        marginHorizontal: 10,
        width: '50%',
        color: 'rgba(38, 38, 38, 1)',
        textAlign: 'right',
        fontWeight: '800'
    },
});

export default PersonalInformation;
