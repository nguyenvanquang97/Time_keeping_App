/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    BackHandler,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,

    TouchableOpacity,

    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Modal from "react-native-modal";




import Cancle from '../../../../assets/svg/cancel';

import commonStyles from '../../../style/style';
import { TextInput } from 'react-native-paper';
import eye_slash from '../../../../assets/svg/eye-slash';
import CustomButton from '../../../components/CustomButton';
import Popup from '../../../../assets/svg/popup';
import Map from '../../../../assets/svg/icon_map';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';


import FBottomSheet from '../../../components/BottomSheetBar';
import Out from '../../../../assets/svg/delete';
import Search from '../../../../assets/svg/search';

import { Divider, Text } from 'react-native-paper';
import { Formik } from 'formik'
import * as yup from 'yup'
import MCenterProps from '../../../components/ModalCenter';
import Warning from '../../../../assets/svg/warning';
import IconCleadr from '../../../../assets/svg/iconCleadr';
import { Calendar, LocaleConfig } from 'react-native-calendars';
function AddSender(): JSX.Element {


    const data = [
        'Hà nội',
        'Hồ Chí Minh',
        'Đà nẵng',
        'Hải phòng',
    ];

    const [selected, setSelected] = useState('');

    const [email, setEmail] = React.useState('');


    const [pass, setPass] = React.useState("");

    const [dress, setDress] = React.useState("");

    const [city, setCity] = React.useState("");

    const [huyen, setHuyen] = React.useState("");

    const [xa, setXa] = React.useState("");



    const [isFBottomSheet, setFBottomSheer] = useState(false);
    const [isMCenter, setMCenter] = useState(false);
    const [isMCenterErr, setMCenterErr] = useState(false);
    const [isFBottomSheetDate, setFBottomSheerDate] = useState(false);



    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const handleBackButtonPress = () => {
        if (email.length > 0) {
            setMCenterErr(!isMCenterErr);
            return true;
        } else {
            return false;
        }


    };
    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackButtonPress
        );

        return () => backHandler.remove();
    }, []);
    const goPostOfficeService = () => {
        navigation.navigate('PostOfficeService')
    }

    const loginValidationSchema = yup.object().shape({
        fullName: yup
            .string()
            .matches(/(\w.+\s).+/, 'Enter at least 2 names')
            .required('Full name is required'),

        email: yup
            .string()
            .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Email không đúng định dạng')
            .required('Email Address is Required'),


        phoneNumber: yup
            .string()
            .matches(/(09)(\d){8}\b/, 'Enter a valid phone number')
            .required('Phone number is required'),

    })

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={{ width: '100%' }}>

                <View style={{ width: '100%', height: '30%', marginVertical: 4, alignItems: 'center' }}>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ email: '', phoneNumber: '', fullName: '', }}
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

                                <View style={{ width: '90%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Tài khoản quản lý"
                                        value={huyen}
                                        style={styles.view_input}
                                        onChangeText={text => setHuyen(text)}
                                        right={<TextInput.Icon icon={Popup} />}
                                    />
                                </View>

                                <View style={{ width: '90%', marginVertical: 5 }}>

                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Họ và tên"
                                        value={values.fullName}
                                        style={(errors.fullName && touched.fullName) ? styles.view_input_err : styles.view_input}
                                        onChangeText={handleChange('fullName')}
                                        onBlur={handleBlur('fullName')}
                                    />
                                    {
                                        (errors.fullName && touched.fullName &&
                                            <Text style={[commonStyles.text_12, styles.errorText]}>{errors.fullName}</Text>)
                                    }


                                </View>

                                <View style={{ width: '90%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Số điện thoại"
                                        value={values.phoneNumber}
                                        style={(errors.phoneNumber && touched.phoneNumber) ? styles.view_input_err : styles.view_input}
                                        onChangeText={handleChange('phoneNumber')}
                                        onBlur={handleBlur('phoneNumber')}
                                    />
                                    {(errors.phoneNumber && touched.phoneNumber) &&
                                        <Text style={[commonStyles.text_12, styles.errorText]}>{errors.phoneNumber}</Text>
                                    }
                                </View>



                                <View style={{ width: '90%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Địa chỉ chi tiết"
                                        value={dress}

                                        style={styles.view_input}
                                        right={<TextInput.Icon icon={Map} />}
                                        onChangeText={text => setDress(text)}
                                    />
                                </View>

                                <View style={{ width: '90%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        disabled={true}
                                        label="Tỉnh/Thành phố"
                                        textColor='black'
                                        value={city}
                                        style={styles.view_input}
                                        onChangeText={text => setCity(text)}
                                        right={<TextInput.Icon icon={Popup} onPress={() => { setFBottomSheer(!isFBottomSheet) }} />}
                                    />
                                </View>

                                <View style={{ width: '90%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Quận huyện"
                                        value={huyen}
                                        style={styles.view_input}
                                        onChangeText={text => setHuyen(text)}
                                        right={<TextInput.Icon icon={Popup} />}
                                    />
                                </View>

                                <View style={{ width: '90%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Phường xã"
                                        value={xa}
                                        style={styles.view_input}
                                        onChangeText={text => setXa(text)}
                                        right={<TextInput.Icon icon={Popup} />}
                                    />
                                </View>

                                <View style={{ width: '90%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Bưu cục phục vục"
                                        value={xa}
                                        style={styles.view_input}
                                        onChangeText={text => setXa(text)}
                                        right={<TextInput.Icon icon={Search} onPress={() => { goPostOfficeService() }} />}
                                    />
                                </View>








                                <View style={[commonStyles.view_alignItem, { marginVertical: 10 }]}>
                                    <TouchableOpacity style={commonStyles.view_alignItem} onPress={() => {
                                        handleSubmit()
                                        navigation.navigate('Authenphone');
                                    }} disabled={!isValid}>
                                        <CustomButton
                                            textColor='rgba(255, 255, 255, 1)'
                                            name='Tạo người gửi'

                                            backgroundColor='rgba(251, 175, 23, 1)'
                                        />
                                    </TouchableOpacity>
                                </View>



                            </>
                        )}
                    </Formik>

                </View>

            </ScrollView>

            <FBottomSheet
                isVisible={isFBottomSheet}
                style={{ height: '40%' }}
                children={
                    <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
                        <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { setFBottomSheer(!isFBottomSheet) }}>
                                <Out />
                            </TouchableOpacity>



                            <View style={{ width: '75%', marginHorizontal: 20, alignItems: 'center' }}>
                                <Text style={commonStyles.text_16}>Chọn Tỉnh - Thành phố</Text>
                            </View>

                        </View>

                        <View style={{ width: '95%', marginVertical: 20 }}>
                            <TextInput

                                activeUnderlineColor='#BFBFBF'
                                placeholder='Nhập Tỉnh - Thành phố'
                                placeholderTextColor={'#BFBFBF'}
                                value={pass}
                                left={<TextInput.Icon icon={Search} size={5} />}
                                style={styles.view_input_search}
                                onChangeText={text => setPass(text)}
                            />
                        </View>

                        <ScrollView
                            style={{ width: '100%', height: '60%' }}>
                            <View style={{ width: '100%' }}>
                                {Array.from({ length: 4 }, (_, index) => (
                                    <TouchableOpacity key={index} style={{ width: '100%', marginVertical: 5 }} >
                                        <View style={{ width: '100%', height: 50, justifyContent: 'center', paddingLeft: 10 }}>
                                            {index === 0}
                                            {index === 1}
                                            {index === 2}
                                            {index === 3}
                                            <Text onPress={() => {
                                                setCity(data[index])
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

            {/* thong báo tài khoản đã được đăng ký */}

            <MCenterProps
                isVisible={isMCenter}
                children={
                    <View style={{ width: '100%' }}>
                        <Text style={[commonStyles.text_14, { width: '100%', marginBottom: 20, textAlign: 'center' }]}>Số điện thoại đã đăng ký tài khoản. Vui lòng liên hệ đơn vị quản lý hoặc tổng đài CSKH<Text style={{ color: 'rgba(24, 144, 255, 1)' }}> 1900545481 </Text>để được hỗ trợ.</Text>

                        <TouchableOpacity onPress={() => { setMCenter(!isMCenter) }}>
                            <CustomButton
                                textColor='rgba(255, 255, 255, 1)'
                                name='Tôi đã hiểu'
                                width={'100%'}
                                backgroundColor='rgba(24, 144, 255, 1)'
                            />
                        </TouchableOpacity>

                    </View>
                }
                closeModal={() => { setMCenter(!isMCenter) }}
            />

            <MCenterProps
                isVisible={isMCenterErr}
                children={
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ marginBottom: 10 }}>
                            <Warning />
                        </View>
                        <Text style={[commonStyles.text_20, { fontWeight: '800', marginVertical: 5 }]}>Hủy đăng kí</Text>
                        <Text style={[commonStyles.text_14, { width: '100%', textAlign: 'center' }]}>Thông tin đăng ký sẽ không được lưu lại khi bạn thoát ra.</Text>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity style={{ width: "46%", marginRight: 8 }} onPress={() => { setMCenterErr(!isMCenterErr) }}>
                                <CustomButton
                                    textColor='rgba(140, 140, 140, 1)'
                                    width={'100%'}
                                    name='Tiếp tục đăng kí'
                                    backgroundColor='rgba(243, 243, 243, 1)'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: "46%" }} onPress={() => { navigation.goBack() }}>
                                <CustomButton
                                    textColor='rgba(255, 255, 255, 1)'
                                    name='Hủy đăng kí'
                                    width={'100%'}
                                    backgroundColor='rgba(243, 115, 34, 1)'
                                />
                            </TouchableOpacity>
                        </View>


                    </View>
                }
                closeModal={() => { setMCenterErr(!isMCenterErr) }}
            />


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 10
    },
    view: {
        width: '100%',
        alignItems: 'center'
    },
    view_input: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(243, 243, 243, 1)'
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
    view_input_search: {
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#F3F3F3',
        height: 35,

    },

    errorText: {
        color: '#E60000',
        marginTop: 5,
        marginBottom: 10
    },

});

export default AddSender;
