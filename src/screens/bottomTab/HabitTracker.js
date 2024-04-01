import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Habit from '../../components/Habit';
import { SafeAreaView } from 'react-native-safe-area-context';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabitName, setNewHabitName] = useState('');
  const [week, setWeek] = useState([]);

  useEffect(() => {
    loadHabits();
    generateWeek();
  }, []);

  const generateWeek = () => {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - currentDay + (currentDay === 0 ? -6 : 1)); // Adjust to Monday
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      days.push(day);
    }
    setWeek(days);
  };

  const loadHabits = async () => {
    try {
      const storedHabits = await AsyncStorage.getItem('habits');
      if (storedHabits !== null) {
        setHabits(JSON.parse(storedHabits));
      }
    } catch (error) {
      console.error('Error loading habits from AsyncStorage:', error);
    }
  };

  const saveHabits = async (updatedHabits) => {
    try {
      await AsyncStorage.setItem('habits', JSON.stringify(updatedHabits));
      setHabits(updatedHabits);
    } catch (error) {
      console.error('Error saving habits to AsyncStorage:', error);
    }
  };

  const addHabit = () => {
    if (newHabitName.trim() !== '') {
      const newHabit = { id: Date.now(), name: newHabitName, completions: {} };
      const updatedHabits = [...habits, newHabit];
      saveHabits(updatedHabits);
      setNewHabitName('');
    } else {
      Alert.alert('Error', 'Please enter a habit name');
    }
  };

  const deleteHabit = (habitId) => {
    const updatedHabits = habits.filter(habit => habit.id !== habitId);
    saveHabits(updatedHabits);
  };

  const toggleHabitCompletion = (habitId, dayIndex) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === habitId) {
        const updatedCompletions = { ...habit.completions };
        updatedCompletions[dayIndex] = !updatedCompletions[dayIndex];
        return { ...habit, completions: updatedCompletions };
      }
      return habit;
    });
    saveHabits(updatedHabits);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.daysContainer}>
        {week.map((day, index) => (
          <Text key={index} style={styles.dayText}>{day.toLocaleDateString('en-US', { weekday: 'short' })}</Text>
        ))}
      </View>
      <FlatList
        data={habits}
        renderItem={({ item }) => (
          <Habit
            habit={item}
            week={week}
            onToggleCompletion={(dayIndex) => toggleHabitCompletion(item.id, dayIndex)}
            onDelete={() => deleteHabit(item.id)} 
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.addHabitContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new habit"
          value={newHabitName}
          onChangeText={setNewHabitName}
        />
        <Button title="Add Habit" onPress={addHabit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayText: {
    flex: 1,
    textAlign: 'center',
  },
  addHabitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
  },
});

export default HabitTracker;
