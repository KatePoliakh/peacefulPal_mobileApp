import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import AuthPage from '../screens/AuthPage';
import SignUp from '../screens/SignUpPage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartPage" component={StartPage} />
      <Stack.Screen name="AuthPage" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
