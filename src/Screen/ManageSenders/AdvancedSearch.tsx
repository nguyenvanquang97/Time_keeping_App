import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS } from '../../../assets/styles/color'
import Setting from '../../../assets/setting'
import commonStyles from '../../style/style'
import Cancle from '../../../assets/svg/cancel'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ScrollView } from 'react-native-gesture-handler'
import FText from '../../../component/Text/FText'
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik'
import { initialValues, ValidationSchema } from '../../../component/TextInput/Validate'
import CustomButton from '../../components/CustomButton'
import FTextInput from '../../../component/TextInput/TextInput'
import { useDispatch, useSelector } from 'react-redux'
import { clearKeySearch, setKeySearch } from '../../../redux/actions/searchAction'
import { RootStackParamList } from '../../../App'
import TextStyle from '../../../assets/styles/TextStyle'
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper';
import { convertDate } from '../../../utils/ConvertDate'
export default function AdvancedSearch() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const keySearch = useSelector((state: any) => state.searchReducer);
    const [range, setRange] = React.useState({ startDate: new Date(), endDate: new Date() });
    const [open, setOpen] = React.useState(false);
    const scrollViewRef = useRef() as any;
    const textRef = useRef() as any;
    const dispatch = useDispatch();

    const handleSubmit = (value: any) => {
        dispatch(setKeySearch(value));
        navigation.replace("ManageSender");
    }
    useEffect(() => {
        dispatch(clearKeySearch())
    }, [])

    const onDismiss = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirm = React.useCallback(
        ({ startDate, endDate }:any) => {
          setOpen(false);
          setRange({ startDate, endDate });
        },
        [setOpen, setRange]
      );
    const scrollToText = (yPosition: any) => {
        if (textRef.current && scrollViewRef.current) {
            textRef.current.measureLayout(
                scrollViewRef.current.getInnerViewNode(),
                (x: any, y: any) => {
                    const absoluteY = y + yPosition;
                    scrollViewRef.current.scrollTo({ y: absoluteY, animated: true });
                }
            );
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={[styles.titleView, { alignItems: 'center' }]}>
                <TouchableOpacity style={{ position: "absolute", left: 16 }} onPress={() => navigation.pop()}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_16, { flex: 1, textAlign: 'center' }]}>Tìm kiếm nâng cao </Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.tap]} onPress={() => { scrollToText(0) }
                }><FText textStyle='ButonText2' color={'#BFBFBF'}  >Thời gian</FText></TouchableOpacity>
                <TouchableOpacity style={[styles.tap]} onPress={() => { scrollToText(70) }
                }><FText textStyle='ButonText2' color={'#BFBFBF'}  >Nơi gửi</FText></TouchableOpacity>
                <TouchableOpacity style={[styles.tap]} onPress={() => { scrollToText(360) }}><FText textStyle='ButonText2' color={'#BFBFBF'}>Nơi nhận</FText></TouchableOpacity>
                <TouchableOpacity style={[styles.tap]} onPress={() => { scrollToText(720) }}><FText textStyle='ButonText2' color={'#BFBFBF'}>Thông tin khác</FText></TouchableOpacity>
            </View>
            <Animatable.View
                duration={400}
            >
                <View style={{ backgroundColor: '#FBAF17', height: 2, width: '25%' }}></View>
            </Animatable.View>

            <ScrollView
                style={{ width: '100%', backgroundColor: '#F3F3F3' }}
                scrollEventThrottle={16}
                ref={scrollViewRef}
            >
                <Formik
                    initialValues={{}}
                    onSubmit={(values) => {
                        console.log(values)
                        
                        // handleSubmit(values);
                    }}
                >
                    {({ handleSubmit,values, isValid, setFieldValue, setValues }) => (
                        <View>
                            <View style={{ paddingHorizontal: 16, backgroundColor: 'white', }}>
                                <Text style={TextStyle.Title3} ref={textRef} >Thời gian</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <TouchableOpacity onPress={() => setOpen(true)} style={{}}>
                                        <FText  textStyle='largetitle'>Từ ngày </FText>
                                        <View>
                                            <FText textStyle='ButonText1'>{convertDate(range.startDate)}</FText>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setOpen(true)} style={{}}>
                                        <FText textStyle='largetitle'>Đến ngày</FText>
                                        <View>
                                            <FText textStyle='ButonText1'>{convertDate(range.endDate)}</FText>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <SafeAreaProvider>
                                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                                        <DatePickerModal
                                            locale="en"
                                            mode="range"
                                            visible={open}
                                            onDismiss={onDismiss}
                                            startDate={range.startDate}
                                            endDate={range.endDate}
                                            onConfirm={onConfirm}
                                        />
                                    </View>
                                </SafeAreaProvider>
                            </View>
                            <View style={{ paddingHorizontal: 16, backgroundColor: 'white', }}>
                                <FText textStyle='Title3' >Nơi gửi</FText>
                                <View style={{}}>
                                    <FTextInput
                                        name='senderValue'
                                        colorLableInput={'#BFBFBF'}
                                        label='Họ tên/SDT người gửi'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='contract'
                                        colorLableInput={'#BFBFBF'}
                                        label='Hợp đồng gửi'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='senderProvinceCode'
                                        colorLableInput={'#BFBFBF'}
                                        label='Tỉnh/TP gửi'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='senderDistrictCode'
                                        colorLableInput={'#BFBFBF'}
                                        label='Quận/Huyện gửi'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='senderCommuneCode'
                                        colorLableInput={'#BFBFBF'}
                                        label='Phường/Xã gửi'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                </View>
                            </View>

                            <View style={{ paddingHorizontal: 16, backgroundColor: 'white', marginVertical: 10 }}>
                                <FText textStyle='Title3'>Nơi nhận</FText>
                                <View style={{}}>
                                    <FTextInput
                                        name='contractC'
                                        colorLableInput={'#BFBFBF'}
                                        label='Hợp đồng C'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='receiverprovinceCode'
                                        colorLableInput={'#BFBFBF'}
                                        label='Tỉnh/TP nhận'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='receiverDistrictCode'
                                        colorLableInput={'#BFBFBF'}
                                        label='Quận/Huyện nhận'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='receiverCommuneCode'
                                        colorLableInput={'#BFBFBF'}
                                        label='Phường/Xã nhận'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                </View>
                            </View>



                            <View style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
                                <FText textStyle='Title3'>Thông tin khác</FText>
                                <View>
                                    <FTextInput
                                        name='batchCode'
                                        colorLableInput={'#BFBFBF'}
                                        label='Mã lô vận đơn'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='owner'
                                        colorLableInput={'#BFBFBF'}
                                        label='Tài khoản quản lý'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='createdBy'
                                        colorLableInput={'#BFBFBF'}
                                        label='Người tạo'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='abc1'
                                        colorLableInput={'#BFBFBF'}
                                        label='Chi nhánh'
                                        colorLableOutput={'#BFBFBF'}
                                    />

                                    <FTextInput
                                        name='abc2'
                                        colorLableInput={'#BFBFBF'}
                                        label='Người trả cước'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='abc3'
                                        colorLableInput={'#BFBFBF'}
                                        label='Đơn hàng có thu tiền COD'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='abc4'
                                        colorLableInput={'#BFBFBF'}
                                        label='Đơn hàng có hiệu chỉnh'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                    <FTextInput
                                        name='abc5'
                                        colorLableInput={'#BFBFBF'}
                                        label='My VietnamPost'
                                        colorLableOutput={'#BFBFBF'}
                                    />

                                    <FTextInput
                                        name='abc6'
                                        colorLableInput={'#BFBFBF'}
                                        label='Kênh tạo'
                                        colorLableOutput={'#BFBFBF'}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', marginVertical: 20, gap: 8, paddingHorizontal: 16 }}>
                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                                        dispatch(clearKeySearch());
                                        setValues("")
                                    }}>
                                        <CustomButton
                                            name='Làm mới'

                                            backgroundColor='#F3F3F3'
                                            textColor='#8C8C8C'
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                                        setFieldValue("toDateFromDate",[convertDate(range.startDate),convertDate(range.endDate)])
                                        handleSubmit()}}>
                                        <CustomButton
                                            name='Áp dụng '

                                            backgroundColor='#FBAF17'
                                            textColor='#FFFFFF'

                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>



                    )}
                </Formik>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 44,
        backgroundColor: COLORS.backgroundWhilte
    },
    titleView: {
        height: 48,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 16
    },
    tap: {
        alignItems: 'center',
        flex: 1,
        paddingVertical: 13,

    },

})

