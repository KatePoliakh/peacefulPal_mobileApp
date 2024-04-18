import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import { windowHeight, windowWidth } from '../../constants/dimensions';

const CalmnessScreen = ({ navigation }) => {
  // Function to navigate to different sections of the app
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Find Your Calmness</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Guided Meditation</Text>
        <Text style={styles.sectionText}>
          Immerse yourself in a soothing guided meditation session. Let the calming voice guide you to a state of deep relaxation and inner peace.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
          <Text style={styles.buttonText}>Start Guided Meditation</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nature Sounds</Text>
        <Text style={styles.sectionText}>
          Listen to the tranquil sounds of nature, such as gentle waves, rustling leaves, or chirping birds. Nature sounds can help you unwind and escape the stresses of daily life.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
          <Text style={styles.buttonText}>Explore Nature Sounds</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Deep Breathing Exercises</Text>
        <Text style={styles.sectionText}>
          Practice deep breathing exercises to calm your mind and body. Inhale deeply through your nose, hold for a few seconds, and exhale slowly. Repeat several times for relaxation.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('BreathingScreen')}>
          <Text style={styles.buttonText}>Try Deep Breathing</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progressive Muscle Relaxation</Text>
        <Text style={styles.sectionText}>
          Release tension and promote relaxation through progressive muscle relaxation. Start by tensing and then relaxing each muscle group in your body, from head to toe.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MuscleRelaxationScreen')}>
          <Text style={styles.buttonText}>Begin Muscle Relaxation</Text>
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
    top: 30,
    left: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default CalmnessScreen;
