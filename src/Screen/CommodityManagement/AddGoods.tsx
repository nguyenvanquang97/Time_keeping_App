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
import commonStyles from '../../style/style';
import IconNotifi from '../../../assets/svg/iconNotifi2';
import IconQR from '../../../assets/svg/iconQR2';
import { Divider, RadioButton, TextInput } from 'react-native-paper';
import Arow from '../../../assets/svg/Configuration/arow';

import IconHotro from '../../../assets/svg/Support/iconHotro2';
import IconThuVien from '../../../assets/svg/Support/iconThuVien';
import IconManagerSupport from '../../../assets/svg/Support/iconManagerSupport';
import Cancle from '../../../assets/svg/cancel';
import Header from '../../components/Header';
import TextItem from '../../components/TextItem';
import IconImage from '../../../assets/svg/iconImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/CustomButton';
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
    PersonalInformation: undefined,
    EditPersonalInformation: undefined,
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function AddGoods(): JSX.Element {

    const [isFBottomSheet, setFBottomSheer] = useState(false);
    const [checked, setChecked] = React.useState('first');
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (

        <KeyboardAwareScrollView
            style={styles.container}>

            <SafeAreaView style={{ width: '100%', alignItems: 'center' }} >
                <Header left={<Cancle />} onPressLeft={() => navigation.goBack()}><TextItem styleName='text_16' fontWeight='700' color='black'>Tạo hàng hóa</TextItem></Header>
                <View style={{ marginVertical: 20, width: '90%' }}>
                    <TextItem styleName='text_16' fontWeight='700' color='black'>Hình đại diện</TextItem>
                    <TouchableOpacity style={styles.selectImage}>
                        <View style={{ marginBottom: 5 }}>
                            <IconImage />
                        </View>

                        <TextItem styleName='text_14' color='rgba(251, 175, 23, 1)' fontWeight='400'>Chọn ảnh</TextItem>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', width: '90%' }}>
                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="first"

                            color='rgba(251, 175, 23, 1)'
                            uncheckedColor='rgba(232, 232, 232, 1)'

                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <TextItem styleName='text_14'>Trong nước</TextItem>
                    </View>
                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="second"
                            color='rgba(251, 175, 23, 1)'
                            uncheckedColor='rgba(232, 232, 232, 1)'
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <TextItem styleName='text_14'>Quốc tế</TextItem>
                    </View>

                </View>
                <View style={{ width: '90%', marginVertical: 5 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        underlineColorAndroid={'#BFBFBF'}
                        label="Tên hàng hóa"

                        style={styles.view_input}


                    />
                </View>

                <View style={{ width: '90%', marginVertical: 5 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        underlineColorAndroid={'#BFBFBF'}
                        label="Khối lượng (g)"

                        style={styles.view_input}


                    />
                </View>

                <View style={{ width: '90%', marginVertical: 5 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        underlineColorAndroid={'#BFBFBF'}
                        label="giá trị (VNĐ)"
                        style={styles.view_input}

                    />
                </View>
                <View style={{ width: '90%', flexDirection: 'row', marginVertical: 5 }}>
                    <View style={{ width: '30%' }}>
                        <TextInput
                            activeUnderlineColor='#BFBFBF'
                            underlineColorAndroid={'#BFBFBF'}
                            label="Dài (cm)"

                            style={styles.view_input}


                        />
                    </View>
                    <View style={{ width: '30%', marginHorizontal: '5%' }}>
                        <TextInput
                            activeUnderlineColor='#BFBFBF'
                            underlineColorAndroid={'#BFBFBF'}
                            label="Rộng (cm)"
                            style={styles.view_input}

                        />
                    </View>

                    <View style={{ width: '30%' }}>
                        <TextInput
                            activeUnderlineColor='#BFBFBF'
                            underlineColorAndroid={'#BFBFBF'}
                            label="Cao (cm)"
                            style={styles.view_input}

                        />
                    </View>
                </View>
            </SafeAreaView >
            <View style={[commonStyles.view_alignItem, { marginTop: 60 }]}>
                <TouchableOpacity style={commonStyles.view_alignItem}  >
                    <CustomButton
                        textColor='rgba(255, 255, 255, 1)'
                        name='Tiếp tục'

                        backgroundColor='rgba(251, 175, 23, 1)'
                    />
                </TouchableOpacity>
            </View>

        </KeyboardAwareScrollView>



    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,


    },

    text: {
        marginHorizontal: 10,
        width: '40%',
        color: 'rgba(140, 140, 140, 1)'
    },
    divider: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        height: 1
    },
    textRight: {
        marginHorizontal: 10,
        width: '50%',
        color: 'rgba(38, 38, 38, 1)',
        textAlign: 'right',
        fontWeight: '800'
    },
    selectImage: {
        width: 117,
        height: 117,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'rgba(251, 175, 23, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginVertical: 15
    },
    view_input: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F3F3F3'
    },
});

export default AddGoods;
