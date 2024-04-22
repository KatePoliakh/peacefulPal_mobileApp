import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, TextInput, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Habit from '../../components/Habit';
import { SafeAreaView } from 'react-native-safe-area-context';
import {windowHeight, windowWidth} from "../../constants/dimensions";
import colors from "../../constants/colors";
import {RFValue} from "react-native-responsive-fontsize";

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
        <Text style={styles.title}>Meditations</Text>
        <View style={styles.addHabitContainer}>
          <TextInput
              style={styles.input}
              placeholder="Enter new habit"
              value={newHabitName}
              onChangeText={setNewHabitName}
          />
          <TouchableOpacity style={styles.addButton} onPress={addHabit}>
              <Text style={styles.addButtonText}>Add Habit</Text>
          </TouchableOpacity>
        </View>
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

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: colors.startPageBg,
  },
  title: {
    fontSize: RFValue(40),
    fontWeight: "bold",
    alignSelf: 'center',
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.02,
    color: colors.white,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: "bold"
  },
  addHabitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left: windowWidth * 0.01,
    marginBottom: windowHeight * 0.03,
    alignSelf: 'center'
  },
  input: {
    marginRight: 10,
    width: windowWidth * 0.6,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
    padding: 8,
    borderRadius: windowWidth * 0.01
  },
  addButton: {
      backgroundColor: colors.BottomButton,
    width: windowWidth * 0.25,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
    padding: 8,
    borderRadius: windowWidth * 0.01,
    alignItems: "center"
  },
  addButtonText:{
    color: colors.white,
    fontWeight: "bold",
  },
});

export default HabitTracker;