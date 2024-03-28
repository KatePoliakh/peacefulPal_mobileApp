import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import colors from "../constants/colors"
import { windowWidth, windowHeight } from '../constants/dimensions'; 


export default function Home() {
  return (
    <SafeAreaView style={styles.Home}>
    <View style={styles.Home}>
      <View style={styles.Feeling}>
        <View style={styles.Happy2}>
          <View style={styles.Group123}>
            <Image
              style={styles.Happy}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/slw6vuivyec-828%3A1205?alt=media&token=ec376958-e315-4564-8837-1a4c0517f2a2",
              }}
            />
          </View>

          <Text style={styles.Happy1}>Happy</Text>
        </View>
        <View style={styles.Calm2}>
          <View style={styles.Group288}>
            <Image
              style={styles.CalmIcon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/slw6vuivyec-828%3A1199?alt=media&token=86cc0712-8d2a-4ae1-a09a-543c5c8c3b99",
              }}
            />
          </View>
          <Text style={styles.Calm}>Calm</Text>
        </View>
        <View style={styles.Relax3}>
          <View style={styles.RelaxMood}>
            <View style={styles.Group095}>
              <Image
                style={styles.Relax}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/slw6vuivyec-828%3A1216?alt=media&token=92ed5233-574d-4e0e-81ce-a89f62002759",
                }}
              />
            </View>
            <Text style={styles.Relax1}>Relax</Text>
          </View>
        </View>
        <View style={styles.Focus3}>
          <View style={styles.FocusMood}>
            <View style={styles.Group555}>
              <Image
                style={styles.Focus}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/slw6vuivyec-828%3A1221?alt=media&token=5cda4235-0b13-4545-8989-2126031684b0",
                }}
              />
            </View>
            <Text style={styles.Focus1}>Focus</Text>
          </View>
        </View>
      </View>

      <View style={styles.Group7109}>
        <View style={styles.Group1041}>
          <Image
            style={styles.Header}
            
          />
          <Text style={styles.WelcomeBackSarina}>Welcome back, Kate!</Text>
          <Text style={styles.HowAreYouFeelingToda}>
            How are you feeling today ?
          </Text>
          <Text style={styles.TodaySTask}>Today’s Task</Text>
        </View>
        <Image
          style={styles.BottomNavigation}
        />
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Home: {
    position: "relative",
    //display: "flex",
    //flexDirection: "column",
    //justifyContent: "flex-start",
    //alignItems: "flex-start",
    //boxSizing: "border-box",
    backgroundColor: colors.white,
  },
  Feeling: {
    position: "absolute",
    top: windowHeight * 0.25, // adjust the multiplier as needed
    left: windowWidth * 0.05, // adjust the multiplier as needed
    display: "flex",
    flexDirection: "row",
    width: windowWidth * 0.9, // adjust the multiplier as needed
    height: windowHeight * 0.1, // adjust the multiplier as needed
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Happy2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
   // paddingBottom: 7,
    boxSizing: "border-box",
  },
  Group123: {
    width: "100%",
    height: windowHeight * 0.1, // adjust the multiplier as needed
    paddingLeft: windowWidth * 0.04, // adjust the multiplier as needed
    paddingRight: windowWidth * 0.04, // adjust the multiplier as needed
    paddingTop: windowHeight * 0.02, // adjust the multiplier as needed
    paddingBottom: windowHeight * 0.02, // adjust the multiplier as needed
    borderRadius: 20, // this can stay the same
    backgroundColor: "#ef5da8",
  },
  Happy: {
    width: "100%",
    height: "100%",
  },
  Happy1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(55,27,52,1)",
    fontSize: "15px",
    lineHeight: "15px",
    //fontFamily: "Alegreya Sans, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Calm2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    paddingBottom: 7,
    boxSizing: "border-box",
  },
  Group288: {
    width: "100%",
    height: windowHeight * 0.1, // adjust the multiplier as needed
    paddingLeft: windowWidth * 0.04, // adjust the multiplier as needed
    paddingRight: windowWidth * 0.04, // adjust the multiplier as needed
    paddingTop: windowHeight * 0.02, // adjust the multiplier as needed
    paddingBottom: windowHeight * 0.02, // adjust the multiplier as needed
    borderRadius: 20, // this can stay the same
    backgroundColor: "#AEBFF7",
  },
  CalmIcon: {
    width: "100%",
    height: "100%",
  },
  Calm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(55,27,52,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Alegreya Sans, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Relax3: {
    width: 69.58,
    height: "100%",
    boxSizing: "border-box",
  },
  RelaxMood: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingBottom: 7,
    boxSizing: "border-box",
  },
  Group095: {
    width: "100%",
    height: 72.95,
    paddingLeft: 15,
    paddingRight: 14.58,
    paddingTop: 19,
    paddingBottom: 16.95,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(240,158,84,1)",
  },
  Relax: {
    width: "100%",
    height: "100%",
  },
  Relax1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(55,27,52,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Alegreya Sans, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Focus3: {
    width: 69.58,
    height: "100%",
    boxSizing: "border-box",
  },
  FocusMood: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingBottom: 7,
    boxSizing: "border-box",
  },
  Group555: {
    width: "100%",
    height: 72.95,
    paddingLeft: 15,
    paddingRight: 14.58,
    paddingTop: 17,
    paddingBottom: 16.95,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(160,227,226,1)",
  },
  Focus: {
    width: "100%",
    height: "100%",
  },
  Focus1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(55,27,52,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Alegreya Sans, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Group7109: {
    position: "absolute",
    top: 46,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Group1041: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
  },
  Header: {
    width: "100%",
    height: 35,
  },
  WelcomeBackSarina: {
    color: "rgba(55,27,52,1)",
    fontSize: "30px",
    lineHeight: "30px",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "400",
  },
  HowAreYouFeelingToda: {
    color: "rgba(55,27,52,1)",
    fontSize: "22px",
    lineHeight: "22px",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "400",
  },
  TodaySTask: {
    color: "rgba(55,27,52,1)",
    fontSize: "22px",
    lineHeight: "22px",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "400",
  },
  BottomNavigation: {
    width: "100%",
    height: 85,
  },
})
