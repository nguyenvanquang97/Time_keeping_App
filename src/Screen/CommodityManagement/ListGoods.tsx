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

import { Divider, TextInput } from 'react-native-paper';




import Cancle from '../../../assets/svg/cancel';


import IconAdd2 from '../../../assets/svg/iconAdd2';
import IconAdd from '../../../assets/svg/iconAdd';
import Search from '../../../assets/svg/search';
import ButtonIcon from '../../components/ButtonIcon';
import Popup from '../../../assets/svg/popup';
import List0 from '../../../assets/svg/list0';

import { FlatList } from 'react-native-gesture-handler';
import AddListHC from '../../../assets/svg/addListHC';
import IconEdit from '../../../assets/svg/iconEdit';
import IconDelete from '../../../assets/svg/iconDelete';
import { Checkbox } from 'react-native-paper';

import FBottomSheet from '../../components/BottomSheetBar';
import Out from '../../../assets/svg/delete';

import TextItem from '../../components/TextItem';
import Header from '../../components/Header';
import Listgoods from '../../../assets/svg/listgoods';


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
    BlackList: undefined,
    AddUser: undefined,
    EditUser: undefined
    SenderDetails: undefined
    AddDetails: undefined
    EditDetails: undefined
    PostOfficeService: undefined
    AddGoods: undefined

};


const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};

interface MyList {
    id: number,
    name: string,
    sdt: number,
    dress: string,
    status: number,
    uri: string
}

const data: MyList[] = [
    { id: 1, name: 'Thùng bia Tiger 24 lon', sdt: 1200, dress: '30 X 30 x 30', status: 240, uri: '../../../assets/png/avataHanghoa.png' },
    { id: 2, name: 'Thùng bia Tiger 24 lon', sdt: 1200, dress: '30 X 30 x 30', status: 240, uri: '../../../assets/png/avataHanghoa.png' },
    { id: 3, name: 'Thùng bia Tiger 24 lon', sdt: 1200, dress: '30 X 30 x 30', status: 240, uri: '../../../assets/png/avataHanghoa.png' },
    { id: 4, name: 'Thùng bia Tiger 24 lon', sdt: 1200, dress: '30 X 30 x 30', status: 240, uri: '../../../assets/png/avataHanghoa.png' },
    { id: 5, name: 'Thùng bia Tiger 24 lon', sdt: 1200, dress: '30 X 30 x 30', status: 240, uri: '../../../assets/png/avataHanghoa.png' },
    { id: 6, name: 'Thùng bia Tiger 24 lon', sdt: 1200, dress: '30 x 30 x 30', status: 240, uri: '../../../assets/png/avataHanghoa.png' },

];


