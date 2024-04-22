import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import CustomDrawer from '../components/CustomDrawer';

import Icon from "react-native-vector-icons/FontAwesome";
import EmergencyHelpScreen from '../screens/sideTab/EmergencyHelpScreen';
import SettingsScreen from '../screens/sideTab/SettingsScreen';
import colors from '../constants/colors';
import TabNavigator from './TabNavigator';

import BreathingScreen from '../screens/mainFeatures/Breathing/BreathingScreen';
import MeditationScreen from '../screens/mainFeatures/Meditation/MeditationScreen';
import GamesScreen from '../screens/mainFeatures/Games/GamesScreen';
import JournalScreen from '../screens/mainFeatures/Journaling/JournalScreen';
import NewJournalEntry from "../screens/mainFeatures/Journaling/NewJournalEntry";

import CalmnessScreen from '../screens/suggestions/CalmnessScreen';
import FocusedScreen from '../screens/suggestions/FocusedScreen';
import HappinessScreen from '../screens/suggestions/HappinessScreen';
import RelaxfulScreen from '../screens/suggestions/RelaxfulScreen';
import PomodoroTimer from '../screens/suggestions/PomodoroTimer';

import BubbleGame from '../screens/mainFeatures/Games/BubbleGame';
import NumbersGame from '../screens/mainFeatures/Games/NumbersGame';
import SwingGame from '../screens/mainFeatures/Games/SwingGame';

import Habit from '../components/Habit';
import HabitTracker from '../screens/bottomTab/HabitTracker';
import HomePage from '../screens/HomePage';
import {RFValue} from "react-native-responsive-fontsize";
import {windowHeight, windowWidth } from "../constants/dimensions";
import QuestionMode from "../screens/mainFeatures/Journaling/QuestionMode";
import JournalEntryDetails from "../screens/mainFeatures/Journaling/JournalEntryDetails";


const Stack = createNativeStackNavigator();


const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home1" component={TabNavigator} />
      <Stack.Screen name="Home2" component={HomePage} />

      <Stack.Screen name="MeditationScreen" component={MeditationScreen} />
      <Stack.Screen name="GamesScreen" component={GamesScreen} />

      <Stack.Screen name="JournalScreen" component={JournalScreen} />
        <Stack.Screen name="NewJournalEntry" component={NewJournalEntry}/>
        <Stack.Screen name="QuestionMode" component={QuestionMode}/>
        <Stack.Screen name="JournalEntryDetails" component={JournalEntryDetails}/>
      <Stack.Screen name="BreathingScreen" component={BreathingScreen} />

      <Stack.Screen name="CalmnessScreen" component={CalmnessScreen} />
      <Stack.Screen name="FocusedScreen" component={FocusedScreen} />
      <Stack.Screen name="HappinessScreen" component={HappinessScreen} />
      <Stack.Screen name="RelaxfulScreen" component={RelaxfulScreen} />
        <Stack.Screen name="PomodoroTimer" component={PomodoroTimer}/>

      
      <Stack.Screen name="NumbersGame" component={NumbersGame} />
      <Stack.Screen name="SwingGame" component={SwingGame} />
      <Stack.Screen name="BubbleGame" component={BubbleGame} />
      
      <Stack.Screen name="HabitTracker" component={HabitTracker} />
      <Stack.Screen name="Habit" component={Habit}/>

    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.white,
        drawerActiveTintColor: colors.BottomButton,
        drawerInactiveTintColor: colors.black,
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ color }) => (
              <Icon name="home" size={RFValue(20)} color={colors.BottomButton} />
          ),
        }} />
      
      <Drawer.Screen
        name="Emergency Help"
        component={EmergencyHelpScreen}
        options={{
          drawerIcon: ({ color }) => (
              <Icon name="info" size={RFValue(20)} color={colors.BottomButton} style={{left: windowWidth * 0.01}}/>
          ),
        }}
      />
    
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
              <Icon name="gear" size={RFValue(20)} color={colors.BottomButton} />
          ),
        }} />
        
    </Drawer.Navigator>
    
    
  );
};

export default AppStack;
