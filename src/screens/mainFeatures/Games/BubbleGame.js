import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; // make sure to install this package


import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';

import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

/*const Bubble = ({ onComplete }) => {
    const animation = new Animated.Value(0);
  
    useEffect(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
      }).start(onComplete);
    }, []);
  
    const bubbleStyle = {
      windowWidth: 50,
      windowHeight: 50,
      borderRadius: 25,
      backgroundColor: 'white',
      position: 'absolute',
      left: Math.random() * (windowWidth - 50),
      bottom: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, windowHeight],
      }),
    };

    const onBubblePress = Animated.event([
        {
            nativeEvent: ({ state }) =>
            state === State.END && Animated.timing(animation, {
              toValue: 0,
              duration: 2000,
              easing: Easing.linear,
            }).stop(),
         },
      ]);

      return (
        <TapGestureHandler onHandlerStateChange={onBubblePress}>
          <Animated.View style={bubbleStyle} />
        </TapGestureHandler>
      );
};
const BubbleGame = ({ navigation }) => {
    const [bubbles, setBubbles] = useState([{}]);

    const addBubble = () => {
        setBubbles([...bubbles, {}]);
      };

  return (
    <SafeAreaView>
    <View style={styles.container}>
    <Text>Bubble Game </Text>
    <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
    <Icon name="arrow-back-outline" size={20} color={colors.BottomButton} />
    </TouchableOpacity>
    {bubbles.map((_, i) => (
        <Bubble key={i} onComplete={addBubble} />
      ))}
  </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  returnButton: {
    padding: windowWidth * 0.025, // 2.5% of screen width
    borderRadius: windowWidth * 0.0125, // 1.25% of screen width
    marginTop: windowHeight * 0.01, // 1% of screen height
  },
  buttonText: {
    color: colors.BottomButton,
    marginLeft: 5,
  },
});
export default BubbleGame*/