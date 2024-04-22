import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../constants/colors";
import { windowHeight, windowWidth } from "../../../constants/dimensions";

const BreathingExercise = ({ navigation }) => {
  const [stage, setStage] = useState('Inhale');
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    const phrases = ['Inhale', 'Hold', 'Exhale'];
    let index = 0;

    const animateNextPhrase = () => {
      setStage(phrases[index]);
      index = (index + 1) % phrases.length;
    };

    const inhale = Animated.timing(animation, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const hold = Animated.timing(animation, {
      toValue: 2,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const exhale = Animated.timing(animation, {
      toValue: 3,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const loopAnimation = () => {
      Animated.sequence([inhale, hold, exhale]).start(() => loopAnimation());
    };

    const phraseInterval = setInterval(animateNextPhrase, 3000); // Change phrase every 4 seconds
    loopAnimation();

    return () => {
      clearInterval(phraseInterval); // Clear the interval when component unmounts
      animation.setValue(0);
    };
  }, []);


  const circleScale = animation.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [1, 1.5, 1.5, 1],
  });

  // Change color based on stage
  let circleColor = 'skyblue';
  if (stage === 'Hold') {
    circleColor = 'gold';
  } else if (stage === 'Exhale') {
    circleColor = 'salmon';
  }

  return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={RFValue(20)} color={colors.BottomButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Breathing</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', top: windowHeight * 0.2 }}>
          <Text style={styles.stageText}>{stage}</Text>
          <Animated.View
              style={[
                styles.circle,
                {
                  transform: [{ scale: circleScale }],
                  backgroundColor: circleColor,
                },
              ]}
          />
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },
  returnButton: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.01,
    padding: windowWidth * 0.025,
    borderRadius: windowWidth * 0.0125,
  },
  title: {
    fontSize: RFValue(40),
    fontWeight: 'bold',
    top: windowHeight * 0.05,
    alignSelf: 'center',
    color: colors.BottomButton,
  },
  stageText: {
    fontSize: RFValue(25),
    marginBottom: RFValue(50),
    fontWeight: 'bold',
    color: colors.BottomButton,
  },
  circle: {
    width: windowWidth * 0.56,
    height: windowHeight * 0.25,
    borderRadius: windowHeight * 0.2,
  },
});

export default BreathingExercise;
