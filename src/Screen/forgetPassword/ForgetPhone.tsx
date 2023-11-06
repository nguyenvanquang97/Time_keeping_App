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

import * as yup from 'yup'
import { useFormik } from 'formik';

export type RootStackParamList = {
    Login: undefined,
    Sigup: undefined,
    Authenphone: undefined,
    ChooseOrganization: undefined,
    ForgetPhone: undefined,
    ForgetPhone2: undefined,
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const validationSchema = yup.object().shape({
    phoneNumber: yup
        .string()
        .matches(/(09)(\d){8}\b/, 'Số điện thoại không đúng định dạng')
        .required('Phone number is required'),
});
const RootStack = createStackNavigator<RootStackParamList>();
function ForgetPhone(): JSX.Element {

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form data submitted:', values);
        },
    });


    const [key, setkey] = React.useState("");


    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();





    const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '90%', height: '85%', marginVertical: 25 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>

                <View style={styles.view}>
                    <Text style={[commonStyles.text_20, { marginVertical: 10 }]}>Nhập số điện thoại</Text>
                </View>

                <View style={{ width: '100%', marginVertical: 5 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        underlineColorAndroid={'#BFBFBF'}
                        label="Số điện thoại"
                        keyboardType='numeric'
                        value={formik.values.phoneNumber}
                        style={(formik.errors.phoneNumber && formik.touched.phoneNumber) ? styles.view_input_err : styles.view_input}
                        onChangeText={formik.handleChange('phoneNumber')}
                        onBlur={formik.handleBlur('phoneNumber')}
                    />
                    {(formik.errors.phoneNumber && formik.touched.phoneNumber) &&
                        <Text style={[commonStyles.text_12, styles.errorText]}>{formik.errors.phoneNumber}</Text>
                    }
                </View>

                <View style={[commonStyles.view_alignItem, { marginVertical: 20 }]}>
                    <TouchableOpacity
                        style={commonStyles.view_alignItem}
                        disabled={!formik.isValid}
                        onPress={() => {
                            formik.handleSubmit(),
                                navigation.navigate('ForgetPhone2')
                        }} >
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

export default ForgetPhone;
