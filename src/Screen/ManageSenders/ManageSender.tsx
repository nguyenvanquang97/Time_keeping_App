import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ViewRowOnpress from '../../components/ListTileVIew'
import Cancle from '../../../assets/svg/cancel'
import Setting from '../../../assets/setting'
import commonStyles from '../../style/style'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import SearchBar from '../../components/SearchBar'
import orderApi from '../../../redux/api/orderApi'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStatusOrder, getOrderData } from '../../../redux/actions/orderAction'
import { COLORS } from '../../../assets/styles/color'
import FText from '../../../component/Text/FText'
import ListTitle from '../../../component/ListTitle/ListTitle'
import * as Animatable from 'react-native-animatable';

export default function ManageSender() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { orders, loading, error,orderStatus } = useSelector((state: any) => state.orderReducer);
    const [collapse, setCollapse] = useState(false);
    const [renderData,setRenderData]=useState([])
    const [codeSearch,setCodeSearch]=useState("")
    const [receiverNameSearch,setReceiverNameSearch]=useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        const getOrder = async () => {
            dispatch(getOrderData(codeSearch))
            dispatch(getAllStatusOrder())
        }
        getOrder();
    }, [])
    useEffect(()=>{
        setRenderData(orders)
    },[orders])
    useEffect(()=>{
        dispatch(getOrderData(codeSearch))
    },[codeSearch])
    const handleOrgCodeSearch = (text: string) => {
        setCodeSearch(text)
      }
      const handleReceiverNameSearch = (text: string) => {
        setReceiverNameSearch(text)
      }

    Animatable.initializeRegistryWithDefinitions({
        collapse: {
            0: {
                maxHeight:500
            },
            1: {
                maxHeight:0
            },
        },
        expand: {
            0: {
                maxHeight:0
            },
            1: {
                maxHeight:500
            },
        },
    });
    console.log(orders)
    return (
        <View style={styles.container}>
            <View style={[styles.titleView, { alignItems: 'center' }]}>
                <TouchableOpacity style={{}} onPress={() => navigation.pop()}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_16, { flex: 1, textAlign: 'center' }]}>Quản lý đơn hàng gửi </Text>
                <TouchableOpacity style={{}} onPress={() => { }}>
                    <Setting />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 16, gap: 12 }}>
                <View style={{ flex: 1 }}>
                    <SearchBar text={codeSearch} handleChangText={handleOrgCodeSearch} placeholder='Vận đơn/Đơn hàng' />
                </View>
                <View style={{ flex: 1 }}>
                    <SearchBar text={receiverNameSearch} handleChangText={handleReceiverNameSearch} placeholder='Người nhận' />
                </View>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16 }}>
                <TouchableOpacity><FText textStyle='ButonText2' color='#1890FF'>Chọn đơn hàng </FText></TouchableOpacity>
                <TouchableOpacity><FText textStyle='ButonText2' color='#1890FF'>Xem đơn hàng trong ngày </FText></TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16, backgroundColor: COLORS.backgroundGrey_3, width: "100%" }}>
                <TouchableOpacity onPress={() => setCollapse(!collapse)}><FText textStyle='ButonText2' color='#1890FF'>Thu gọn </FText></TouchableOpacity>
                <TouchableOpacity><FText textStyle='ButonText2' color='#1890FF'>Trạng thái đơn hàng </FText></TouchableOpacity>

            </View>
            <ScrollView contentContainerStyle={{ backgroundColor: COLORS.backgroundGrey_3, padding: 16, gap: 16 }}>
                {loading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="blue" /></View> : <>
                    {renderData?.map((item: any, index: any) => (
                        <View style={styles.item} key={index}>
                            <View style={{ flexDirection: "row", height: 48, width: "100%", alignItems: "center", gap: 8 }}>
                                <View style={styles.statusItem}>
                                    <FText color={item.statusName === "Đã tạo" ? "#8DC63F" : "#8C8C8C"} textStyle='ButonText3'>{item.statusName}</FText>
                                </View>
                                <View style={styles.statusItem}>
                                    <FText color={item.isPrinted === true ? "#8DC63F" : "#8C8C8C"} textStyle='ButonText3'>{item.isPrinted === true ? "Đã" : "Chưa"} in</FText>
                                </View>
                            </View>
                            <FText color={COLORS.Title} textStyle='Title3'>
                                {item.itemCode}
                            </FText>
                            <FText style={{ marginTop: 33 }} color={COLORS.PrimaryText} textStyle='Subtitle3'>
                                Ngày thực hiện:{item.createdDate}
                            </FText>
                            <Animatable.View animation={collapse ? 'collapse' : 'expand'} 
                                duration={400} >
                                <View style={styles.lineText}>
                                    <FText color={COLORS.SecondaryText} textStyle='BodyText2'>Người nhận</FText>
                                    <FText color={COLORS.Title} textStyle='BodyText2'>{item.receiverName}</FText>
                                </View>
                                <View style={styles.lineText}>
                                    <FText color={COLORS.SecondaryText} textStyle='BodyText2'>Người tạo</FText>
                                    <FText color={COLORS.Title} textStyle='BodyText2'>{item.createdName}</FText>
                                </View>
                                <View style={styles.lineText}>
                                    <FText color={COLORS.SecondaryText} textStyle='BodyText2'>Mã đơn hàng</FText>
                                    <FText color={COLORS.Title} textStyle='BodyText2'>{item.itemCode}</FText>
                                </View>
                                <View style={styles.lineText}>
                                    <FText color={COLORS.SecondaryText} textStyle='BodyText2'>Người ủy quyền</FText>
                                    <FText color={COLORS.Title} textStyle='BodyText2'>{item.ownerName}</FText>
                                </View>
                                <View style={styles.lineText}>
                                    <FText color={COLORS.SecondaryText} textStyle='BodyText2'>Tiền COD</FText>
                                    <FText color={COLORS.InforPrimary} textStyle='BodyText2'>{item.codAmount}</FText>
                                </View>
                                <View style={styles.lineText}>
                                    <FText color={COLORS.SecondaryText} textStyle='BodyText2'>Tổng cước</FText>
                                    <FText color={COLORS.InforPrimary} textStyle='BodyText2'>{item.totalFee}</FText>
                                </View>
                            </Animatable.View>

                        </View>
                    ))}
                </>}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    lineText: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
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
    statusItem: {
        backgroundColor: COLORS.SuccessPrimaryTagBackground,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 24
    },
    orderItem: {

    },
    item: {
        backgroundColor: COLORS.backgroundWhilte,
        borderRadius: 8,
        paddingHorizontal: 16
    }

})