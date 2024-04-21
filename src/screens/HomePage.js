import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import colors from "../constants/colors"
import { windowWidth, windowHeight } from '../constants/dimensions';
import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { apiUrl } from  '../constants/url';

export default function Home({navigation}) {
    const [userName, setUserName] = useState('');
    useEffect(() => {
        // Fetch username from server or other storage mechanism
        fetchUserName();
    }, []);

//ПОЧИНИТЬ!!!

    const fetchUserName = async () => {
        // Replace 'api/login' with your actual login endpoint
        const response = await fetch(`${apiUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: 'user@example.com', password: 'password' }), // Provide user's email and password
        });
        const data = await response.json();
        if (response.ok) {
            setUserName(data.userName);
        } else {
            console.error('Error fetching user name:', data.error);
        }
    };
  return (
    <SafeAreaView style={styles.Home}>
      <View style={styles.BgCircle1}></View>
      <View style={styles.BgCircle2}></View>
      <View style={styles.WelcomeGroup}>
        <View style={styles.Group}>
          <Text style={styles.WelcomeBack}>Welcome back, {userName}!</Text>
          <Text style={styles.question}>
                What are you missing right now?
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal style={styles.Feeling} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate('HappinessScreen')}>
        <View style={styles.Happy}>
          <View style={styles.MoodStyle}>
            <Image
              style={styles.Happy}
              source={require('../assets/images/moodlets/happyMoodlet.png')}
            />
          </View>
          <Text style={styles.HappyText}>Happy</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CalmnessScreen')}>
        <View style={styles.Calm}>
          <View style={styles.MoodStyle}>
            <Image
              style={styles.Calm}
              source={require('../assets/images/moodlets/calmMoodlet.png')}
               />
          </View>
          <Text style={styles.CalmText}>Calm</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RelaxfulScreen')}>
          <View style={styles.Relax}>
            <View style={styles.MoodStyle}>
              <Image
                style={styles.Relax}
                source={require('../assets/images/moodlets/relaxMoodlet.png')}
              />
            </View>
            <Text style={styles.RelaxText}>Relax</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FocusedScreen')}>
        <View style={styles.Focus}>
            <View style={styles.MoodStyle}>
              <Image
                style={styles.Focus}
                source={require('../assets/images/moodlets/focusMoodlet.png')}
              />
            </View>
            <Text style={styles.FocusText}>Focus</Text>
        </View>
        </TouchableOpacity>
      </ScrollView>
      </View>

        <Text style={styles.TodaySTask}>Daily Tasks</Text>


        <View style={{ flexDirection: 'row', left: windowWidth * 0.02}}>
          <View horizontalstyle={styles.meditationButton}>
             <TouchableOpacity
             onPress={() => navigation.navigate('MeditationScreen')}
             style={styles.TasksButton}>
              <Text style={styles.buttonText}>Meditation</Text>
              <Image
                style={styles.ButtonIcon}
                source={require('../assets/images/pods_icon.png')}
              />
             </TouchableOpacity>
          </View>
          <View horizontalstyle={styles.GamepadButtonButton}>
             <TouchableOpacity
             onPress={() => navigation.navigate('GamesScreen')}
             style={styles.TasksButton}>
              <Text style={styles.buttonText}>Games</Text>
              <Image
                style={styles.ButtonIcon}
                source={require('../assets/images/gamepad_icon.png')}
              />
             </TouchableOpacity>
          </View>
          </View>

          <View style={{ flexDirection: 'row', left: windowWidth * 0.02}}>
          <View horizontalstyle={styles.JornalButton}>
             <TouchableOpacity
             onPress={() => navigation.navigate('JournalScreen')}
             style={styles.TasksButton}>
              <Text style={styles.buttonText}>Journaling</Text>
              <Image
                style={styles.ButtonIcon}
                source={require('../assets/images/soup_icon.png')}
              />
             </TouchableOpacity>
          </View>
          <View horizontalstyle={styles.BreathingButton}>
             <TouchableOpacity
             onPress={() => navigation.navigate('BreathingScreen')}
             style={styles.TasksButton}>
              <Text style={styles.buttonText}>Breathing</Text>
              <Image
                style={styles.ButtonIcon}
                source={require('../assets/images/sleepMask_icon.png')}
              />
             </TouchableOpacity>
          </View>
        </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Home: {
    backgroundColor: colors.white,
    height: windowHeight,
    width: windowWidth,
  },
  WelcomeGroup: {
    top: "8%",
    left: windowWidth * 0.02,
    //backgroundColor: 'green',
    height: '10%',

  },
  WelcomeBack: {
    color: colors.BottomButton,
    fontSize: RFValue(25),
    bottom: "45%",
    fontWeight: "500",
  },
  question: {
    color: colors.BottomButton,
    fontSize: RFValue(20),
    bottom: "10%",
  },
  Feeling: {
    left: windowWidth * 0.02,
    flexDirection: "row",
    bottom: '10%',
    top: '45%',
  },
  MoodStyle: {
    width: "100%",
    padding: RFValue(20),
  },
  HappyText: {
    color: colors.BottomButton,
    fontSize: RFValue(15),
    textAlign: "center",
  },
  CalmText: {
    color: colors.BottomButton,
    fontSize: RFValue(15),
    textAlign: "center",
  },
  RelaxText: {
    color: colors.BottomButton,
    fontSize: RFValue(15),
    textAlign: "center",
  },
  FocusText: {
    color: colors.BottomButton,
    fontSize: RFValue(15),
    textAlign: "center",
  },

  TodaySTask: {
    color: colors.BottomButton,
    fontSize: RFValue(22),
    height: '7%',
    top: '12%',
    left: windowWidth * 0.02,
    fontWeight: "500",
    //backgroundColor: 'yellow',
  },
  TaskNavStyle: {
    width: "100%",
    padding: RFValue(5),
  },
  TasksButton: {
      top: "45%",
      bottom: "9%",
      justifyContent: "center",
      alignItems: "center",
      width: windowWidth * 0.45, // 75% of window width
      height: windowHeight * 0.2, // 10% of window height
      borderRadius: windowWidth * 0.025, // 2.5% of window width
      backgroundColor: colors.white,
      margin: "2%",
      shadowColor: '#000',
      shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
      shadowOpacity: 0.25,
      shadowRadius: windowWidth * 0.01,
      elevation: 5,

  },
  buttonText: {
    color: colors.BottomButton,
    fontSize: RFValue(20),
    fontWeight: "300",
  },
  meditationButton:{
    width: "100%",
    padding: RFValue(5),
  },
  GamepadButton:{
    width: "100%",
    padding: RFValue(5),
  },
  JornalButton:{
    width: "100%",
    padding: RFValue(5),
  },
  BreathingButton:{
    width: "100%",
    padding: RFValue(5),
  },
  ButtonIcon: {
    width: windowWidth * 0.2, // 10% of window width
    height: windowHeight * 0.1, // 10% of window height

  },
  BgCircle1: {
    position: "absolute",
    top: "40%",
    left: "-40%",
    width: windowWidth,
    height: windowWidth,
    borderRadius: (windowWidth) / 2,
    backgroundColor: colors.StartPageCircle,
  },
  BgCircle2: {
    position: "absolute",
    top: "10%",
    left: "60%",
    width: windowWidth,
    height: windowWidth,
    borderRadius: (windowWidth) / 2,
    backgroundColor: colors.StartPageCircle,
  },
})