const RootStack = createStackNavigator<RootStackParamList>();
function ListGoods(): JSX.Element {
    const [checked, setChecked] = React.useState<boolean[]>([]);
    const [selectAll, setSelectAll] = React.useState(false);
    const [select, setSelect] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const [quanli, setQuanli] = useState('Tất cả')
    const [isFBottomSheetQL, setFBottomSheerQL] = useState(false);
    const [isFBottomSheetNT, setFBottomSheerNT] = useState(false);
    const [selected, setSelected] = useState<Number>(0)

    const handleChecked = (value: number) => {
        const updatedChecked = [...checked];
        updatedChecked[value] = !updatedChecked[value];
        setChecked(updatedChecked);

        const numChecked = updatedChecked.filter((value) => value === true).length;
        setSelected(numChecked);
        if (numChecked === data.length) {
            setSelectAll(!selectAll)
        } else {
            setSelectAll(false)
        }

    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        const updatedChecked = data.map(item =>
            !selectAll

        );
        const numChecked = updatedChecked.filter((value) => value === true).length;
        setSelected(numChecked);
        setChecked(updatedChecked);



    };

    const goEditDetails = () => {
        navigation.navigate('EditDetails')
    }
    const goAddGoods = () => {
        navigation.navigate('AddGoods')
    }

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 1)', alignItems: 'center' }]}>
                <Header
                    left={<Cancle />}
                    right={<IconAdd />}
                    onPressLeft={() => navigation.goBack()}
                    onPressRight={goAddGoods}
                >
                    <TextItem styleName='text_16' fontWeight='700' color='black' >Danh sách hàng hóa</TextItem>
                </Header>

            </View>

            <View style={(!isOn) ? (styles.height) : (styles.height1)}>
                <View style={{ width: '90%', marginVertical: 8 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        underlineColorAndroid={'#BFBFBF'}
                        placeholder='Tìm kiếm'
                        style={styles.view_input}
                        placeholderTextColor={'rgba(191, 191, 191, 1)'}
                        left={<TextInput.Icon icon={Search} />}
                    />

                    <View style={{ width: '100%', marginVertical: 10, flexDirection: 'row' }}>
                        <ButtonIcon
                            style={{ width: '55%', borderColor: 'rgba(243, 243, 243, 1)', }}
                            title='Tài khoản quản lý:'
                            addtitle={quanli}
                            iconRight={Popup}
                            styleText={{ fontSize: 12 }}
                            onPress={() => { setFBottomSheerQL(!isFBottomSheetQL) }}
                        />

                        <ButtonIcon
                            style={{ width: '40%', borderColor: 'rgba(243, 243, 243, 1)', marginHorizontal: 10 }}
                            title='Người tạo:'
                            styleText={{ fontSize: 12 }}
                            onPress={() => setFBottomSheerNT(!isFBottomSheetNT)}
                            addtitle={quanli}
                            iconRight={Popup}
                        />
                    </View>
                    {(!select) ? (
                        <View style={{ width: '100%', flexDirection: 'row' }}>

                            <TouchableOpacity onPress={() => { setSelect(!select) }} style={{ width: '50%' }} ><Text style={[commonStyles.text_14, { width: '100%', textAlign: 'left', color: 'rgba(24, 144, 255, 1)', fontWeight: '600' }]}>{!isOn && 'Chọn hàng hóa'}</Text></TouchableOpacity>

                        </View>
                    ) : (
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Text style={[commonStyles.text_14, { width: '50%', textAlign: 'left', textAlignVertical: 'center' }]}>{(selected != 0) ? ('Đã chọn ' + selected + ' hàng hóa') : ('Chưa chọn hàng hóa nào')} </Text>

                            <View style={{ width: '50%', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[commonStyles.text_14]}>Chọn tất cả</Text>
                                <Checkbox
                                    color='rgba(251, 175, 23, 1)'

                                    uncheckedColor='rgba(232, 232, 232, 1)'
                                    status={selectAll ? 'checked' : 'unchecked'}
                                    onPress={handleSelectAll}

                                />
                            </View>

                        </View>

                    )}

                </View>
            </View>
            {(isOn) ? (
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Listgoods />
                    <Text style={[commonStyles.text_14, { fontWeight: '800' }]}>Chưa có thông tin người gửi</Text>
                    <ButtonIcon
                        iconLeft={IconAdd2}
                        title='Thêm người gửi'
                        style={{ width: 200, justifyContent: 'center', backgroundColor: 'rgba(0, 69, 136, 1)', marginVertical: 20 }}
                        styleText={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center' }}
                    />
                </View>
            ) : (
                <View style={{ position: 'relative', height: '72%' }}>
                    <FlatList
                        style={(!select) ? (styles.view_list) : (styles.view_list_select)}
                        data={data}
                        renderItem={({ item, index }) => (
                            <View
                                style={[checked[index] && styles.borderColor, { width: '100%', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)', padding: 20, marginBottom: 10, borderRadius: 10 }]}>
                                <View style={{ width: '70%', flexDirection: 'row' }} >
                                    <View style={{ marginVertical: 5 }}>
                                        <Image
                                            source={require('../../../assets/png/avataHanghoa.png')} // Replace with your image path
                                            style={{ width: 70, height: 70, marginRight: 10 }}
                                        />
                                    </View>
                                    <View>
                                        <View style={{ marginVertical: 5 }}>
                                            <TextItem styleName='text_14' fontWeight='600' color='black'>{item.name}</TextItem>
                                        </View>

                                        <View style={{ flexDirection: 'row', width: '100%' }}>
                                            <View style={{ width: '50%' }}>
                                                <TextItem styleName='text_14'>{item.sdt} g</TextItem>
                                            </View>
                                            <View style={{ width: '50%', justifyContent: 'flex-end' }}>
                                                <TextItem styleName='text_14'>{item.status} VND</TextItem>
                                            </View>

                                        </View>

                                        <View style={{ marginVertical: 5 }}>
                                            <TextItem styleName='text_14'>{item.dress}</TextItem>
                                        </View>
                                    </View>




                                </View>
                                {(!select) ? (
                                    <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'flex-end' }}>
                                        <TouchableOpacity onPress={goEditDetails} style={{ marginHorizontal: 10 }}><IconEdit /></TouchableOpacity>
                                        <TouchableOpacity style={{ marginHorizontal: 5 }}><IconDelete /></TouchableOpacity>

                                    </View>
                                ) : (
                                    <View style={{ width: '30%', alignItems: 'flex-end' }}>
                                        <Checkbox
                                            color='rgba(251, 175, 23, 1)'
                                            uncheckedColor='rgba(232, 232, 232, 1)'
                                            status={checked[index] ? 'checked' : 'unchecked'}
                                            onPress={() => handleChecked(index)
                                            }
                                        />
                                    </View>
                                )}



                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}

                    />
                    {select &&
                        <View style={styles.action}>
                            <TouchableOpacity style={{ width: '50%' }} disabled={selected === 0}>
                                <Text style={[commonStyles.text_14, { marginLeft: 10, color: 'rgba(24, 144, 255, 1)' }]}>Tạo đơn hàng mới</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '50%' }} disabled={selected === 0}>
                                <Text style={(selected != 0) ? ([commonStyles.text_14, styles.delete_select]) : ([commonStyles.text_14, styles.delete])}>Xóa</Text>
                            </TouchableOpacity>


                        </View>
                    }
                </View>

            )}


            <FBottomSheet
                isVisible={isFBottomSheetQL}
                style={{ height: '60%' }}
                children={
                    <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
                        <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { setFBottomSheerQL(!isFBottomSheetQL) }}>
                                <Out />
                            </TouchableOpacity>

                            <View style={{ width: '75%', marginHorizontal: 20, alignItems: 'center' }}>
                                <TextItem styleName='text_16' fontWeight='700' color='black'>Tài khoản quản lý</TextItem>
                            </View>

                        </View>

                        <View style={{ width: '95%', marginTop: 20 }}>
                            <TextInput

                                activeUnderlineColor='#BFBFBF'
                                placeholder='Tìm kiếm tài khoản quản lý'
                                placeholderTextColor={'#BFBFBF'}
                                // value={pass}
                                left={<TextInput.Icon icon={Search} size={5} />}
                                style={styles.view_input_search}
                            // onChangeText={text => setPass(text)}
                            />
                        </View>
                        <TouchableOpacity style={{ padding: 10 }}>
                            <View style={[{ width: '100%', flexDirection: 'row', alignItems: 'center', marginVertical: 15 }]}>
                                <View style={{ width: '80%' }} >
                                    <Text style={[commonStyles.text_14, { fontWeight: '600' }]}>Tất cả tài khoản</Text>


                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                </View>
                            </View>
                            <Divider />
                        </TouchableOpacity>

                        <FlatList
                            style={{ width: '100%', height: '75%' }}
                            data={data}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={{ padding: 10 }}>
                                    <View style={[{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 5 }]}>
                                        <View style={{ width: '80%' }} >
                                            <Text style={[commonStyles.text_14, { fontWeight: '600' }]}>{item.name}</Text>
                                            <Text style={{ marginVertical: 5 }}>{item.sdt}</Text>
                                        </View>
                                        <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                        </View>
                                    </View>
                                    <Divider />
                                </TouchableOpacity>

                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />



                    </View>}
                closeModal={() => { setFBottomSheerQL(!isFBottomSheetQL) }}
            />
            <FBottomSheet
                isVisible={isFBottomSheetNT}
                style={{ height: '60%' }}
                children={
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Header
                            left={<Out />}
                            right={<TextItem styleName='text_14' fontWeight='400' color='rgba(251, 175, 23, 1)'>Xong</TextItem>}
                        >
                            <TextItem styleName='text_16' fontWeight='700'>Người tạo</TextItem>

                        </Header>

                        <View style={{ width: '95%', marginTop: 5 }}>
                            <TextInput

                                activeUnderlineColor='#BFBFBF'
                                placeholder='Tìm kiếm tài khoản quản lý'
                                placeholderTextColor={'#BFBFBF'}
                                // value={pass}
                                left={<TextInput.Icon icon={Search} size={5} />}
                                style={styles.view_input_search}
                            // onChangeText={text => setPass(text)}
                            />
                        </View>
                        <TouchableOpacity style={{ padding: 10 }}>
                            <View style={[{ width: '100%', flexDirection: 'row', alignItems: 'center', marginVertical: 15 }]}>
                                <View style={{ width: '80%' }} >
                                    <Text style={[commonStyles.text_14, { fontWeight: '600' }]}>Tất cả tài khoản</Text>


                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                </View>
                            </View>
                            <Divider />
                        </TouchableOpacity>

                        <FlatList
                            style={{ width: '100%', height: '75%' }}
                            data={data}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={{ padding: 10 }}>
                                    <View style={[{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 5 }]}>
                                        <View style={{ width: '60%' }} >
                                            <Text style={[commonStyles.text_14, { fontWeight: '600' }]}>{item.name}</Text>
                                            <Text style={{ marginVertical: 5 }}>{item.sdt}</Text>

                                        </View>

                                        <View style={{ width: '40%', alignItems: 'flex-end' }}>
                                            <Checkbox
                                                color='rgba(251, 175, 23, 1)'
                                                uncheckedColor='rgba(232, 232, 232, 1)'
                                                status={checked[index] ? 'checked' : 'unchecked'}
                                                onPress={() => handleChecked(index)
                                                }
                                            />
                                        </View>
                                    </View>
                                    <Divider />
                                </TouchableOpacity>

                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />



                    </View>}
                closeModal={() => { setFBottomSheerNT(!isFBottomSheetNT) }}
            />

        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(243, 243, 243, 1)',

    },

    text: {
        fontSize: 17,
        fontWeight: '900'

    },
    view_input: {
        borderRadius: 10,
        height: 40,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderWidth: 1,
        borderColor: '#F3F3F3'
    },
    borderColor: {
        borderWidth: 1,
        borderColor: 'rgba(251, 175, 23, 1)'
    },
    view_input_search: {
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#F3F3F3',
        height: 35,

    },
    view_default: {
        borderRadius: 10,
        backgroundColor: 'rgba(230, 247, 255, 1)',
        width: '30%',
        alignItems: 'center'
    },
    height: {
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    height1: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    action: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    delete: {
        marginRight: 10,
        textAlign: 'right',
        color: 'rgba(217, 217, 217, 1)'
    },
    delete_select: {
        marginRight: 10,
        textAlign: 'right',
        color: 'rgba(230, 0, 0, 1)'
    },
    view_list_select: {
        padding: 10,
        marginBottom: '21%',
        width: '100%'
    },
    view_list: {
        padding: 10,
        marginBottom: 20,
        width: '100%'
    }


});

export default ListGoods;
