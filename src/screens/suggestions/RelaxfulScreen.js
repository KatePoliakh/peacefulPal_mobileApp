import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import { windowHeight, windowWidth } from '../../constants/dimensions';
import { RFValue } from 'react-native-responsive-fontsize';

const RelaxfulScreen = ({ navigation }) => {
  // Function to navigate to different sections of the app
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Find Relaxation</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nature Sounds</Text>
        <Text style={styles.sectionText}>
          Immerse yourself in the calming sounds of nature, such as gentle rain, rustling leaves, or chirping birds. Nature sounds can help reduce stress and promote relaxation.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('NatureSoundsScreen')}>
          <Text style={styles.buttonText}>Explore Nature Sounds</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Deep Relaxation Music</Text>
        <Text style={styles.sectionText}>
          Listen to soothing instrumental music designed to induce deep relaxation and tranquility. Let the peaceful melodies guide you into a state of calmness and serenity.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('RelaxationMusicScreen')}>
          <Text style={styles.buttonText}>Listen to Relaxing Music</Text>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Guided Relaxation</Text>
        <Text style={styles.sectionText}>
          Follow along with a guided relaxation session to unwind and destress. Let the soothing voice guide you through relaxation techniques and visualization exercises.
        </Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('GuidedRelaxationScreen')}>
          <Text style={styles.buttonText}>Start Guided Relaxation</Text>
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
    fontSize: RFValue(16),
  },
  returnButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default RelaxfulScreen;
