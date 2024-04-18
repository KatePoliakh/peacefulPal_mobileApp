import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';

const BubbleGame = ({ navigation }) => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      const newBubble = {
        id: Math.random().toString(),
        positionX: Math.random() * (windowWidth - 100) + 50, // Adjusted range for X position
        positionY: Math.random() * (windowHeight - 100) + 50, // Adjusted range for Y position
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
          <Icon name="arrow-back-outline" size={20} color={colors.BottomButton} />
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
    backgroundColor: colors.Background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  returnButton: {
    marginRight: 10,
    padding: 10,
    borderRadius: 20,
    //backgroundColor: colors.BottomButton,
  },
  headerText: {
    fontSize: 20,
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
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default BubbleGame;
