import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';
import {RFValue} from "react-native-responsive-fontsize";

const BubbleGame = ({ navigation }) => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      const newBubble = {
        id: Math.random().toString(),
        positionX: Math.random() * (windowWidth - 100) + 50,
        positionY: Math.random() * (windowHeight - 100) + 50,
        color: generateRandomColor(),
      };

      setBubbles(prevBubbles => [...prevBubbles, newBubble]);
    }, 1000);

    return () => clearInterval(bubbleInterval);
  }, []);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const shovelBubble = id => {
    setBubbles(prevBubbles => prevBubbles.filter(bubble => bubble.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={RFValue(20)} color={colors.BottomButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bubble Game</Text>
      </View>
      <View style={styles.bubbleContainer}>
        {bubbles.map(bubble => (
          <TouchableOpacity
            key={bubble.id}
            style={[styles.bubble, { top: bubble.positionY, left: bubble.positionX, backgroundColor: bubble.color }]}
            onPress={() => shovelBubble(bubble.id)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.02,
    color: colors.BottomButton,
  },
  returnButton: {
    marginRight: windowWidth * 0.02,
    padding: windowWidth * 0.05,
    borderRadius: windowWidth * 0.1,
  },
  headerText: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: colors.Text,
  },
  bubbleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    position: 'absolute',
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.05,
  },
});

export default BubbleGame;
