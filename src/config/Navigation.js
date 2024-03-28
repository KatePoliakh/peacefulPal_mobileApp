import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Startpage from "../screens/StartPage";
import AuthPage  from "../screens/enterApp/AuthPage";

const MainStack = createStackNavigator()
const MainStackScreen = () => (
  <MainStack.Navigator >
    <MainStack.Screen name="StartPage" component={Startpage} options={{headerShown:false}}/>
    <MainStack.Screen name="AuthPage" component={AuthPage} />
  </MainStack.Navigator>
)

const Navigation = () => (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
  
export default Navigation;