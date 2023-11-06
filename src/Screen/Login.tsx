/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
import commonStyles from '../style/style';
import CustomButton from '../components/CustomButton';
import Capcha from '../../assets/svg/capcha';
import { Divider, TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import capcha from '../../assets/svg/capcha';
import eye_slash from '../../assets/svg/eye-slash';
import One from '../../assets/svg/login/1';
import Hai from '../../assets/svg/login/2';
import Three from '../../assets/svg/login/3';
import Bon from '../../assets/svg/login/4';
import Five from '../../assets/svg/login/5';
import Six from '../../assets/svg/login/6';
import Seven from '../../assets/svg/login/7';
import Eat from '../../assets/svg/login/8';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import FBottomSheet from '../components/BottomSheetBar';
import Out from '../../assets/svg/delete';
import accountApi from '../../redux/api/accountApi';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/accountAction';

function Login(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch=useDispatch();

  const data = [
    'Ưu đãi',
    'Tra cứu cước',
    'Tra cứu bưu cục phục vụ',
    'Tin tức',
    'Quy định chính sách',
    'Câu hỏi thường gặp',
    'Hướng dẫn sử dụng',
    'Thông tin liên hệ',

  ];

  const [email, setEmail] = React.useState("");

  const [pass, setPass] = React.useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const [isFBottomSheet, setFBottomSheer] = useState(false);
  useEffect(()=>{
    // dispatch(login("111","xxx"))
  },[])
  const handleLogin=async ()=>{
    // const res=await accountApi.login("0977050159","Abc@123456789");
    // console.log(res);
    navigation.navigate('ChooseOrganization')
  }
  useEffect(() => {
    if (__DEV__) {
      setEmail("0977050159");
      setPass("Abc@123456789");
    }
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={[commonStyles.view_alignItem, { marginBottom: 8, marginTop: 30 }]} >

          <Text style={commonStyles.text_20}>Đăng nhập</Text>
        </View>

        <View style={commonStyles.view_alignItem} >
          <Text style={[commonStyles.text_14, { color: 'rgba(140, 140, 140, 1)' }]}>Bạn chưa có tài khoản? <Text onPress={() => navigation.navigate("Sigup")} style={{ color: 'rgba(24, 144, 255, 1)' }}>Đăng kí ngay</Text></Text>
        </View>

        <View style={{ width: '100%', height: '30%', marginVertical: 4, alignItems: 'center' }}>
          <View style={{ width: '90%', marginVertical: 10 }}>
            <TextInput
              activeUnderlineColor='#BFBFBF'
              underlineColorAndroid={'#BFBFBF'}
              label="Số điện thoại/Email"
              value={email}
              style={styles.view_input}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={{ width: '90%', marginVertical: 10 }}>
            <TextInput
              activeUnderlineColor='#BFBFBF'
              label="Mật khẩu"
              value={pass}
              style={styles.view_input}
              onChangeText={text => setPass(text)}
              secureTextEntry={!isPasswordVisible}
              right={<TextInput.Icon icon={isPasswordVisible ? 'eye' : eye_slash} size={18} onPress={() => { setIsPasswordVisible(!isPasswordVisible); }} />}
            />
          </View>
          <TouchableOpacity onPress={() => { setFBottomSheer(!isFBottomSheet) }} style={{ width: '90%', alignItems: 'flex-end', marginTop: 10 }}>
            <Text style={commonStyles.text_14}><Text style={{ color: 'rgba(24, 144, 255, 1)' }}>Quên mật khẩu</Text></Text>
          </TouchableOpacity>


        </View>

        <TouchableOpacity onPress={() => { handleLogin() }} style={[commonStyles.view_alignItem, { marginBottom: 8 }]}>

          <CustomButton
            textColor='rgba(255, 255, 255, 1)'
            name='Đăng nhập'
            backgroundColor='rgba(251, 175, 23, 1)'
          />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginVertical: 15, width: '100%' }}>
          <View style={{ width: '20%' }}>

            <View style={styles.shadow}>
              <Capcha />
            </View>

          </View>

          <View style={{ width: '60%', alignItems: 'center' }}>
            <Text style={[commonStyles.text_14, { color: '#595959', marginBottom: 8 }]}>Hoặc đăng nhập với</Text>
            <CustomButton
              textColor='#004588'
              name='POST ID'
              width={"90%"}
              backgroundColor='#EEF4FB'
            />
          </View>
        </View>
        <View style={styles.view_button}>
          <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.icon_buton}>
              <One />
            </View>
            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Ưu đãi</Text>
          </View>

          <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.icon_buton}>
              <Hai />
            </View>
            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Tra cứu cước</Text>
          </View>

          <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.icon_buton}>
              <Three />
            </View>
            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Tra cứu bưu cục phục vụ</Text>
          </View>

          <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.icon_buton}>
              <Bon />
            </View>
            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Tin tức</Text>
          </View>

        </View>

        <View style={styles.view_button}>

          <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.icon_buton}>
              <Five />
            </View>
            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Quy định chính sách</Text>
          </View>

          <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.icon_buton}>
              <Six />
            </View>
            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Câu hỏi thường gặp</Text>
          </View>

          <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.icon_buton}>
              <Seven />
            </View>
            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Hướng dẫn sử dụng</Text>
          </View>

          <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.icon_buton}>
              <Eat />
            </View>
            <Text style={[commonStyles.text_14, styles.text_icon_button]}>Thông tin liên hệ</Text>
          </View>

        </View>




      </SafeAreaView>

      <FBottomSheet
        isVisible={isFBottomSheet}
        style={{ height: '35%' }}
        children={
          <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { setFBottomSheer(!isFBottomSheet) }}>
                <Out />
              </TouchableOpacity>
              <View style={{ width: '80%', marginHorizontal: 20, alignItems: 'center' }}>
                <Text style={commonStyles.text_16}>Chọn hình thức xác thực</Text>
              </View>
            </View>

            <View style={{ width: '100%', marginVertical: 15 }}>
              <Divider />

              <View style={{ width: '100%', paddingTop: 20, paddingLeft: 20 }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                  <Text style={[commonStyles.text_16, { fontWeight: '400' }]}>Xác thực qua số điện thoại</Text>
                </View>


                <View style={{ flexDirection: 'row', width: '100%', marginTop: 30 }}>
                  <Text style={[commonStyles.text_16, { fontWeight: '400' }]}>Xác thực qua số điện thoại</Text>
                </View>



              </View>
              <View style={[commonStyles.view_alignItem, { marginVertical: 20 }]}>
                <TouchableOpacity style={commonStyles.view_alignItem} onPress={() => { navigation.navigate('ForgetPhone') }}>
                  <CustomButton
                    textColor='rgba(255, 255, 255, 1)'
                    name='Tiếp tục'
                    backgroundColor='rgba(251, 175, 23, 1)'
                  />
                </TouchableOpacity>
              </View>

            </View>


          </View>}
        closeModal={() => { setFBottomSheer(!isFBottomSheet) }}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexGrow: 1,
  },
  shadow: {
    shadowColor: '#000', // Màu đổ bóng
    shadowOffset: { width: 3, height: 6 }, // Độ dịch chuyển đổ bóng
    shadowOpacity: 0.3, // Độ mờ của đổ bóng
    elevation: 5, // (Android) Độ nâng của đổ bóng
    backgroundColor: '#fff',
  },
  view_input: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,

    borderColor: '#F3F3F3'
  },
  icon_buton: {
    width: 45,
    marginHorizontal: 13,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 60,
    backgroundColor: '#F3F3F3'
  },
  view_button: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 15
  },
  text_icon_button: {
    marginTop: 5,
    width: '85%',
    textAlign: 'center'
  }

});

export default Login;
