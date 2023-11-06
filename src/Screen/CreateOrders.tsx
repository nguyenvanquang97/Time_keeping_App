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
    TouchableOpacity
} from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Cancle from '../../assets/svg/cancel';
import commonStyles from '../style/style';
import Lock from '../../assets/svg/lock';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import TextItem from '../components/TextItem';
import { Divider, RadioButton, TextInput } from 'react-native-paper';
import Out from '../../assets/svg/delete';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IconEdit from '../../assets/svg/iconEdit';
import PrintedInformation from './ManageSenders/TapDetails/PrintedInformation';
import ViewRowOnpress from '../components/ListTileVIew';
import Icon1 from '../../assets/svg/icon1';
import icon1 from '../../assets/svg/icon1';
import spinner from '../../assets/svg/spinner';
import icon2 from '../../assets/svg/icon2';
import icon3 from '../../assets/svg/icon3';
import icon4 from '../../assets/svg/icon4';
import popup from '../../assets/svg/popup';
import spinner2 from '../../assets/svg/spinner2';
import Switch from '../components/Switch';
import Iconhopdong from '../../assets/svg/iconhopdong';
import { KeyboardAvoidingView, Platform } from 'react-native';
import ButtonIcon from '../components/ButtonIcon';
import add from '../../assets/svg/add';
import iconAdd from '../../assets/svg/iconAdd2';
import IconAdd2 from '../../assets/svg/iconAdd2';
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
function CreateOrders(): JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [selected, setSelected] = React.useState<number>();
    const [ison, setIson] = React.useState(false);
    const [checked, setChecked] = React.useState('first');
    const handleChange = (select: number) => {
        setSelected(select);
    };

    function    HomeScreen() {

        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
            >
                <View style={{ flex: 1, backgroundColor: "#F3F3F3" }}>
                    <View style={(selected == 1) ? (styles.view_item_select) : (styles.view_item)}>
                        <ViewRowOnpress
                            title='Thông tin người nhận, người gửi'

                            iconRight={icon1}
                            height={(selected == 1) && '10%'}
                            iconLeft={(selected == 1) ? (spinner) : (spinner2)}
                            onPress={() => handleChange(1)}
                        />
                        {(selected == 1) &&
                            <ScrollView>
                                <Switch

                                    title='Sử dụng hợp đồng'
                                    switchPosition='left'
                                    isSave={ison}
                                    onPress={() => { setIson(!ison) }}
                                />
                                {(ison) &&

                                    <View>
                                        <View style={{ flexDirection: 'row', width: '100%' }}>
                                            <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton
                                                    value="first"
                                                    color='rgba(251, 175, 23, 1)'
                                                    uncheckedColor='rgba(232, 232, 232, 1)'

                                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                                    onPress={() => setChecked('first')}
                                                />
                                                <TextItem styleName='text_14'>Hợp đồng gửi hàng</TextItem>
                                            </View>
                                            <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <RadioButton
                                                    value="second"
                                                    color='rgba(251, 175, 23, 1)'
                                                    uncheckedColor='rgba(232, 232, 232, 1)'
                                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                                    onPress={() => setChecked('second')}
                                                />
                                                <TextItem styleName='text_14'>Hợp đồng C</TextItem>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <TextItem styleName='text_12' color='#1890FF'>Danh sách hợp đồng gửi hàng</TextItem>
                                        </TouchableOpacity>


                                        <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                                            <Iconhopdong />
                                            <View style={{ marginHorizontal: 10 }}>
                                                <TextItem styleName='text_14' color='black' fontWeight='700'>Hợp đồng 1</TextItem>
                                                <View style={{ marginVertical: 5 }}>
                                                    <TextItem styleName='text_12'> Mã HĐ: SDFKJFLSJ</TextItem>
                                                </View>

                                                <TextItem styleName='text_14'>Ngày ký: 14/02/2022</TextItem>
                                            </View>
                                        </View>
                                    </View>

                                }

                                <Divider style={{ marginBottom: 15 }} />
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '50%' }}>
                                            <TextItem styleName='text_14' color='black' fontWeight='700'>Người gửi</TextItem>
                                        </View>

                                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                            <TextItem styleName='text_14' color='#1890FF' >Danh sách người gửi</TextItem>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                                        <View style={{ width: '70%' }}>

                                            <TextItem styleName='text_14' color='black' fontWeight='700'>Trần Thái Linh</TextItem>

                                            <View style={{ marginVertical: 5 }}>
                                                <TextItem styleName='text_14'  >0346148532</TextItem>
                                            </View>

                                            <TextItem styleName='text_14'>23 Minh Khai, Hai Bà Trưng, Hà Nội</TextItem>
                                        </View>

                                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                                            <TouchableOpacity><IconEdit /></TouchableOpacity>
                                        </View>

                                    </View>
                                    <Divider style={{ marginVertical: 5 }} />
                                </View>


                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                    <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                                        <TextItem styleName='text_14' fontWeight='700' color='black'>Người nhận</TextItem>
                                    </View>
                                    <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <TextItem styleName='text_14' color='#1890FF'>Danh sách người nhận</TextItem>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Số điện thoại"

                                        style={styles.view_input}

                                        right={<TextInput.Icon icon={popup} />}
                                    />
                                </View>

                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Họ và tên"

                                        style={styles.view_input}

                                        right={<TextInput.Icon icon={popup} />}
                                    />
                                </View>

                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Địa chỉ"

                                        style={styles.view_input}

                                        right={<TextInput.Icon icon={popup} />}
                                    />
                                </View>

                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Tỉnh/TP"

                                        style={styles.view_input}

                                        right={<TextInput.Icon icon={popup} />}
                                    />
                                </View>

                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Quận/huyện"

                                        style={styles.view_input}

                                        right={<TextInput.Icon icon={popup} />}
                                    />
                                </View>

                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Phường/Xã"

                                        style={styles.view_input}

                                        right={<TextInput.Icon icon={popup} />}
                                    />
                                </View>

                            </ScrollView>

                        }
                    </View>
                    <View style={(selected == 2) ? (styles.view_item_select) : (styles.view_item)}>
                        <ViewRowOnpress
                            title='Thông tin dịch vụ, yêu cầu thêm'
                            iconRight={icon2}
                            height={(selected == 2) && '10%'}
                            iconLeft={(selected == 2) ? (spinner) : (spinner2)}
                            onPress={() => handleChange(2)}
                        />
                        {(selected === 2) &&
                            <ScrollView style={{ marginBottom: 20 }}>
                                <View style={{ marginVertical: 10, width: '100%', paddingHorizontal: 10, justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '50%' }}>
                                            <TextItem styleName='text_16' color='black' fontWeight='700'>Người gửi</TextItem>
                                        </View>

                                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                            <TextItem styleName='text_14' color='#1890FF' >Danh sách người gửi</TextItem>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Chọn dịch vụ chuyển phát"

                                        style={styles.view_input}

                                        right={<TextInput.Icon icon={popup} />}
                                    />
                                </View>
                                <Switch
                                    switchPosition='left'
                                    title='Phát hàng thu tiền COD'
                                    isSave={ison}
                                />
                                <Switch
                                    switchPosition='left'
                                    title='Khai giá'
                                    isSave={ison}
                                />
                                <Switch
                                    switchPosition='left'
                                    title='Hóa đơn'
                                    isSave={ison}
                                />
                                <Switch
                                    switchPosition='left'
                                    title='Phát một phần'
                                    isSave={ison}
                                />
                                <Divider style={{ marginVertical: 5 }} />
                                <View style={{ marginVertical: 10 }}>
                                    <TextItem styleName='text_16' fontWeight='700' color='black'>Yêu cầu thêm </TextItem>
                                    <Switch
                                        switchPosition='left'
                                        title='Người nhận trả cước'
                                        isSave={ison}
                                    />
                                    <Switch
                                        switchPosition='left'
                                        title='Thu phí hủy đơn hàng'
                                        isSave={ison}
                                    />

                                </View>

                            </ScrollView>
                        }
                    </View>
                    <View style={(selected == 3) ? (styles.view_item_select) : (styles.view_item)}>
                        <ViewRowOnpress
                            title='Thông tin hàng hóa'
                            iconRight={icon3}
                            iconLeft={(selected == 3) ? (spinner) : (spinner2)}
                            height={(selected == 3) && '10%'}
                            onPress={() => handleChange(3)}
                        />
                        {(selected === 3) &&
                            <ScrollView style={{ marginBottom: 20 }}>
                                <View style={{ marginVertical: 10, width: '100%', paddingHorizontal: 10, justifyContent: 'center' }}>
                                    <View style={{ marginVertical: 5 }}>
                                        <TextItem styleName='text_16' color='black' fontWeight='700'>Mã đơn hàng</TextItem>
                                    </View>
                                </View>
                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        activeUnderlineColor='#BFBFBF'
                                        underlineColorAndroid={'#BFBFBF'}
                                        label="Nhập mã đơn hàng"
                                        style={styles.view_input}
                                        right={<TextInput.Icon icon={popup} />}
                                    />
                                </View>
                                <Divider style={{ marginVertical: 15 }} />

                                <View style={{ marginVertical: 10, width: '100%', paddingHorizontal: 10, justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '50%' }}>
                                            <TextItem styleName='text_16' color='black' fontWeight='700'>Hàng hóa</TextItem>
                                        </View>

                                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                            <TextItem styleName='text_14' color='#1890FF' >Danh sách hàng hóa</TextItem>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '100%', paddingHorizontal: 10 }}>
                                    <ButtonIcon
                                        style={{ width: '38%', backgroundColor: '#EEF4FB', borderColor: "#EEF4FB" }}
                                        styleText={[commonStyles.text_14, { color: '#004588' }]}
                                        title='Thêm hàng hóa'
                                        iconRight={IconAdd2}
                                    />
                                </View>

                                <View>

                                </View>

                            </ScrollView>
                        }

                    </View>
                    <View style={(selected == 4) ? (styles.view_item_select) : (styles.view_item)}>
                        <ViewRowOnpress
                            title='Hình thức gửi hàng'
                            iconRight={icon4}
                            iconLeft={(selected == 4) ? (spinner) : (spinner2)}
                            onPress={() => handleChange(4)}
                        />
                    </View>

                    <View style={{ width: '100%', height: '16%', position: 'absolute', bottom: 0, backgroundColor: 'white', paddingHorizontal: 10 }}>
                        <ViewRowOnpress

                            style_select={{ height: '50%' }}
                            title='Xem thông tin cước'
                            isDiver={false}
                            iconLeft={spinner}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ width: '50%' }}>
                                <CustomButton
                                    name='Lưu nháp'
                                    backgroundColor='#F3F3F3'
                                    textColor='#8C8C8C'
                                />
                            </View>
                            <View style={{ width: '50%' }}>
                                <CustomButton
                                    name='Tạo đơn hàng'
                                    backgroundColor='#FBAF17'
                                    textColor='#FFFFFF'
                                />
                            </View>
                        </View>


                    </View>
                </View>
            </KeyboardAvoidingView>

        );
    }



    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={styles.container}>


            <View style={{ width: '100%', alignItems: 'center' }}>
                <Header left={<Out />} onPressLeft={() => navigation.goBack()}
                    right={<TextItem styleName='text_12' color='#1890FF'>Mẫu đơn</TextItem>}><TextItem styleName='text_16' fontWeight='700'>Tạo đơn hàng</TextItem></Header>
            </View>
            <View style={{ width: '100%' }}>

                <Divider />
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'rgba(251, 175, 23, 1)',
                    tabBarInactiveTintColor: 'rgba(191, 191, 191, 1)',
                    tabBarIndicatorStyle: {
                        backgroundColor: 'rgba(251, 175, 23, 1)',
                    },
                }}

            >
                <Tab.Screen name="Trong nước" component={HomeScreen} />
                <Tab.Screen name="Quốc tế" component={PrintedInformation} />
            </Tab.Navigator>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
    },
    view_item: {
        width: '100%',
        height: '8%',
        paddingHorizontal: 10,
        backgroundColor: 'white',

    },
    view_item_select: {
        width: '100%',
        height: '56%',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginVertical: 10

    },
    view_select: {
        width: '100%',
        height: '10%',
    },
    view_input: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F3F3F3',

    },

});

export default CreateOrders;
