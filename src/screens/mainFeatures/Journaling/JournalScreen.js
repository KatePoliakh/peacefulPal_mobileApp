import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {windowHeight, windowWidth} from "../../../constants/dimensions";
import {RFValue} from "react-native-responsive-fontsize";
import colors from "../../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const JournalPage = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Load journal entries from AsyncStorage when component mounts
    loadJournalEntries();
  }, []);

  const loadJournalEntries = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem('journalEntries');
      if (storedEntries !== null) {
        setJournalEntries(JSON.parse(storedEntries));
      }
    } catch (error) {
      console.error('Error loading journal entries:', error);
    }
  };

  const goToNewEntryPage = () => {
    navigation.navigate('NewJournalEntry'); // Navigate to the page for adding new journal entry
  };

  return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={RFValue(22)} color={colors.BottomButton} />
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Your Journal</Text>
          {journalEntries.map((entry, index) => (
              <View key={index} style={styles.entryContainer}>
                <Text>{entry.title}</Text>
                <Text>{entry.content}</Text>
              </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.addButton} onPress={goToNewEntryPage}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: colors.white,
  },
  returnButton: {
    padding: windowWidth * 0.025, // 2.5% of screen width
    borderRadius: windowWidth * 0.0125, // 1.25% of screen width
    marginTop: windowHeight * 0.01, // 1% of screen height
  },
  heading: {
    fontSize: windowWidth * 0.07, // Adjust based on screen width
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02, // Adjust based on screen height
    top: windowHeight * 0.001,
    alignSelf: 'center',
    color: colors.BottomButton,
  },
  scrollView: {
    flex: 1,
    padding: windowWidth * 0.05, // Adjust based on screen width
  },
  entryContainer: {
    marginBottom: windowWidth * 0.05, // Adjust based on screen width
    padding: windowWidth * 0.04, // Adjust based on screen width
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.12)',
    borderRadius: windowWidth * 0.05, // Adjust based on screen width
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
  addButton: {
    position: 'absolute',
    top: windowHeight * 0.85,
    left: windowWidth * 0.85,
    width: windowWidth * 0.1, // Adjust based on screen width
    height: windowWidth * 0.1, // Adjust based on screen width
    borderRadius: windowWidth * 0.05, // Adjust based on screen width
    backgroundColor: '#A4A4F7',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.06, // Adjust based on screen width
  },
});

export default JournalPage;
