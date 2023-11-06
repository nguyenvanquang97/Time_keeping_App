/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screen/Login';
import SignUp from './src/Screen/SignUp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import ChooseOrganization from './src/Screen/ChooseOrganization';
import Authenphone from './src/Screen/authentication/Authenphone';
import ForgetPhone from './src/Screen/forgetPassword/ForgetPhone';
import ForgetPhone2 from './src/Screen/forgetPassword/ForgetPhone2';
import ChangePass from './src/Screen/forgetPassword/ChangePass';
import Home from './src/Screen/Home/Home/Home';
import Notification from './src/Screen/Home/Home/Notification';
import PersonalInformation from './src/Screen/Home/User/PersonalInformation';
import EditPersonalInformation from './src/Screen/Home/User/EditPersonalInformation';
import ChangePassWord from './src/Screen/Home/User/ChangePassWord';
import ThietlapIn from './src/Screen/Home/Individual/ThietlapIn';
import NotifacationSetting from './src/Screen/Home/Individual/NotifacationSetting';
import NotifacationAll from './src/Screen/Home/Individual/NotifacationAll';
import StatusDon from './src/Screen/Home/Individual/StatusDon';
import NextDon from './src/Screen/Home/Individual/NextDon';
import RequestCorrection from './src/Screen/Home/Individual/RequestCorrection';
import RequestSupport from './src/Screen/Home/Individual/RequestSupport';
import ListUser from './src/Screen/ManageReceiver/ListUser';
import BlackList from './src/Screen/ManageReceiver/BlackList';
import AddUser from './src/Screen/ManageReceiver/AddUser';
import EditUser from './src/Screen/ManageReceiver/EditUser';
import ListUserSenders from './src/Screen/ManageSenders/ListUserSenders';
import SenderDetails from './src/Screen/ManageSenders/SenderDetails';
import AddDetails from './src/Screen/ManageSenders/AddDetails';
import EditDetails from './src/Screen/ManageSenders/EditDetails';
import PostOfficeService from './src/Screen/ManageSenders/PostOfficeService';
import ListGoods from './src/Screen/CommodityManagement/ListGoods';
import AddGoods from './src/Screen/CommodityManagement/AddGoods';
import Test from './src/Screen/Home/Home/Test';
import CreateOrders from './src/Screen/CreateOrders';
import ManageSender from './src/Screen/ManageSenders/ManageSender';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import allReducers from './redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';


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
  ChangePassWord: undefined,
  ThietlapIn: undefined,
  NotifacationSetting: undefined,
  NotifacationAll: undefined,
  StatusDon: undefined,
  NextDon: undefined,
  RequestCorrection: undefined,
  RequestSupport: undefined,
  ListUser: undefined,
  BlackList: undefined,
  AddUser: undefined,
  EditUser: undefined,
  ListUserSenders: undefined,
  SenderDetails: undefined
  AddDetails: undefined
  EditDetails: undefined
  PostOfficeService: undefined
  ListGoods: undefined
  AddGoods: undefined
  test: undefined
  CreateOrders: undefined,
  ManageSender:undefined
};
const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
function App(): JSX.Element {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent')
  }, []);

  return (
    <Provider store={store}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Login' screenOptions={screenOptions}>
          <RootStack.Screen name='Login' component={Login} />
          <RootStack.Screen name='Sigup' component={SignUp} />
          <RootStack.Screen name='Authenphone' component={Authenphone} />
          <RootStack.Screen name='ForgetPhone' component={ForgetPhone} />
          <RootStack.Screen name='ForgetPhone2' component={ForgetPhone2} />
          <RootStack.Screen name='ChangePass' component={ChangePass} />
          <RootStack.Screen name='Home' component={Home} />
          <RootStack.Screen name='Notification' component={Notification} />
          <RootStack.Screen name='ThietlapIn' component={ThietlapIn} />
          <RootStack.Screen name='PersonalInformation' component={PersonalInformation} />
          <RootStack.Screen name='EditPersonalInformation' component={EditPersonalInformation} />
          <RootStack.Screen name='ChooseOrganization' component={ChooseOrganization} />
          <RootStack.Screen name='NotifacationSetting' component={NotifacationSetting} />
          <RootStack.Screen name='NotifacationAll' component={NotifacationAll} />
          <RootStack.Screen name='ChangePassWord' component={ChangePassWord} />
          <RootStack.Screen name='NextDon' component={NextDon} />
          <RootStack.Screen name='RequestCorrection' component={RequestCorrection} />
          <RootStack.Screen name='RequestSupport' component={RequestSupport} />
          <RootStack.Screen name='ListUser' component={ListUser} />
          <RootStack.Screen name='BlackList' component={BlackList} />
          <RootStack.Screen name='StatusDon' component={StatusDon} />
          <RootStack.Screen name='ManageSender' component={ManageSender} />
          <RootStack.Screen name='AddUser' component={AddUser} />
          <RootStack.Screen name='EditUser' component={EditUser} />
          <RootStack.Screen name='ListUserSenders' component={ListUserSenders} />
          <RootStack.Screen name='SenderDetails' component={SenderDetails} />
          <RootStack.Screen name='AddDetails' component={AddDetails} />
          <RootStack.Screen name='EditDetails' component={EditDetails} />
          <RootStack.Screen name='PostOfficeService' component={PostOfficeService} />
          <RootStack.Screen name='ListGoods' component={ListGoods} />
          <RootStack.Screen name='AddGoods' component={AddGoods} />
          <RootStack.Screen name='test' component={Test} />
          <RootStack.Screen name='CreateOrders' component={CreateOrders} />


        </RootStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
sagaMiddleware.run(rootSaga);
export default App;
