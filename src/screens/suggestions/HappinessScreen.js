import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import { windowHeight, windowWidth } from '../../constants/dimensions';

const HappinessScreens = ({ navigation }) => {
  // Function to navigate to different sections of the app
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Enhance Your Happiness</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gratitude Journaling</Text>
        <Text style={styles.sectionText}>
          Start your day by jotting down three things you're grateful for. It could be as simple as the sunshine or a
          friendly smile. Practicing gratitude daily can boost your mood and overall well-being.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('GratitudeScreen')}>
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

      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline"  styles={{fontSize : 22}}  color={colors.BottomButton} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'gray',
  },
  optionButton: {
    backgroundColor: colors.PrimaryColor,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.BottomButton,
    textAlign: 'center',
    fontSize: 16,
  },
  returnButton: {
    position: 'absolute',
    top: '5%',
    left: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default HappinessScreens;
