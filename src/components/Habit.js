import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const Habit = ({ habit, week, onToggleCompletion, onDelete }) => {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
    });

    return (
      <Animated.View style={{ transform: [{ translateX: 0 }] }}>
        <RectButton style={styles.deleteButton} onPress={onDelete}>
          <Text>Delete</Text>
        </RectButton>
      </Animated.View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.habitContainer}>
        <Text>{habit.name}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  completionsContainer: {
    flexDirection: 'row',
  },
  completion: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ddd',
    marginRight: 5,
  },
  completed: {
    backgroundColor: 'green',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
});

export default Habit;