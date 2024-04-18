import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Animated, Easing } from 'react-native';

const SwingGame = () => {
  /*const [angle, setAngle] = useState(0);
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
      duration: 500,
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => pushSeesaw('left')} style={styles.leftButton} />
      <TouchableOpacity onPress={() => pushSeesaw('right')} style={styles.rightButton} />
      <Animated.View style={[styles.seesaw, seesawStyle]} />
    </View>
  );*/
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  rightButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  seesaw: {
    width: 200,
    height: 20,
    backgroundColor: 'brown',
    position: 'absolute',
    bottom: 100,
  },
});

export default SwingGame;
