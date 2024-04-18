import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';
import { RFValue } from 'react-native-responsive-fontsize';

const BreathingScreen = ({ navigation }) => {
  const [isBreathing, setIsBreathing] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const [breathingState, setBreathingState] = useState('');

  useEffect(() => {
    if (isBreathing) {
      startBreathing();
    } else {
      stopBreathing();
    }
  }, [isBreathing]);

  const startBreathing = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 0,
          duration: 8000, // Inhale duration
          useNativeDriver: true,
        }),
        Animated.delay(4000), // Hold duration
        Animated.timing(animation, {
          toValue: 1,
          duration: 4000, // Exhale duration
          useNativeDriver: true,
        }),
        Animated.delay(8000),
      ]),
      { iterations: -1 } // Loop indefinitely
    ).start();
  };
  

  const stopBreathing = () => {
    setIsBreathing(false);
    animation.stopAnimation();
    animation.setValue(0); // Reset the animation value to 0
  };

  animation.addListener(({ value }) => {
    // Set the breathing state text based on the animation value
    if (value < 0.5) {
      setBreathingState('Inhale');
    } else if (value >= 0.5 && value < 1) {
      setBreathingState('Hold');
    } else {
      setBreathingState('Exhale');
    }
  });

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
          <Icon name="arrow-back"  styles={{fontSize : 30}}  color={colors.BottomButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Breathing</Text>
        <TouchableOpacity onPress={() => setIsBreathing(!isBreathing)} style={styles.button}>
          <Text style={styles.buttonText}>{isBreathing ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        {isBreathing && (
          <Animated.View style={[styles.animationBox, animatedStyle]}>
            <Text style={styles.animationText}>{breathingState}</Text>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: windowHeight,
    width: windowWidth,
  },
  returnButton: {
    position: 'absolute',
    top: windowHeight * 0.01,
    left: windowWidth * 0.01,
    padding: windowWidth * 0.025,
    borderRadius: windowWidth * 0.0125,
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
