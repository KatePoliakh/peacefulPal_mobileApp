import React from 'react';
 
import { AuthProvider } from './src/context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AppNav from './src/navigation/AppNav';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
    <AppNav />
    </AuthProvider>
  );
}

export default App;
