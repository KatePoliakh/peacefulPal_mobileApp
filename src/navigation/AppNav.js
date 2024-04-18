import React, { useContext } from 'react';
import {View, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../context/AuthContext';
import { ModalPortal } from 'react-native-modals';

const AppNav = () => {
const {isLoading, userToken} = useContext(AuthContext);
if (isLoading) {
    return (
        <View style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'}/>
    </View>
    );
}
  return (
    <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
        <ModalPortal />
    </NavigationContainer>
  );
}
export default AppNav;