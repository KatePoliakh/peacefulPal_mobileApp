import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import { windowHeight, windowWidth } from '../../constants/dimensions';
import {RFValue} from "react-native-responsive-fontsize";

const HappinessScreens = ({ navigation }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{top: windowHeight * 0.05, right: windowWidth * 0.1,
          left: windowWidth * 0.02}}>
          <Text style={styles.heading}>Enhance Your Happiness</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gratitude Journaling</Text>
            <Text style={styles.sectionText}>
              Start your day by jotting down three things you're grateful for. It could be as simple as the sunshine or a
              friendly smile. Practicing gratitude daily can boost your mood and overall well-being.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('JournalScreen')}>
              <Text style={styles.buttonText}>Start Journaling</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Mindfulness Meditation</Text>
            <Text style={styles.sectionText}>
              Find a quiet space, close your eyes, and focus on your breath. Let go of any thoughts and simply be present in
              the moment. Even just a few minutes of mindfulness meditation can bring calmness and clarity to your mind.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
              <Text style={styles.buttonText}>Begin Meditation</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Breathing Exercises</Text>
            <Text style={styles.sectionText}>
              Take a deep breath in through your nose, hold it for a few seconds, and then exhale slowly through your mouth.
              Repeat this pattern several times. Deep breathing exercises can reduce stress and promote relaxation.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('BreathingScreen')}>
              <Text style={styles.buttonText}>Try Breathing Exercise</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Engaging Games</Text>
            <Text style={styles.sectionText}>
              Sometimes, a little fun is all you need to lift your spirits. Play a game that you enjoy and let yourself
              unwind. Whether it's a puzzle or a quick match, gaming can provide a refreshing break from routine.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('GamesScreen')}>
              <Text style={styles.buttonText}>Play Games</Text>
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
    fontSize: RFValue(40),
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.05,
    top: windowHeight * 0.02,
    alignSelf: 'center',
    color: colors.white,
  },
  section: {
    marginBottom: windowHeight * 0.03,
  },
  sectionTitle: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.015,
    color: colors.BottomButton,
  },
  sectionText: {
    fontSize: windowWidth * 0.04,
    marginBottom: windowHeight * 0.015,
    color: colors.BottomButton,
    width: windowWidth * 0.95
  },
  optionButton: {
    padding: windowWidth * 0.04,
    width: windowWidth * 0.5,
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
    fontSize: windowWidth * 0.04,
  },
  returnButton: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.03,
    padding: windowWidth * 0.04,
    borderRadius: windowWidth * 0.01,
  },
});

export default HappinessScreens;
