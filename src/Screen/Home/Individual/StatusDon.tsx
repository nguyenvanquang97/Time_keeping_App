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
import Switch from '../../../components/Switch';

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
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function StatusDon(): JSX.Element {


    const [isOn, setIsOn] = useState(false);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)', height: '8%' }]}>
                <TouchableOpacity style={{ width: 10 }} onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_20, { width: '90%', textAlign: 'center' }]}>Trạng thái đơn hàng</Text>
                <Divider />
            </View>


            <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 1)', height: '8%', marginVertical: 20, borderRadius: 8, padding: 15 }}>
                <Switch
                    title='Trạng thái đơn hàng'
                    isSave={isOn}
                    onPress={() => { setIsOn(!isOn) }}
                    styleText={styles.text}
                />

            </View>
            <View style={{ width: '80%' }}>
                <Text style={commonStyles.text_14}>Chi tiết </Text>
            </View>

            <View style={{ width: '90%', backgroundColor: 'rgba(255, 255, 255, 1)', height: '60%', marginVertical: 8, borderRadius: 8, padding: 15 }}>
                <View style={styles.viewSwich}>
                    <Switch
                        title='Phát không thành công'
                        isSave={isOn}
                        onPress={() => { setIsOn(!isOn) }}

                    />
                </View>
                <View style={{ width: '100%', height: '5%', justifyContent: 'center' }}>
                    <Divider />
                </View>

                <View style={styles.viewSwich}>

                    <Switch
                        title='Phát thành công'
                        isSave={isOn}
                        onPress={() => { setIsOn(!isOn) }}

                    />
                </View>
                <View style={{ width: '100%', height: '5%', justifyContent: 'center' }}>
                    <Divider />
                </View>
                <View style={styles.viewSwich}>

                    <Switch
                        title='Đã trả tiền'
                        isSave={isOn}
                        onPress={() => { setIsOn(!isOn) }}

                    />
                </View>
                <View style={{ width: '100%', height: '5%', justifyContent: 'center' }}>
                    <Divider />
                </View>

                <View style={styles.viewSwich}>

                    <Switch
                        title='Có đơn chuẩn bị phát cho bạn'
                        isSave={isOn}
                        onPress={() => { setIsOn(!isOn) }}

                    />
                </View>
                <View style={{ width: '100%', height: '5%', justifyContent: 'center' }}>
                    <Divider />
                </View>

                <View style={styles.viewSwich}>
                    <Switch
                        title='Có đơn gửi tới bạn'
                        isSave={isOn}
                        onPress={() => { setIsOn(!isOn) }}

                    />
                </View>
                <View style={{ width: '100%', height: '5%', justifyContent: 'center' }}>
                    <Divider />
                </View>

                <View style={styles.viewSwich}>
                    <Switch
                        title='Đơn gửi tới bạn thành công'
                        isSave={isOn}
                        onPress={() => { setIsOn(!isOn) }}

                    />
                </View>
                <View style={{ width: '100%', height: '5%', justifyContent: 'center' }}>
                    <Divider />
                </View>

                <View style={styles.viewSwich}>

                    <Switch
                        title='Đơn gửi tới bạn không thành công'
                        isSave={isOn}
                        onPress={() => { setIsOn(!isOn) }}

                    />
                </View>




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

    text: {
        fontSize: 17,
        fontWeight: '900'

    },
    viewSwich: {
        width: '100%',
        height: '10%',
        alignContent: 'center',
        justifyContent: 'center'


    }


});

export default StatusDon;
