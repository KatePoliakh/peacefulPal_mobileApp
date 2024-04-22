import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {windowHeight, windowWidth} from "../constants/dimensions";
import {RFValue} from "react-native-responsive-fontsize";
import colors from "../constants/colors";

const Habit = ({ habit, week, onToggleCompletion, onDelete }) => {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
    });

    return (
        <Animated.View style={{ transform: [{ translateX: 0 }] }}>
          <RectButton style={styles.deleteButton} onPress={onDelete}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>Delete</Text>
          </RectButton>
        </Animated.View>
    );
  };

  return (

      <Swipeable  renderRightActions={renderRightActions}>
        <View style={styles.habitContainer}>
          <Text style={styles.habitName}>{habit.name}</Text>
          <View style={styles.completionsContainer}>
            {week.map((day, index) => (
                <TouchableOpacity key={index} onPress={() => onToggleCompletion(index)}>
                  <View style={[styles.completion, habit.completions && habit.completions[index] && styles.completed]} />
                </TouchableOpacity>
            ))}
          </View>
        </View>
      </Swipeable>
  );
};

const styles = StyleSheet.create({
  habitContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: null,
    height: windowHeight * 0.1,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
    marginVertical: windowHeight * 0.005,
    borderRadius: windowWidth * 0.0125,
    width: windowWidth * 0.98,
    alignSelf: 'center',
  },
  habitName: {
    fontWeight: RFValue(30),
    color: colors.BottomButton
  },
  completionsContainer: {
    flexDirection: 'row',
    width: windowWidth,
    padding: windowWidth * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    left: windowWidth * 0.02
  },
  completion: {
    width: windowWidth * 0.09,
    height: windowHeight * 0.04,
    borderRadius: windowHeight * 2,
    backgroundColor: '#ddd',
    marginRight: windowWidth * 0.05,
  },
  completed: {
    backgroundColor: colors.startPageBg,
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
  },
});

export default Habit;
