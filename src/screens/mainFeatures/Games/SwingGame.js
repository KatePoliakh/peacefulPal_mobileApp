import React, { useState, useRef } from 'react';
import {View, TouchableOpacity, StyleSheet, SafeAreaView, Text} from 'react-native';
import { Animated, Easing } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';

const SwingGame = ({navigation}) => {
  const [angle, setAngle] = useState(0);
  const seesawAnimation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(seesawAnimation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    seesawAnimation.setValue(0);
    setAngle(0);
  };

  const pushSeesaw = (direction) => {
    Animated.timing(seesawAnimation, {
      toValue: direction === 'left' ? 0.2 : 0.8,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  seesawAnimation.addListener(({ value }) => {
    setAngle(value * 180 - 90);
  });

  const seesawStyle = {
    transform: [{ rotate: `${angle}deg` }],
  };

  return (
      <SafeAreaView style={styles.page}>
        <View style={{height: windowHeight * 0.5}}>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={RFValue(22)} color={colors.BottomButton} />
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Seesaw Game</Text>
          <TouchableOpacity onPress={() => pushSeesaw('right')} style={styles.leftButton} />
          <TouchableOpacity onPress={() => pushSeesaw('left')} style={styles.rightButton} />
          <Animated.View style={[styles.seesaw, seesawStyle]} />
       </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page:{
    height: windowHeight,
    width: windowWidth,
    backgroundColor: colors.startPageBg,
    overflow: 'hidden',
  },
  header: {
    fontSize: RFValue(40),
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '80%',
    color: colors.white,
    height: "40%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '30%',

  },
  returnButton: {
    padding: windowWidth * 0.025,
    borderRadius: windowWidth * 0.0125,
    marginTop: windowHeight * 0.01,
    left: windowWidth * 0.03,
    top: windowHeight * 0.01
  },
  leftButton: {
    position: 'absolute',
    bottom: windowHeight * 0.05,
    left: windowWidth * 0.05,
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
  rightButton: {
    position: 'absolute',
    bottom: windowHeight * 0.05,
    right: windowWidth * 0.05,
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
  seesaw: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.02,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: windowHeight * 0.2,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
});

export default SwingGame;
