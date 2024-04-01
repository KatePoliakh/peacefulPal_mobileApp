import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated , SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';
import { RFValue } from 'react-native-responsive-fontsize';

const BreathingScreen = ({ navigation }) => {
  const [breathingState, setBreathingState] = useState('Start');
  const [isBreathing, setIsBreathing] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const startBreathing = () => {
    setIsBreathing(true);
    setBreathingState('Inhale');
    Animated.timing(animation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setBreathingState('Exhale');
        Animated.timing(animation, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }).start(({ finished }) => {
          if (finished && isBreathing) {
            startBreathing(); // Restart the breathing cycle
          } else {
            setIsBreathing(false);
            setBreathingState('Start');
          }
        });
      }
    });
  };

  const stopBreathing = () => {
    setIsBreathing(false);
  };

  const interpolateAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255,255,255,0.5)', 'rgba(255,0,0,0.5)'],
  });

  const animatedStyle = {
    backgroundColor: interpolateAnimation,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}> 
          <Icon name="arrow-back" size={30} color={colors.BottomButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Breathing</Text>
        <TouchableOpacity onPress={() => isBreathing ? stopBreathing() : startBreathing()} style={styles.button}>
          <Text style={styles.buttonText}>{isBreathing ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.animationBox, animatedStyle]}>
          <Text style={styles.animationText}>{breathingState}</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: windowHeight,
    width: windowWidth,
  },
  returnButton: {
    position: 'absolute',
    top: windowHeight * 0.01,
    left: windowWidth * 0.01,
    padding: windowWidth * 0.025, // 2.5% of screen width
    borderRadius: windowWidth * 0.0125, // 1.25% of screen width
  },
  title: {
    fontSize: RFValue(24),
    fontWeight: 'bold',
    marginBottom: 20,
    top: windowHeight * 0.09,

  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    top: windowHeight * 0.1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  animationBox: {
    marginTop: 30,
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: windowHeight * 0.2,

  },
  animationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default BreathingScreen;
