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
import eye_slash from '../../../assets/svg/eye-slash';
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
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Mật khẩu phải ít nhất 6 ký tự, bao gồm ký tự hoa, thường, ký tự số")
        .matches(/\w*[A-Z]\w*/, "Mật khẩu phải ít nhất 6 ký tự, bao gồm ký tự hoa, thường, ký tự số")
        .matches(/\d/, "Mật khẩu phải ít nhất 6 ký tự, bao gồm ký tự hoa, thường, ký tự số")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Mật khẩu phải ít nhất 6 ký tự, bao gồm ký tự hoa, thường, ký tự sốr")
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),

});
const RootStack = createStackNavigator<RootStackParamList>();
function ChangePass(): JSX.Element {

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form data submitted:', values);
        },
    });


    const [key, setkey] = React.useState("");


    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);




   

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
                        label="Mật khẩu "
                        style={(formik.errors.password) ? styles.view_input_forcus : styles.view_input}
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        secureTextEntry={!isPasswordVisible}
                        right={<TextInput.Icon icon={isPasswordVisible ? 'eye' : eye_slash} size={18} onPress={() => { setIsPasswordVisible(!isPasswordVisible); }} />}
                    />
                    {(formik.errors.password) &&
                        <Text style={[commonStyles.text_12, styles.errorText, { color: (formik.values.password.length > 0) ? 'blue' : 'red' }]}>{formik.errors.password}</Text>
                    }
                </View>


                <View style={{ width: '100%', marginVertical: 10 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        label="Nhập lại mật khẩu"

                        value={formik.values.confirmPassword}
                        style={(formik.errors.confirmPassword && formik.touched.confirmPassword) ? styles.view_input_err : styles.view_input}
                        onChangeText={formik.handleChange('confirmPassword')}
                        onBlur={formik.handleBlur('confirmPassword')}
                        secureTextEntry={!isPasswordVisible}
                        right={<TextInput.Icon icon={isPasswordVisible ? 'eye' : eye_slash} size={18} onPress={() => { setIsPasswordVisible(!isPasswordVisible); }} />}
                    />
                    {(formik.errors.confirmPassword && formik.touched.confirmPassword) &&
                        <Text style={[commonStyles.text_12, styles.errorText]}>{formik.errors.confirmPassword}</Text>
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
    view_input_forcus: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#1890FF'
    },
});

export default ChangePass;
