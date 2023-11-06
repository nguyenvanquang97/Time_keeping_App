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

import { Divider, Drawer, TextInput } from 'react-native-paper';
import Popup from '../../../../assets/svg/popup';



import Cancle from '../../../../assets/svg/cancel';

import eye_slash from '../../../../assets/svg/eye-slash';
import { Formik } from 'formik'
import * as yup from 'yup'
import CustomButton from '../../../components/CustomButton';
import FBottomSheet from '../../../components/BottomSheetBar';
import Out from '../../../../assets/svg/delete';

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
function ThietlapIn(): JSX.Element {

    const data = [
        'A5',
        'A6',
        'A7'
    ];

    const [mauin, setMauin] = React.useState("");
    const [size, setSize] = React.useState("");

    const [on, setOn] = React.useState(false);
    const [isFBottomSheet, setFBottomSheer] = useState(false);


    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();



    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ width: '90%', alignItems: 'center', flexDirection: 'row', marginVertical: 15 }]}>
                <TouchableOpacity style={{ width: '10%', paddingLeft: 20 }} onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_20, { width: '90%', textAlign: 'center' }]}>Thiết lập in</Text>
                <Divider />
            </View>


            <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
                <View style={{ width: '90%', marginVertical: 5 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        underlineColorAndroid={'#BFBFBF'}
                        label="Mẫu in mặc định"
                        value={mauin}
                        disabled={true}
                        style={styles.view_input}
                        right={<TextInput.Icon icon={Popup} onPress={() => { setFBottomSheer(!isFBottomSheet) }} />}
                        onChangeText={text => setMauin(text)}
                    />
                </View>

                <View style={{ width: '90%', marginVertical: 10 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        underlineColorAndroid={'#BFBFBF'}
                        label="Size địa chỉ người nhận"
                        value={size}
                        disabled={true}
                        style={styles.view_input}
                        right={<TextInput.Icon icon={Popup} />}
                        onChangeText={text => setSize(text)}
                    />
                </View>

                <Switch
                    isSave={on}
                    title='Ẩn điện thoại người gửi'
                    onPress={() => { setOn(!on) }}
                    style={{ paddingLeft: 20, paddingRight: 20, height: '10%', alignItems: 'center' }}
                />
                <Divider style={{ width: '100%' }} />

                <Switch
                    isSave={on}
                    title='Ẩn địa chỉ người gửi ( chỉ hỗ trợ mẫu giấy Ax)'
                    onPress={() => { setOn(!on) }}
                    style={{ paddingLeft: 20, paddingRight: 20, height: '10%', alignItems: 'center' }}
                />
                <Divider style={{ width: '100%' }} />

                <Switch
                    isSave={on}
                    title='Ẩn cước vận chuyển'
                    onPress={() => { setOn(!on) }}
                    style={{ paddingLeft: 20, paddingRight: 20, height: '10%', alignItems: 'center' }}
                />
                <Divider style={{ width: '100%' }} />

                <Switch
                    isSave={on}
                    title='Ẩn bưu cục chấp nhận'
                    onPress={() => { setOn(!on) }}
                    style={{ paddingLeft: 20, paddingRight: 20, height: '10%', alignItems: 'center' }}
                />
                <Divider style={{ width: '100%' }} />
            </View>


            <FBottomSheet
                isVisible={isFBottomSheet}
                style={{ height: '40%' }}
                children={
                    <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
                        <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { setFBottomSheer(!isFBottomSheet) }}>
                                <Out />
                            </TouchableOpacity>



                            <View style={{ width: '85%', marginHorizontal: 20, alignItems: 'center' }}>
                                <Text style={commonStyles.text_16}>Hành động</Text>
                            </View>

                        </View>
                        <ScrollView
                            style={{ width: '100%', height: '70%' }}>
                            <View style={{ width: '100%' }}>
                                <Divider style={{ marginTop: 10 }} />
                                {Array.from({ length: 3 }, (_, index) => (
                                    <TouchableOpacity key={index} style={{ width: '100%', marginVertical: 5 }} >
                                        <View style={{ width: '100%', height: 50, justifyContent: 'center', paddingLeft: 10 }}>
                                            {index === 0}
                                            {index === 1}
                                            {index === 2}

                                            <Text onPress={() => {
                                                setMauin(data[index])
                                                setFBottomSheer(!isFBottomSheet)
                                            }}
                                                style={[commonStyles.text_14]}>
                                                {data[index]}
                                            </Text>

                                        </View>
                                        <Divider />
                                    </TouchableOpacity>
                                ))}
                            </View>

                        </ScrollView>



                    </View>}
                closeModal={() => { setFBottomSheer(!isFBottomSheet) }}
            />




        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',

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

export default ThietlapIn;
