import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import colors from "../constants/colors"
import { windowWidth, windowHeight } from '../constants/dimensions'; 
import { ScrollView } from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={styles.Home}>
      <View style={styles.WelcomeGroup}>
        <View style={styles.Group}>
          <Text style={styles.WelcomeBack}>Welcome back, Kate!</Text>
          <Text style={styles.question}>
                What are you missing right now?
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal style={styles.Feeling}>
        <View style={styles.Happy}>
          <View style={styles.MoodStyle}>
            <Image
              style={styles.Happy}
              source={require('../assets/images/moodlets/happyMoodlet.png')}
            />
          </View>

          <Text style={styles.HappyText}>Happy</Text>
        </View>
        <View style={styles.Calm}>
          <View style={styles.MoodStyle}>
            <Image
              style={styles.Calm}
              source={require('../assets/images/moodlets/calmMoodlet.png')}
               />
          </View>
          <Text style={styles.CalmText}>Calm</Text>
        </View>
          <View style={styles.Relax}>
            <View style={styles.MoodStyle}>
              <Image
                style={styles.Relax}
                source={require('../assets/images/moodlets/relaxMoodlet.png')}
              />
            </View>
            <Text style={styles.RelaxText}>Relax</Text>
          </View>
        <View style={styles.Focus}>
            <View style={styles.MoodStyle}>
              <Image
                style={styles.Focus}
                source={require('../assets/images/moodlets/focusMoodlet.png')}
              />
            </View>
            <Text style={styles.FocusText}>Focus</Text>
        </View>
      </ScrollView>
      </View>
      
      <Text style={styles.TodaySTask}>Today’s Task</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Home: {
    //position: "relative",
    backgroundColor: colors.white,
  },
  BgCircle: {
    position: "absolute",
    top: "30%",
    left: "-40%",
    width: windowWidth, 
    height: windowWidth, 
    borderRadius: (windowWidth) / 2, 
    backgroundColor: colors.StartPageCircle,
  },
  Feeling: {
    left: windowWidth * 0.02,
    flexDirection: "row",
    backgroundColor: 'pink',
    height: '30%',
  },
  HappyText: {
    color: colors.BottomButton,
    fontSize: 15,
    textAlign: "center",
  },
  CalmText: {
    color: colors.BottomButton,
    fontSize: 15,
    textAlign: "center",
  },
  MoodStyle: {
    width: "100%",
    padding: 20,
  },
  RelaxText: {
    color: colors.BottomButton,
    fontSize: 15,
    textAlign: "center",
  },
  FocusText: {
    color: colors.BottomButton,
    fontSize: 15,
    textAlign: "center",
  },
  WelcomeGroup: {
    top: "10%",
    left: windowWidth * 0.02,
    backgroundColor: 'green',
    height: '20%', 

  },
  WelcomeBack: {
    color: colors.BottomButton,
    fontSize: 30,
    bottom: "30%",
    fontWeight: "500",
  },
  question: {
    color: colors.BottomButton,
    fontSize: 25,
  },
  TodaySTask: {
    color: colors.BottomButton,
    fontSize: 22,
    height: '10%',
    backgroundColor: 'yellow',
  },
})