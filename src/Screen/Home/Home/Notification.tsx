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
import IconNotifi from '../../../../assets/svg/iconNotifi2';
import IconQR from '../../../../assets/svg/iconQR2';
import { Divider } from 'react-native-paper';
import Arow from '../../../../assets/svg/Configuration/arow';

import IconHotro from '../../../../assets/svg/Support/iconHotro2';
import IconThuVien from '../../../../assets/svg/Support/iconThuVien';
import IconManagerSupport from '../../../../assets/svg/Support/iconManagerSupport';
import Cancle from '../../../../assets/svg/cancel';
import Option from '../../../../assets/svg/option';
import PopupMenu from '../../../../assets/svg/popupMenu';
import FBottomSheet from '../../../components/BottomSheetBar';
import Out from '../../../../assets/svg/delete';

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
function Notification(): JSX.Element {

    const [isFBottomSheet, setFBottomSheer] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={[commonStyles.tool_bar, { alignItems: 'center' }]}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_20, { width: '92%', textAlign: 'center' }]}>Thông báo</Text>
                <Option />
            </View>


            <View style={{ width: '100%', height: '5%', backgroundColor: '#FFFFFF', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15, alignItems: 'center' }} onPress={() => { setFBottomSheer(!isFBottomSheet) }}>
                    <Text style={[commonStyles.text_14, { color: '#1890FF', marginHorizontal: 5 }]}>Tất cả</Text>
                    <PopupMenu />
                </TouchableOpacity>
            </View>


            <View style={{ width: '100%', padding: 15, height: '30%', backgroundColor: '#FFFFFF', marginTop: 20 }}>
                <TouchableOpacity style={styles.config}>
                    <IconManagerSupport />
                    <Text style={[commonStyles.text_16, styles.text]}>Quản lí yêu cầu hỗ trợ</Text>
                    <Arow />
                </TouchableOpacity>
                <Divider style={{ marginVertical: 10 }} />



                <TouchableOpacity style={styles.config}>
                    <IconThuVien />
                    <Text style={[commonStyles.text_16, styles.text]}>Thư viện</Text>
                    <Arow />
                </TouchableOpacity>
                <Divider style={{ marginVertical: 10 }} />



                <TouchableOpacity style={styles.config}>
                    <IconHotro />
                    <Text style={[commonStyles.text_16, styles.text]}>Trung tâm hỗ trợ</Text>
                    <Arow />
                </TouchableOpacity>
            </View>
            <FBottomSheet
                isVisible={isFBottomSheet}
                style={{ height: '50%' }}
                children={
                    <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
                        <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { setFBottomSheer(!isFBottomSheet) }}>
                                <Out />
                            </TouchableOpacity>
                            <View style={{ width: '80%', marginHorizontal: 20, alignItems: 'center' }}>
                                <Text style={commonStyles.text_16}>Hiện thị thông báo</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', marginVertical: 15 }}>
                            <Divider style={styles.divider} />

                            <TouchableOpacity style={{ width: '100%', marginVertical: 15 }}>
                                <Text style={[commonStyles.text_14, { marginLeft: 20 }]}>Tất cả </Text>
                            </TouchableOpacity>
                            <Divider style={styles.divider} />

                            <TouchableOpacity style={{ width: '100%', marginVertical: 15 }}>
                                <Text style={[commonStyles.text_14, { marginLeft: 20 }]}>Chuyển tiếp, phát hoàn</Text>
                            </TouchableOpacity>
                            <Divider style={styles.divider} />

                            <TouchableOpacity style={{ width: '100%', marginVertical: 15 }}>
                                <Text style={[commonStyles.text_14, { marginLeft: 20 }]}>Yêu cầu hiệu chỉnh</Text>
                            </TouchableOpacity>
                            <Divider style={styles.divider} />

                            <TouchableOpacity style={{ width: '100%', marginVertical: 15 }}>
                                <Text style={[commonStyles.text_14, { marginLeft: 20 }]}>Yêu cầu hỗ trợ </Text>
                            </TouchableOpacity>
                            <Divider style={styles.divider} />

                            <TouchableOpacity style={{ width: '100%', marginVertical: 15 }}>
                                <Text style={[commonStyles.text_14, { marginLeft: 20 }]}>Thông báo chung </Text>
                            </TouchableOpacity>
                            <Divider style={styles.divider} />


                        </View>


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
        backgroundColor: '#F3F3F3',
        alignItems: 'center'
    },
    view: {
        width: '100%',
        marginVertical: 25
    },
    config: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginHorizontal: 10,
        width: '87%'
    },
    divider: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        height: 1
    }

});

export default Notification;
