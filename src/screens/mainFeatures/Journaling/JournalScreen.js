import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ScrollView, Platform, DatePickerIOS, DatePickerAndroid, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

const MoodTrackerApp = () => {
  /*const [mood, setMood] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moodEntries, setMoodEntries] = useState([]);

  useEffect(() => {
    loadMoodEntries();
  }, []);

  const loadMoodEntries = async () => {
    try {
      const storedMoodEntries = await AsyncStorage.getItem('@mood_entries');
      if (storedMoodEntries !== null) {
        setMoodEntries(JSON.parse(storedMoodEntries));
      }
    } catch (error) {
      console.error('Error loading mood entries:', error);
    }
  };

  const saveMoodEntry = async () => {
    if (mood.trim() === '') {
      Alert.alert('Empty Mood', 'Please enter your mood.');
      return;
    }
    try {
      const newEntry = {
        id: Date.now().toString(),
        mood: mood.trim(),
        description: description.trim(),
        date: selectedDate,
      };
      const updatedMoodEntries = [...moodEntries, newEntry];
      setMoodEntries(updatedMoodEntries);
      await AsyncStorage.setItem('@mood_entries', JSON.stringify(updatedMoodEntries));
      setMood('');
      setDescription('');
    } catch (error) {
      console.error('Error saving mood entry:', error);
    }
  };

  const deleteMoodEntry = async (id) => {
    try {
      const updatedMoodEntries = moodEntries.filter((entry) => entry.id !== id);
      setMoodEntries(updatedMoodEntries);
      await AsyncStorage.setItem('@mood_entries', JSON.stringify(updatedMoodEntries));
    } catch (error) {
      console.error('Error deleting mood entry:', error);
    }
  };

  const showDatePicker = async () => {
    try {
      if (Platform.OS === 'android') {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: selectedDate,
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          const newDate = new Date(year, month, day);
          setSelectedDate(newDate);
        }
      } else if (Platform.OS === 'ios') {
        // Not implemented in this example, you can add DatePickerIOS for iOS.
        // For simplicity, the iOS date picker is omitted.
      }
    } catch (error) {
      console.error('Error selecting date:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addMoodContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your mood..."
          value={mood}
          onChangeText={(text) => setMood(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter description..."
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <View style={styles.datePickerContainer}>
          <Button title="Select Date" onPress={showDatePicker} />
          <Text>Date: {format(selectedDate, 'yyyy-MM-dd')}</Text>
        </View>
        <Button title="Add Mood" onPress={saveMoodEntry} />
      </View>
      <ScrollView>
        {moodEntries.map((entry) => (
          <View key={entry.id} style={styles.moodEntry}>
            <Text style={styles.moodText}>{entry.mood}</Text>
            <Text>{entry.description}</Text>
            <Text>Date: {format(new Date(entry.date), 'yyyy-MM-dd')}</Text>
            <Button title="Delete" onPress={() => deleteMoodEntry(entry.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );*/
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addMoodContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  moodEntry: {
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
  },
  moodText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MoodTrackerApp;
