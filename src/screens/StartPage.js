import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import colors from "../constants/colors";
import { windowWidth, windowHeight } from '../constants/dimensions'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import {RFValue}   from "react-native-responsive-fontsize";


export default function Startpage({navigation}) {
  return (
    <SafeAreaView style={styles.Startpage}>
        <View style={styles.BgCircle} />
          <Image 
            source={require('../assets/images/startPage/StartPageGirl.png')}
            style={styles.Startpagegirl} 
            resizeMode="contain"
          />
        <View style={styles.WeclomeTitle}>
          <Text style={styles.Title}>Welcome to PeacefulPal</Text>
        </View>
      
      <TouchableOpacity 
      onPress={() => navigation.navigate('AuthPage')}
      style={styles.BottomButton}>
        <Text style={styles.BottomButtonText}>Let’s start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}  

const styles = StyleSheet.create({
  Startpage: {
    position: "relative",
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.startPageBg,
  },
  BgCircle: {
    position: "absolute",
    top: "30%",
    left: "-40%",
    width: windowWidth,
    height: windowHeight * 0.5,
    borderRadius: (windowWidth) / 2, 
    backgroundColor: colors.StartPageCircle,
  },
  Startpagegirl: {
    position: "absolute",
    bottom: '0%',
    alignItems: 'center',
  },
  WeclomeTitle: {
    position: "absolute",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
  },
  Title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: colors.white,
    fontSize: RFValue(60),
    lineHeight: windowHeight * 0.08,
    fontWeight: '700',
    textAlign: "center",
  },
  BottomButton: {
    position: "absolute",
    top: "85%",
    bottom: "9%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.65, // 75% of window width
    height: windowHeight * 0.09, // 10% of window height
    padding: windowWidth * 0.025, // 2.5% of window width
    borderRadius: windowWidth * 0.025, // 2.5% of window width
    backgroundColor: colors.BottomButton,
  },
  BottomButtonText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: colors.white,
    fontSize: RFValue(25),
    lineHeight: 25,
    fontWeight: '500',
    textAlign: "center",
  },
})
