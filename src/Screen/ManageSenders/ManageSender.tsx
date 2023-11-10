import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import Out from '../../../assets/svg/delete';
import FBottomSheet from '../../components/BottomSheetBar'
import { Divider } from 'react-native-paper';
import { Checkbox } from 'react-native-paper'
import FButton from '../../../component/Button/FButton'
import AdvancedSearch from '../../../assets/svg/advancedSearch'

export default function ManageSender() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { orders, loading, error, orderStatus,filterData} = useSelector((state: any) => state.orderReducer);
    const [collapse, setCollapse] = useState(false);
    const [renderData, setRenderData] = useState([])
    const [codeSearch, setCodeSearch] = useState("")
    const [receiverNameSearch, setReceiverNameSearch] = useState("")
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [checked, setChecked] = useState<boolean[]>([]);
    const dispatch = useDispatch();
    const [statusSearch, setStatusSearch] = useState<any>([])
    const [timer, setTimer] = useState<NodeJS.Timeout>();
    const keySearch = useSelector((state: any) => state.searchReducer);
    const [loadScreen, setLoadScreen] = useState(false);
    const [page, setPage] = useState(0)
    const [isAtEnd, setIsAtEnd] = useState(false);
    useEffect(() => {

        const getOrder = async () => {
            dispatch(getOrderData(codeSearch, statusSearch, keySearch,page))
            dispatch(getAllStatusOrder())
        }

        getOrder();


    }, [])
    useEffect(() => {
        if(codeSearch!==""){
            setRenderData(filterData)
        }
        else{
            setRenderData(orders)
        }
        
    }, [orders,filterData])

    const handleOrgCodeSearch = (text: string) => {
        setCodeSearch(text);
        if (timer) {
            clearTimeout(timer);
        }

        // Bắt đầu một bộ đếm thời gian mới trong 700 mili giây
        const newTimer = setTimeout(() => {
            console.log("search")
            dispatch(getOrderData(text, statusSearch,keySearch,0))
        }, 700);

        setTimer(newTimer);

    }
    const handleReceiverNameSearch = (text: string) => {
        setReceiverNameSearch(text)
    }

    const handleChecked = (value: number) => {
        const updatedChecked = [...checked];

        updatedChecked[value] = !updatedChecked[value];
        setChecked(updatedChecked);
    }
    const handleSearchByStatus = () => {
        const fitlterStatus = checked
            .map((item, index) => (item ? orderStatus[index].orderStatusId : null))
            .filter(item => item !== null);
        setStatusSearch(fitlterStatus)
        setShowBottomSheet(false)
        dispatch(getOrderData(codeSearch, fitlterStatus, keySearch))

    }
    Animatable.initializeRegistryWithDefinitions({
        collapse: {
            0: {
                maxHeight: 500
            },
            1: {
                maxHeight: 0
            },
        },
        expand: {
            0: {
                maxHeight: 0
            },
            1: {
                maxHeight: 500
            },
        },
    });

    const handleReigUpdate = async () => {
        setPage(page + 1)
        dispatch(getOrderData(codeSearch, statusSearch, keySearch,page))
    }

    return (
        <View style={styles.container}>
            <View style={[styles.titleView, { alignItems: 'center' }]}>
                <TouchableOpacity style={{ position: "absolute", left: 16 }} onPress={() => navigation.pop()}>
                    <Cancle />
                </TouchableOpacity>
                <Text style={[commonStyles.text_16, { flex: 1, textAlign: 'center' }]}>Quản lý đơn hàng gửi </Text>
                <View style={{ flexDirection: "row", gap: 16, position: "absolute", right: 16 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("AdvancedSearch") }}>
                        <AdvancedSearch />
                    </TouchableOpacity>
                    <TouchableOpacity style={{}} onPress={() => { }}>
                        <Setting />
                    </TouchableOpacity>
                </View>

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
                <TouchableOpacity onPress={() => setShowBottomSheet(true)}><FText textStyle='ButonText2' color='#1890FF'>Trạng thái đơn hàng </FText></TouchableOpacity>

            </View>
            <FlatList
                data={renderData}
                renderItem={({item,index}:any) => (
                    <View style={styles.item}>
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
                        <Text>{index}</Text>
                    </Animatable.View>

                </View>
                )}
                keyExtractor={(item:any,index) => index.toString()}
                onEndReached={() => {
                    handleReigUpdate();
                }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    loading ? <ActivityIndicator size="large" color="blue" /> : null
                )}
            />
            {/* <ScrollView onScroll={({ nativeEvent }) => {
                if (isCloseToBottom(nativeEvent)) {
                    handleReigUpdate()
                }
            }} scrollEventThrottle={16} contentContainerStyle={{ backgroundColor: COLORS.backgroundGrey_3, padding: 16, gap: 16 }}>
                {loading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="blue" /></View> :
                    <>
                        {renderData?.length <= 0 ? <><Text>Không có đơn hàng nào</Text></> : renderData?.map((item: any, index: any) => (
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
            </ScrollView> */}
            <FBottomSheet
                isVisible={showBottomSheet}
                style={{ height: '85%' }}

                children={
                    <View style={{ width: '100%', height: "100%", alignItems: 'center', padding: 10 }}>

                        <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ position: "absolute" }} onPress={() => { setShowBottomSheet(!showBottomSheet) }}>
                                <Out />
                            </TouchableOpacity>

                            <View style={{ flex: 1, marginHorizontal: 15, alignItems: 'center' }}>
                                <Text style={commonStyles.text_16}>Trạng thái đơn hàng</Text>
                            </View>
                            <TouchableOpacity style={{ position: "absolute", right: 0 }}>
                                <FText textStyle='ButonText2' color={COLORS.PrimaryColor}>Làm mới</FText>
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={{ width: "100%" }}>
                            {orderStatus?.map((item: any, index: any) => (
                                <View key={index} style={{}}>
                                    <Divider style={{ marginVertical: 15 }} />
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <TouchableOpacity style={{ padding: 5, marginLeft: 10 }}>
                                            <FText textStyle='ButonText2' color={COLORS.PrimaryText}>{item.name}</FText>
                                        </TouchableOpacity>
                                        <Checkbox
                                            color='rgba(251, 175, 23, 1)'
                                            uncheckedColor='rgba(232, 232, 232, 1)'
                                            status={checked[index] ? 'checked' : 'unchecked'}
                                            onPress={() => handleChecked(index)}
                                        />
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                        <View style={{ position: "absolute", bottom: 20, width: "100%", alignItems: "center", paddingTop: 10, backgroundColor: COLORS.backgroundWhilte }}>
                            <FButton onPress={() => handleSearchByStatus()} width="90%" title='Áp dụng' backgroundColor={COLORS.PrimaryColor} />
                        </View>


                    </View>}
                closeModal={() => { setShowBottomSheet(!showBottomSheet) }}
            />
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
        paddingHorizontal: 16,
        
    }

})