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


import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import commonStyles from '../../../style/style';
import IconNotifi from '../../../../assets/svg/iconNotifi2';
import IconQR from '../../../../assets/svg/iconQR2';
import ManagerUser from '../../../../assets/svg/Configuration/1';
import { Divider, Snackbar } from 'react-native-paper';
import Arow from '../../../../assets/svg/Configuration/arow';
import Receiver from '../../../../assets/svg/Configuration/2';
import List from '../../../../assets/svg/Configuration/3';
import UserChange from '../../../../assets/svg/Configuration/4';
import UserBank from '../../../../assets/svg/Configuration/5';
import ManagerDate from '../../../../assets/svg/Configuration/6';
import ViewRowOnpress from '../../../components/ListTileVIew';
import SnackbarBT from '../../../components/SnackbarBT';
import IconErr from '../../../../assets/svg/iconErr';
import { goScreen } from '../../../style/goScreen';

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
    ListUser: undefined
    ListUserSenders: undefined
    ListGoods: undefined
    test: undefined
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function Configuration({ route }: { route: any }): JSX.Element {

    const [visible, setVisible] = React.useState();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const goManageReceiver = () => {
        navigation.navigate('ListUser')
    }
    const goManageSenders = () => {
        navigation.navigate('ListUserSenders')
    }
    const goListGoods = () => {
        navigation.navigate('ListGoods')
    }
    const data = (demo:any) => {
        console.log(demo);

    }
    const Screen = () => {
        goScreen(navigation, 'test', 1, data);
    }

    const receivedData = route.params?.data;
    if (receivedData != undefined) {
        console.log(receivedData);

    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={commonStyles.tool_bar}>
                <Text style={[commonStyles.text_20, { width: '75%' }]}>Cấu hình</Text>

                <TouchableOpacity style={{ marginHorizontal: 20 }}>
                    <IconQR />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Notification') }}>
                    <IconNotifi />
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', padding: 15, height: '60%', backgroundColor: '#FFFFFF', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                <ViewRowOnpress
                    iconRight={ManagerUser}
                    iconLeft={Arow}
                    title='Quản lí người gửi'
                    height='16%'
                    onPress={goManageSenders}
                />


                <ViewRowOnpress
                    iconRight={Receiver}
                    iconLeft={Arow}
                    title='Quản lí người nhận'
                    height='16%'
                    onPress={goManageReceiver}
                />



                <ViewRowOnpress
                    iconRight={List}
                    iconLeft={Arow}
                    title='Quản lí hàng hóa'
                    height='16%'
                    onPress={goListGoods}
                />


                <ViewRowOnpress
                    iconRight={UserChange}
                    iconLeft={Arow}
                    title='Quản lí tài khoản nhập thay thế'
                    height='16%'
                />



                <ViewRowOnpress
                    iconRight={UserBank}
                    iconLeft={Arow}
                    title='Quản lí tài khoản ngân hàng'
                    height='16%'
                />





                <ViewRowOnpress
                    iconRight={ManagerDate}
                    iconLeft={Arow}
                    title='Quản lí lịch thu gom'
                    height='16%'
                    isDiver={false}
                    onPress={() => Screen()}
                />

            </View>

            {/* <Snackbar
                visible={visible}
                onDismiss={() => setVisible(false)}
                duration={2000}
            >
                <View style={{ flexDirection: 'row' }}>
                    <IconErr />
                    <Text>aaaaaaaaaaaa</Text></View>
            </Snackbar> */}
            <View><Text>{receivedData}</Text></View>
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
    config: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginHorizontal: 10,
        width: '87%'
    }

});

export default Configuration;