// import React, { Component, useEffect, useState, useRef } from 'react';
// import { View, StyleSheet, KeyboardAvoidingView, Platform, Text, TouchableOpacity, ScrollView } from 'react-native';
// import ListTitle from '../../component/ListTitle/listTitle';
// import Cancel from '../../component/svg/cancel';
// import FText from '../../component/FText';
// import CBSwicht from '../../component/Swicht/CBSwicht';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../App';
// import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
// import { ValidationSchema, initialValues } from '../../component/TextInput/Validate';
// import FTextInput from '../../component/TextInput/TextInput';
// import CustomButton from '../../component/Button/CustomButton';
// import * as Animatable from 'react-native-animatable';
// export default function FindAdvanced() {

//     const scrollViewRef = useRef();
//     const textRef = useRef();
//     const [currentScrollY, setCurrentScrollY] = useState(0);
//     const [highlighted, setHighlighted] = useState(false);
//     const [highlighted2, setHighlighted2] = useState(false);




//     const scrollToText = (yPosition) => {
//         if (textRef.current && scrollViewRef.current) {
//             textRef.current.measureLayout(
//                 scrollViewRef.current.getInnerViewNode(),
//                 (x, y) => {
//                     const absoluteY = y + yPosition;
//                     scrollViewRef.current.scrollTo({ y: absoluteY, animated: true });
//                 }
//             );
//         }
//     };

