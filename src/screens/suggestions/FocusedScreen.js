import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import { windowHeight, windowWidth } from '../../constants/dimensions';

const FocusedScreen = ({ navigation }) => {
  // Function to navigate to different sections of the app
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Boost Your Focus</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pomodoro Technique</Text>
        <Text style={styles.sectionText}>
          Utilize the Pomodoro Technique to enhance productivity and focus. Work for 25 minutes, then take a short 5-minute break. Repeat this cycle to stay focused and motivated.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('PomodoroScreen')}>
          <Text style={styles.buttonText}>Start Pomodoro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Focus Music</Text>
        <Text style={styles.sectionText}>
          Listen to specially curated focus music playlists designed to improve concentration and cognitive performance. Let the soothing melodies help you enter a state of deep focus.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('FocusMusicScreen')}>
          <Text style={styles.buttonText}>Explore Focus Music</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mindful Work Breaks</Text>
        <Text style={styles.sectionText}>
          Take mindful breaks between tasks to recharge your energy and maintain focus. Practice deep breathing or go for a short walk to clear your mind and refresh your senses.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MindfulBreaksScreen')}>
          <Text style={styles.buttonText}>Take a Mindful Break</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Task Prioritization</Text>
        <Text style={styles.sectionText}>
          Prioritize your tasks based on importance and urgency to stay focused on what truly matters. Break down larger tasks into smaller, manageable steps to maintain momentum.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('TaskPrioritizationScreen')}>
          <Text style={styles.buttonText}>Manage Tasks</Text>
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
    flex: 1,
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
    top: 20,
    left: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default FocusedScreen;
