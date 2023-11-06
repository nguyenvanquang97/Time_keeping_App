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

import TextItem from '../../components/TextItem';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import IconSelected from '../../../assets/svg/iconSelected';


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



function PostOfficeService(): JSX.Element {
    const [checked, setChecked] = React.useState<boolean[]>([]);
    const [selectAll, setSelectAll] = React.useState(false);
    const [select, setSelect] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const [quanli, setQuanli] = useState('Tất cả')
    const [isFBottomSheetQL, setFBottomSheerQL] = useState(false);
    const [isFBottomSheetNT, setFBottomSheerNT] = useState(false);
    const [selected, setSelected] = useState<Number>(0)
    const [selectedItemIndex, setSelectedItemIndex] = useState<Number>();

    const handleObjectClick = (value: Number) => {
        setSelectedItemIndex(value);
    };



    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 1)', alignItems: 'center' }]}>

                <Header
                    left={<Cancle />}

                    onPressLeft={() => navigation.goBack()}

                >
                    <TextItem styleName='text_16' fontWeight='700' color='black' >Bưu cục phục vụ</TextItem>
                </Header>

            </View>

            <View style={[{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)' }]}>
                <View style={{ width: '90%', paddingBottom: 10 }}>
                    <TextInput
                        activeUnderlineColor='#BFBFBF'
                        underlineColorAndroid={'#BFBFBF'}
                        placeholder='Nhập mã bưu cục'
                        style={styles.view_input}
                        placeholderTextColor={'rgba(191, 191, 191, 1)'}
                        left={<TextInput.Icon icon={Search} />}
                    />

                    <View style={{ width: '100%', marginTop: 10, flexDirection: 'row' }}>
                        <ButtonIcon
                            style={{ width: '35%', borderColor: 'rgba(243, 243, 243, 1)', }}
                            title='Tỉnh/thành phố'
                            iconRight={Popup}
                            onPress={() => { setFBottomSheerQL(!isFBottomSheetQL) }}
                        />

                        <ButtonIcon
                            style={{ width: '30%', borderColor: 'rgba(243, 243, 243, 1)', marginHorizontal: 5 }}
                            title='Quận huyện:'
                            onPress={() => setFBottomSheerNT(!isFBottomSheetNT)}

                            iconRight={Popup}
                        />

                        <ButtonIcon
                            style={{ width: '30%', borderColor: 'rgba(243, 243, 243, 1)' }}
                            title='Quận huyện:'
                            onPress={() => setFBottomSheerNT(!isFBottomSheetNT)}

                            iconRight={Popup}
                        />
                    </View>


                </View>
            </View>
            <View style={{ width: '100%', height: '70%' }}>
                <FlatList
                    style={{ padding: 10, marginBottom: 10, width: '100%' }}
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => {
                            console.log(item);

                            handleObjectClick(index)
                        }}

                            style={[selectedItemIndex === index && styles.borderColor, { width: '100%', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)', padding: 20, marginBottom: 10, borderRadius: 10 }]}>
                            <View style={{ width: '85%' }} >
                                <TextItem styleName='text_16' fontWeight='700' color='black'>{item.name}</TextItem>
                                <View style={{ marginVertical: 10 }}>
                                    <TextItem styleName='text_14'>{item.sdt}</TextItem>
                                </View>

                                <TextItem styleName='text_14'>{item.dress}</TextItem>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                                {selectedItemIndex === index && <IconSelected />}

                            </View>

                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}

                />
            </View>
            <View style={{ width: '100%', backgroundColor: 'white', height: '10%', alignItems: 'center', padding: 5 }}>
                <TouchableOpacity style={{ width: "80%", marginRight: 8 }} >
                    <CustomButton
                        textColor='rgba(255, 255, 255, 1)'
                        width={'100%'}
                        name='Chọn bưu cục này'
                        backgroundColor='rgba(251, 175, 23, 1)'
                    />
                </TouchableOpacity>

            </View>



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
                                <TextItem styleName='text_16' fontWeight='700' color='black'>Tài khoản quản lí</TextItem>
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
                                    <TextItem styleName='text_14' fontWeight='600'>Tất cả tài khoản</TextItem>
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


});

export default PostOfficeService;
