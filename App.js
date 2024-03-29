import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Startpage from './src/screens/StartPage';

//import AuthStack from './src/navigation/AuthStack';

import AuthPage from './src/screens/enterApp/AuthPage';
import HomePage from './src/screens/HomePage';
import AuthStack from './src/navigation/AuthStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
}

export default App;