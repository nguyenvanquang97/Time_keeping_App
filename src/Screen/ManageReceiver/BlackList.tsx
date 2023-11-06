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
import { configureLayoutAnimations } from 'react-native-reanimated';
import { tr } from 'react-native-paper-dates';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import FBottomSheet from '../../components/BottomSheetBar';
import Out from '../../../assets/svg/delete';
import Restore from '../../../assets/svg/Restore';
import Header from '../../components/Header';
import TextItem from '../../components/TextItem';

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

interface MyList {
    id: number,
    name: string,
    sdt: string,
    dress: string
}

const data: MyList[] = [
    { id: 1, name: 'Trần thái linh', sdt: '0346148532', dress: '23 Minh Khai, Hai Bà Trưng, Hà Nội' },
    { id: 2, name: 'Trần thái linh', sdt: '0346148532', dress: '23 Minh Khai, Hai Bà Trưng, Hà Nội' },
    { id: 3, name: 'Trần thái linh', sdt: '0346148532', dress: '23 Minh Khai, Hai Bà Trưng, Hà Nội' },
    { id: 4, name: 'Trần thái linh', sdt: '0346148532', dress: '23 Minh Khai, Hai Bà Trưng, Hà Nội' },
    { id: 5, name: 'Trần thái lin', sdt: '0346148532', dress: '23 Minh Khai, Hai Bà Trưng, Hà Nội' },
    { id: 6, name: 'Trần thái lin', sdt: '0346148532', dress: '23 Minh Khai, Hai Bà Trưng, Hà Nội' },

];


const RootStack = createStackNavigator<RootStackParamList>();
function BlackList(): JSX.Element {
    const [checked, setChecked] = React.useState<boolean[]>([]);
    const [selectAll, setSelectAll] = React.useState(false);
    const [select, setSelect] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const [quanli, setQuanli] = useState('Tôi')
    const [selected, setSelected] = useState<Number>(0)
    const [isFBottomSheet, setFBottomSheer] = useState(false);

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
    const actionLeft = () => {
        if (select) {
            setSelect(!select)
            setSelectAll(false)
            const updatedChecked = data.map(item => false);
            setChecked(updatedChecked);
        } else {
            navigation.goBack();
        }
    }


    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 1)', alignItems: 'center' }]}>

                <Header
                    left={<View>{(!select) ? (<Cancle />) : (<TextItem styleName='text_14' fontWeight='400' color='rgba(24, 144, 255, 1)' >Xong</TextItem>)}</View>}
                    onPressLeft={() => { actionLeft() }}

                >
                    <TextItem styleName='text_16' fontWeight='700' color='black' >Danh sách đen</TextItem>
                </Header>

            </View>
            <View style={[{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)', height: 150 }]}>
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
                            style={{ width: '45%', borderColor: 'rgba(243, 243, 243, 1)', }}
                            title='Tài khoản quản lý:'
                            addtitle={quanli}
                            iconRight={Popup}
                            onPress={() => { setFBottomSheer(!isFBottomSheet) }}
                        />

                        <ButtonIcon
                            style={{ width: '35%', borderColor: 'rgba(243, 243, 243, 1)', marginHorizontal: 10 }}
                            title='Người tạo:'
                            addtitle={quanli}
                            iconRight={Popup}
                        />
                    </View>
                    {(!select) ? (
                        <View style={{ width: '100%', flexDirection: 'row' }}>

                            <TouchableOpacity onPress={() => { setSelect(!select) }} style={{ width: '50%' }} ><Text style={[commonStyles.text_14, { width: '100%', textAlign: 'left', color: 'rgba(24, 144, 255, 1)', fontWeight: '600' }]}>{!isOn && 'Chọn người nhận'}</Text></TouchableOpacity>



                        </View>
                    ) : (
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <View style={{ width: '50%', justifyContent: 'center' }}>
                                <TextItem styleName='text_14'>  {(selected != 0) ? ('đã chọn ' + selected + ' người nhận') : ('Chưa chọn người nhận nào')} </TextItem>
                            </View>
                            <View style={{ width: '50%', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                                <TextItem styleName='text_14'>Chọn tất cả</TextItem>
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
                    <List0 />
                    <Text style={[commonStyles.text_14, { fontWeight: '400' }]}>Chưa có thông tin người nhận</Text>
                    <ButtonIcon
                        iconLeft={IconAdd2}
                        title='Thêm người nhận'
                        style={{ width: 200, justifyContent: 'center', backgroundColor: 'rgba(0, 69, 136, 1)', marginVertical: 20 }}
                        styleText={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center' }}
                    />
                </View>
            ) : (
                <View style={{ position: 'relative', height: '72%' }}>
                    <FlatList
                        style={{ padding: 10, marginBottom: 10, width: '100%' }}
                        data={data}
                        renderItem={({ item, index }) => (
                            <View style={[checked[index] && styles.borderColor, { width: '100%', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)', padding: 15, marginBottom: 10, borderRadius: 10 }]}>
                                <View style={{ width: '50%', justifyContent: 'center' }}>
                                    <Text style={[commonStyles.text_14, {}]}>{item.sdt}</Text>
                                </View>
                                {(!select) ? (
                                    <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <TouchableOpacity style={{ marginHorizontal: 5 }}><Restore /></TouchableOpacity>
                                        <TouchableOpacity style={{ marginHorizontal: 10 }}><IconEdit /></TouchableOpacity>
                                        <TouchableOpacity style={{ marginHorizontal: 5 }}><IconDelete /></TouchableOpacity>
                                    </View>
                                ) : (
                                    <View style={{ width: '50%', alignItems: 'flex-end', height: 24, justifyContent: 'center' }}>
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
                                <Text style={[commonStyles.text_14, { marginLeft: 10, color: 'rgba(24, 144, 255, 1)' }]}>Khôi phục</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '50%' }} disabled={selected === 0}>
                                <Text style={(selected != 0) ? ([commonStyles.text_14, styles.delete_select]) : ([commonStyles.text_14, styles.delete])}>Xóa</Text>
                            </TouchableOpacity>


                        </View>
                    }
                </View>

            )}

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
    action: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '15%',
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
    }

});

export default BlackList;
