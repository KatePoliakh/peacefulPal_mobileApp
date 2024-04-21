import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomePage from '../screens/HomePage';
import HabitTracker from '../screens/bottomTab/HabitTracker';
import colors from '../constants/colors';
import Icon from "react-native-vector-icons/FontAwesome";
import JournalScreen from '../screens/mainFeatures/Journaling/JournalScreen';
import {RFValue} from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      
      
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: colors.startPageBg},
        tabBarInactiveTintColor: colors.grey,
        tabBarActiveTintColor: colors.BottomButton,
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: colors.startPageBg,
          },
          tabBarIcon: ({color, size}) => (
              <Icon name="home" size={RFValue(20)} color={colors.BottomButton} />
          ),
        })}
      />
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          //tabBarBadge: 3,
          //tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
              <Icon name="pencil" size={RFValue(20)} color={colors.BottomButton} />

          ),
        }}
      />
      <Tab.Screen
        name="HabitTracker"
        component={HabitTracker}
        options={{
          tabBarIcon: ({color, size}) => (
              <Icon name="calendar" size={RFValue(20)} color={colors.BottomButton} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