//     const handleScroll = (event) => {

//         const { y } = event.nativeEvent.contentOffset;

//         setCurrentScrollY(y);
//         if (y >= 280 && y < 500) {
//             setHighlighted(true);
//             setHighlighted2(false);
//         } else if (y < 200) {
//             setHighlighted(false);
//             setHighlighted2(false)
//         } else if (y > 500) {
//             setHighlighted2(true)
//             setHighlighted(false);
//         }

//     };
//     console.log(1, highlighted);
//     console.log(2, highlighted2);
//     Animatable.initializeRegistryWithDefinitions({
//         right: {
//             0: {
//                 translateX: highlighted2 ? 140 : 0
//             },
//             1: {
//                 translateX: highlighted2 ? 272 : 140
//             },
//         },
//         left: {
//             0: {
//                 translateX: !highlighted2 ? 140 : 272
//             },
//             1: {
//                 translateX: highlighted && !highlighted2 ? 140 : 0
//             },
//         },
//     });

//     return (
//         <View style={{ flex: 1, backgroundColor: 'white' }}>
//             <View style={{ width: '100%' }}>
//                 <ListTitle
//                     mode={2}
//                     drive={true}
//                     contentTitle={<FText textStyle='Title3'>Tìm kiếm nâng cao</FText>}
//                     childrenLeft={<View style={{ marginLeft: 10 }}><TouchableOpacity onPress={() => { navigation.goBack() }}><Cancel /></TouchableOpacity></View>}
//                 />
//             </View >
//             <View style={{ width: '100%', flexDirection: 'row' }}>
//                 <TouchableOpacity style={[styles.tap]} onPress={() => scrollToText(0)

//                 }><FText textStyle='ButonText2' color={!highlighted && !highlighted2 ? '#FBAF17' : '#BFBFBF'}  >Nơi gửi</FText></TouchableOpacity>
//                 <TouchableOpacity style={[styles.tap]} onPress={() => scrollToText(420)}><FText textStyle='ButonText2' color={highlighted ? '#FBAF17' : '#BFBFBF'}>Nơi nhận</FText></TouchableOpacity>
//                 <TouchableOpacity style={[styles.tap]} onPress={() => scrollToText(720)}><FText textStyle='BustonText2' color={highlighted2 ? '#FBAF17' : '#BFBFBF'}>Thông tin khác</FText></TouchableOpacity>
//             </View>
//             <Animatable.View
//                 duration={400}
//                 animation={highlighted || highlighted2 ? 'right' : 'left'}
//             >
//                 <View style={{ backgroundColor: '#FBAF17', height: 2, width: '33%' }}></View>
//             </Animatable.View>

//             <ScrollView
//                 style={{ width: '100%', backgroundColor: '#F3F3F3' }}
//                 ref={scrollViewRef}
//                 onScroll={handleScroll}
//                 scrollEventThrottle={16}
//             >
//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={ValidationSchema}
//                     onSubmit={(values) => {
//                         handleLogin(values.phoneNumber, values.password)
//                         navigation.navigate('home')
//                         console.log(values);
//                     }}
//                 >
//                     {({ handleSubmit, isValid, setFieldValue }) => (
//                         <View>
//                             <View style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
//                                 <Text style={{ margin: 10 }} ref={textRef}>Nơi gửi</Text>
//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />


//                             </View>

//                             <View style={{ paddingHorizontal: 10, backgroundColor: 'white', marginVertical: 10 }}>
//                                 <FText textStyle='Title3'>Nơi nhận</FText>
//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                             </View>



//                             <View style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
//                                 <FText textStyle='Title3'>Thông tin khác</FText>
//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />

//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />

//                                 <FTextInput
//                                     name='phoneNumber'
//                                     colorLableInput={'#BFBFBF'}
//                                     label='So dien thoai'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <FTextInput
//                                     name=''
//                                     colorLableInput={'#BFBFBF'}
//                                     label='Mat khau'
//                                     colorLableOutput={'#BFBFBF'}
//                                 />
//                                 <View style={{ flexDirection: 'row', marginVertical: 20 }}>
//                                     <CustomButton
//                                         title='Làm mới'
//                                         style={{ flex: 1, marginRight: 10 }}
//                                         backgroundColor='#F3F3F3'
//                                         labelColor='#8C8C8C'
//                                     />

//                                     <CustomButton
//                                         title='Áp dụng '
//                                         style={{ flex: 1 }}
//                                         backgroundColor='#FBAF17'
//                                         labelColor='#FFFFFF'
//                                     />
//                                 </View>
//                             </View>


//                         </View>



//                     )}
//                 </Formik>
//             </ScrollView>
//         </View >

//     );
// }
// const styles = StyleSheet.create({
//     item: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         paddingVertical: 16,
//         paddingHorizontal: 8,
//         borderColor: '#F3F3F3',
//         borderBottomWidth: 1
//     },
//     tap: {
//         alignItems: 'center',
//         flex: 1,
//         paddingVertical: 13
//     },


// });



