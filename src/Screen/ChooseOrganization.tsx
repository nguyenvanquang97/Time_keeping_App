/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Cancle from '../../assets/svg/cancel';
import commonStyles from '../style/style';
import Lock from '../../assets/svg/lock';
import CustomButton from '../components/CustomButton';


export type RootStackParamList = {
    Login: undefined,
    Sigup: undefined,
    Authenphone: undefined,
    ChooseOrganization: undefined,
    ForgetPhone: undefined,
    ForgetPhone2: undefined,
    ChangePass: undefined,
    Home: undefined,
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function ChooseOrganization(): JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '90%', height: '85%', marginVertical: 25 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>
                <View style={styles.view}>
                    <Text style={[commonStyles.text_20, { marginVertical: 10 }]}>Chọn tổ chức của bạn</Text>
                    <Text style={[commonStyles.text_14]}>Tài khoản của bạn đang được gắn với 2 tổ chức</Text>
                </View>
                <View style={[styles.view_box, { backgroundColor: '#FFFAF0', borderColor: '#FBAF17' }]}>

                    <View style={{ width: '90%', height: '80%', justifyContent: 'center' }}>
                        <Text style={commonStyles.text_16}>FPT IS</Text>
                        <Text style={commonStyles.text_14}>C0000342299</Text>
                    </View>

                </View>

                <View style={[styles.view_box, { backgroundColor: '#FFFFFF', borderColor: '#F3F3F3', marginVertical: 20 }]}>
                    <View style={{ width: '90%', height: '80%', justifyContent: 'center' }}>
                        <Text style={commonStyles.text_16}>VNPost</Text>
                        <Text style={commonStyles.text_14}>C0000342299</Text>
                    </View>
                </View>

                <View style={[styles.view_box, { backgroundColor: '#D9D9D9', borderColor: '#F3F3F3', flexDirection: 'row' }]}>
                    <View style={{ width: '65%', height: '80%', justifyContent: 'center' }}>
                        <Text style={commonStyles.text_16}>ABC Company</Text>
                        <Text style={commonStyles.text_14}>C0000342299</Text>
                    </View>
                    <View style={{ width: '25%', flexDirection: 'row', height: '80%', alignItems: 'center' }}>
                        <Text style={{ marginRight: 10 }}>Đã khóa</Text>
                        <Lock />
                    </View>
                </View>
            </View>
            <View style={[commonStyles.view_alignItem]}>
                <TouchableOpacity style={{ width: '90%' }} onPress={() => { navigation.navigate('Home') }} >
                    <CustomButton
                        textColor='rgba(255, 255, 255, 1)'
                        name='Tiếp tục'
                        width='100%'
                        backgroundColor='rgba(251, 175, 23, 1)'
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>

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
        alignItems: 'center',
        marginVertical: 25
    },
    view_box: {
        width: '100%',
        height: '15%',
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ChooseOrganization;
