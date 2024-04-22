import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import { windowHeight, windowWidth } from '../../constants/dimensions';
import {RFValue} from "react-native-responsive-fontsize";

const FocusedScreen = ({ navigation }) => {
  // Function to navigate to different sections of the app
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{top: windowHeight * 0.05, right: windowWidth * 0.1,
          left: windowWidth * 0.02}}>
          <Text style={styles.heading}>Boost Your Focus</Text>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pomodoro Technique</Text>
            <Text style={styles.sectionText}>
              Utilize the Pomodoro Technique to enhance productivity and focus. Work for 25 minutes, then take a short 5-minute break. Repeat this cycle to stay focused and motivated.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('PomodoroTimer')}>
              <Text style={styles.buttonText}>Start Pomodoro</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Focus Music</Text>
            <Text style={styles.sectionText}>
              Listen to specially curated focus music playlists designed to improve concentration and cognitive performance. Let the soothing melodies help you enter a state of deep focus.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
              <Text style={styles.buttonText}>Explore Focus Music</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Mindful Work Breaks</Text>
            <Text style={styles.sectionText}>
              Take mindful breaks between tasks to recharge your energy and maintain focus. Practice deep breathing or go for a short walk to clear your mind and refresh your senses.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
              <Text style={styles.buttonText}>Take a Mindful Break</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Task Prioritization</Text>
            <Text style={styles.sectionText}>
              Prioritize your tasks based on importance and urgency to stay focused on what truly matters. Break down larger tasks into smaller, manageable steps to maintain momentum.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('JournalScreen')}>
              <Text style={styles.buttonText}>Manage Tasks in Journal Note</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={RFValue(20)} color={colors.BottomButton} />
        </TouchableOpacity>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.05,
    backgroundColor: colors.startPageBg
  },
  heading: {
    fontSize: RFValue(40), // Adjust based on screen width
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.05, // Adjust based on screen height
    top: windowHeight * 0.02,
    alignSelf: 'center',
    color: colors.white,
  },
  section: {
    marginBottom: windowHeight * 0.03, // Adjust based on screen height
  },
  sectionTitle: {
    fontSize: RFValue(15), // Adjust based on screen width
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.015, // Adjust based on screen height
    color: colors.BottomButton,
  },
  sectionText: {
    fontSize: windowWidth * 0.04, // Adjust based on screen width
    marginBottom: windowHeight * 0.015, // Adjust based on screen height
    color: colors.BottomButton,
    width: windowWidth * 0.95
  },
  optionButton: {
    padding: windowWidth * 0.04, // Adjust based on screen width
    width: windowWidth * 0.7,
    height: windowHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.01,
    borderRadius: windowWidth * 0.0125,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
    backgroundColor: colors.white,
  },
  buttonText: {
    color: colors.BottomButton,
    textAlign: 'center',
    fontSize: windowWidth * 0.04, // Adjust based on screen width
  },
  returnButton: {
    position: 'absolute',
    top: windowHeight * 0.05, // Adjust based on screen height
    left: windowWidth * 0.03, // Adjust based on screen width
    padding: windowWidth * 0.04, // Adjust based on screen width
    borderRadius: windowWidth * 0.01, // Adjust based on screen width
  },
});

export default FocusedScreen;
