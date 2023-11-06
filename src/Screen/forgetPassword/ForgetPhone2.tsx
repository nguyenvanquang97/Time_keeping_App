/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import Cancle from '../../../assets/svg/cancel';
import commonStyles from '../../style/style';
import Lock from '../../../assets/svg/lock';
import CustomButton from '../../components/CustomButton';
import { TextInput } from 'react-native-paper';


export type RootStackParamList = {
    Login: undefined,
    Sigup: undefined,
    Authenphone: undefined,
    ChooseOrganization: undefined,
    ForgetPhone: undefined,
    ForgetPhone2: undefined,
    ChangePass: undefined,

};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function ForgetPhone2(): JSX.Element {

    const [seconds, setSeconds] = useState(30);

    const [again, setAgain] = useState(5);

    const [isTextErr, setTextErr] = useState(false);

    const [key, setkey] = React.useState("");

    const [isVisible, setIsVisible] = useState(true);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const tryAgain = () => {
        if (Number(key) != 1234 && again - 1 >= 1) {
            setAgain(again - 1);
            setkey('');
            setTextErr(true);
        } else if (again - 1 == 0) {
            setTextErr(false);
            setSeconds(50);
        } else {
            setTextErr(false);
            navigation.navigate('ChangePass');
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                setIsVisible(!isVisible);
                clearInterval(interval); // Dừng bộ đếm khi seconds đạt 0
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '90%', height: '85%', marginVertical: 25 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>

                <View style={styles.view}>
                    <Text style={[commonStyles.text_20, { marginVertical: 10 }]}>Xác thực số điện thoại</Text>
                    <Text style={[commonStyles.text_14, { color: 'rgba(140, 140, 140, 1)' }]}>Hãy nhập mã xác thực được gửi tới số điện thoại: <Text style={{ color: 'rgba(89, 89, 89, 1)' }}>098****123</Text></Text>
                    <Text style={[commonStyles.text_14, { marginVertical: 5, color: 'rgba(24, 144, 255, 1)' }]}>Thay đổi số điện thoại</Text>
                </View>

                <View style={{ width: '100%', marginVertical: 5 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        label="Nhập mã xác thực"
                        value={key}
                        keyboardType="numeric"
                        style={styles.view_input}
                        onChangeText={(text) => { setkey(text) }}
                    />
                    {isTextErr && <Text style={[commonStyles.text_14, { color: 'rgba(230, 0, 0, 1)', marginVertical: 5 }]}>Sai mã xác thực! Bạn còn {again} lần thử lại</Text>}
                    {(again == 1) && (<Text style={[commonStyles.text_14, { color: 'rgba(230, 0, 0, 1)', marginVertical: 5 }]}>Bạn đã nhập sai nhiều lần! Thử lại sau 5:00</Text>)}
                </View>

                <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={{ color: 'rgba(140, 140, 140, 1)' }} >Chưa nhận được mã? {isVisible && (<Text><Text style={{ color: 'rgba(217, 217, 217, 1)' }}>Yêu cầu mã mới trong </Text>0:{formatTime(seconds)}</Text>)}
                    </Text>
                    {!isVisible && (<TouchableOpacity onPress={() => { setSeconds(30), setIsVisible(!isVisible) }}><Text style={[commonStyles.text_14, { color: 'rgba(24, 144, 255, 1)' }]}> Yêu cầu mã mới</Text></TouchableOpacity>)}

                </View>

                <View style={[commonStyles.view_alignItem, { marginTop: 10 }]}>
                    <TouchableOpacity style={{ width: '100%' }} onPress={tryAgain}>
                        <CustomButton
                            textColor='rgba(255, 255, 255, 1)'
                            name='Tiếp tục'
                            width={'100%'}
                            backgroundColor='rgba(251, 175, 23, 1)'
                        />
                    </TouchableOpacity>


                </View>
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

        marginVertical: 25
    },
    view_input: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F3F3F3'
    },
});

export default ForgetPhone2;
