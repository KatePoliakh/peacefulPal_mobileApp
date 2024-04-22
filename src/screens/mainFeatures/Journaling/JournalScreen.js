import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
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

  const goToNewQuestionModePage = () => {
    navigation.navigate('QuestionMode'); // Navigate to the page for adding new journal entry
  };

  const deleteAllEntries = async () => {
    try {
      // Prompt user for confirmation
      Alert.alert(
          'Delete All Entries',
          'Are you sure you want to delete all journal entries?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: async () => {
                // Delete all entries from AsyncStorage and update state
                await AsyncStorage.removeItem('journalEntries');
                setJournalEntries([]);
              },
            },
          ],
          { cancelable: false }
      );
    } catch (error) {
      console.error('Error deleting journal entries:', error);
    }
  };

  const viewEntryDetails = (entry) => {
    navigation.navigate('JournalEntryDetails', { entry });
  };

  const refreshEntries = () => {
    loadJournalEntries();
  };

  return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={RFValue(22)} color={colors.BottomButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.refreshButton} onPress={refreshEntries}>
          <Icon name="refresh" size={RFValue(22)} color={colors.BottomButton} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles.addButton} onPress={goToNewEntryPage}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteAllEntries}>
            <Text style={styles.deleteButtonText}>Delete All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionMode} onPress={goToNewQuestionModePage}>
            <Text style={styles.questionModeText}>Answer questions</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Your Journal</Text>
          {journalEntries.map((entry, index) => (
              <TouchableOpacity key={index} style={styles.entryContainer} onPress={() => viewEntryDetails(entry)}>
                <Text>{entry.title}</Text>
                <Text>{entry.content}</Text>
              </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: colors.startPageBg,
  },
  returnButton: {
    padding: windowWidth * 0.025, // 2.5% of screen width
    borderRadius: windowWidth * 0.0125, // 1.25% of screen width
    marginTop: windowHeight * 0.01, // 1% of screen height
  },
  heading: {
    fontSize: RFValue(35), // Adjust based on screen width
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02, // Adjust based on screen height
    top: windowHeight * 0.001,
    alignSelf: 'center',
    color: colors.white,
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
    backgroundColor: colors.white,
  },
  addButton: {
    position: 'absolute',
    //top: windowHeight * 0.85,
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
  deleteButton: {
    backgroundColor: 'rgba(255,0,0,0.51)',
    //padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.25,
    height: windowHeight * 0.04,
    left: windowWidth * 0.05,
    //bottom: windowHeight * 0.04,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
  deleteButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  questionMode: {
    backgroundColor: '#A4A4F7',
    //padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.35,
    height: windowHeight * 0.04,
    left: windowWidth * 0.1,
    //alignSelf: 'center',
    //bottom: windowHeight * 0.07,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
  questionModeText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  refreshButton: {
    left: windowWidth * 0.9,
    bottom: windowHeight * 0.04
  },
});

export default JournalPage;
