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
    TouchableWithoutFeedback,
    useColorScheme,
    View,
} from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import commonStyles from '../../../style/style';
import IconNotifi from '../../../../assets/svg/iconNotifi';
import IconQR from '../../../../assets/svg/iconQR';
import IconCreatebill from '../../../../assets/svg/iconCreatebill';
import IconManager from '../../../../assets/svg/iconManager';
import IconThongke from '../../../../assets/svg/iconThongke';
import IconQuanLiDon from '../../../../assets/svg/iconQuanLiDon';
import IconDonHangXiLi from '../../../../assets/svg/iconDonHangXiLi';
import IconHistory from '../../../../assets/svg/iconHistory';
import IconLoHang from '../../../../assets/svg/iconLoHang';
import IconNhanDon from '../../../../assets/svg/iconNhanDon';
import IconChinhDon from '../../../../assets/svg/iconChinhDon';
import IconQuanLiNhap from '../../../../assets/svg/iconQuanLiNhap';
import IconThuGom from '../../../../assets/svg/iconThuGom';

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
    CreateOrders: undefined,
    ManageSender:undefined
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function Oder(): JSX.Element {


    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: '50%', marginBottom: 70 }}>
                <ImageBackground
                    source={require('../../../../assets/png/backgoundhome.png')} // Đường dẫn đến tệp ảnh của bạn
                    style={{
                        flex: 1,
                        width: '100%',
                        paddingTop: 10
                    }}
                >
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', height: '20%' }}>
                        <Image
                            source={require('../../../../assets/png/avata.png')}
                            style={{ width: 50, height: 50, marginHorizontal: 12 }}
                        />
                        <View style={{ width: '59%', height: '100%', justifyContent: 'center' }}>
                            <Text style={[commonStyles.text_12, styles.text]}>Xin chào</Text>
                            <Text style={[commonStyles.text_16, styles.text]}>Nguyễn Văn Thuận</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginHorizontal: 20 }}>
                                <IconQR
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Notification') }}>
                                <IconNotifi />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ width: '100%', height: '100%', alignItems: 'flex-end', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.box}>
                            <IconCreatebill />
                            <Text style={[commonStyles.text_14, { fontWeight: '800', marginTop: 10 }]}>Tạo đơn</Text>
                        </TouchableOpacity>
                        <TouchableWithoutFeedback onPress={()=>navigation.navigate("ManageSender")} >
                           <View style={styles.box}>
                           <IconManager />
                            <Text style={[commonStyles.text_14, { fontWeight: '800', marginTop: 10 }]}>Quản lí đơn hàng gửi</Text></View>
                        </TouchableWithoutFeedback>
                    </View>
                </ImageBackground>


            </View>
            <View style={{ width: '90%' }}>
                <Text style={[commonStyles.text_16, { fontWeight: '700' }]}>Chức năng khác</Text>

            </View>
            <View style={{ width: '100%', height: "35%" }}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.view_button}>
                        <View style={{ width: '34%', alignItems: 'center', }}>
                            <View style={[styles.icon_buton, styles.colorGreen]}>
                                <IconThongke />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Thống kê sản lượng</Text>
                        </View>

                        <View style={{ width: '34%', alignItems: 'center' }}>
                            <View style={[styles.icon_buton, styles.colorBlue]}>
                                <IconQuanLiDon />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Quản lí đơn hàng nhận</Text>
                        </View>

                        <View style={{ width: '34%', alignItems: 'center' }}>
                            <View style={[styles.icon_buton, styles.colorRed]}>
                                <IconQuanLiNhap />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Quản lý đơn hàng gửi nháp</Text>
                        </View>

                    </View>

                    <View style={styles.view_button}>
                        <View style={{ width: '34%', alignItems: 'center', }}>
                            <View style={[styles.icon_buton, styles.colorRed]}>
                                <IconHistory />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Lịch sử chi trả</Text>
                        </View>

                        <View style={{ width: '34%', alignItems: 'center' }}>
                            <View style={[styles.icon_buton, styles.colorGreen]}>
                                <IconLoHang />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Tạo lô đơn hàng</Text>
                        </View>

                        <View style={{ width: '34%', alignItems: 'center' }}>
                            <View style={[styles.icon_buton, styles.colorBlue]}>
                                <IconThuGom />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Quản lý thu gom</Text>
                        </View>

                    </View>

                    <View style={styles.view_button}>
                        <View style={{ width: '34%', alignItems: 'center', }}>
                            <View style={[styles.icon_buton, styles.colorBlue]}>
                                <IconChinhDon />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Hiệu chỉnh
                                đơn hàng</Text>
                        </View>

                        <View style={{ width: '34%', alignItems: 'center' }}>
                            <View style={[styles.icon_buton, styles.colorRed]}>
                                <IconDonHangXiLi />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Quản lý đơn hàng gửi cần xử lý phát</Text>
                        </View>

                        <View style={{ width: '34%', alignItems: 'center' }}>
                            <View style={[styles.icon_buton, styles.colorGreen]}>
                                <IconNhanDon />
                            </View>
                            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Tiếp nhận yêu cầu gửi hàng</Text>
                        </View>

                    </View>

                </ScrollView>
            </View>


        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    view: {
        width: '100%',
        marginVertical: 25
    },
    box: {
        width: '45%',
        height: '50%',
        borderRadius: 10,
        padding: 20,
        borderWidth: 2,
        marginHorizontal: 9,
        borderColor: 'rgba(243, 243, 243, 1)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    text: {
        color: 'rgba(255, 255, 255, 1)',
        height: '45%'
    },
    view_button: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    },
    text_icon_button: {
        marginTop: 5,
        width: '85%',
        textAlign: 'center'
    },
    icon_buton: {
        width: 60,
        marginHorizontal: 13,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderRadius: 60,
        backgroundColor: '#F3F3F3'
    },
    colorGreen: {
        backgroundColor: 'rgba(244, 249, 236, 1)',
    },
    colorRed: {
        backgroundColor: 'rgba(254, 241, 233, 1)',
    },
    colorBlue: {
        backgroundColor: 'rgba(232, 244, 255, 1)',
    }

});

export default Oder;
