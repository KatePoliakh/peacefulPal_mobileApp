import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartPage from '../screens/StartPage';
import AuthPage from '../screens/enterApp/AuthPage';
import SignUp from '../screens/enterApp/SignUpPage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartPage" component={StartPage} />
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen name="SignUpPage" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
