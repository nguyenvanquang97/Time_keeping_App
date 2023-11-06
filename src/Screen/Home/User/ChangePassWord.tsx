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
function ChangePassWord(): JSX.Element {


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const loginValidationSchema = yup.object().shape({


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

    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ width: '90%', alignItems: 'center', flexDirection: 'row', marginVertical: 15 }]}>
                <TouchableOpacity style={{ width: '10%', paddingLeft: 20 }} onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_20, { width: '90%', textAlign: 'center' }]}>Đổi mật khẩu</Text>
                <Divider />
            </View>

            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ password: '', confirmPassword: '', }}
                onSubmit={values => console.log(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,

                    errors,
                    isValid,
                    touched
                }) => (
                    <>
                        <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
                            <View style={{ width: '90%', marginVertical: 5 }}>
                                <TextInput
                                    activeUnderlineColor='#BFBFBF'
                                    label="Mật khẩu "
                                    style={(errors.password) ? styles.view_input_forcus : styles.view_input}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    secureTextEntry={!isPasswordVisible}
                                    right={<TextInput.Icon icon={isPasswordVisible ? 'eye' : eye_slash} size={18} onPress={() => { setIsPasswordVisible(!isPasswordVisible); }} />}
                                />
                                {(errors.password) &&
                                    <Text style={[commonStyles.text_12, styles.errorText, { color: (values.password.length > 0) ? 'blue' : 'red' }]}>{errors.password}</Text>
                                }
                            </View>


                            <View style={{ width: '90%', marginVertical: 5 }}>
                                <TextInput
                                    activeUnderlineColor='#BFBFBF'
                                    label="Nhập lại mật khẩu"
                                    value={values.confirmPassword}
                                    style={(errors.confirmPassword && touched.confirmPassword) ? styles.view_input_err : styles.view_input}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    secureTextEntry={!isPasswordVisible}
                                    right={<TextInput.Icon icon={isPasswordVisible ? 'eye' : eye_slash} size={18} onPress={() => { setIsPasswordVisible(!isPasswordVisible); }} />}
                                />
                                {(errors.confirmPassword && touched.confirmPassword) &&
                                    <Text style={[commonStyles.text_12, styles.errorText]}>{errors.confirmPassword}</Text>
                                }
                            </View>
                        </View>



                        <View style={[commonStyles.view_alignItem, { marginVertical: 10 }]}>
                            <TouchableOpacity style={commonStyles.view_alignItem} onPress={() => {
                                handleSubmit()
                                navigation.navigate('Authenphone');
                            }} disabled={!isValid}>
                                <CustomButton
                                    textColor='rgba(255, 255, 255, 1)'
                                    name='Tiếp tục'
                                    backgroundColor={(!errors.confirmPassword && !errors.password && (values.confirmPassword != '')) ? 'rgba(251, 175, 23, 1)' : 'rgba(217, 217, 217, 1)'}
                                />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>



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

export default ChangePassWord;
