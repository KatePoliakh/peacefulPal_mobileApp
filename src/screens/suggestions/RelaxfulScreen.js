import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <ScrollView style={{top: windowHeight * 0.05, right: windowWidth * 0.1,
          left: windowWidth * 0.02}}>
          <Text style={styles.heading}>Find Relaxation</Text>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nature Sounds</Text>
            <Text style={styles.sectionText}>
              Immerse yourself in the calming sounds of nature, such as gentle rain, rustling leaves, or chirping birds. Nature sounds can help reduce stress and promote relaxation.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
              <Text style={styles.buttonText}>Explore Nature Sounds</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deep Relaxation Music</Text>
            <Text style={styles.sectionText}>
              Listen to soothing instrumental music designed to induce deep relaxation and tranquility. Let the peaceful melodies guide you into a state of calmness and serenity.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
              <Text style={styles.buttonText}>Listen to Relaxing Music</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Progressive Muscle Relaxation</Text>
            <Text style={styles.sectionText}>
              Release tension and promote relaxation through progressive muscle relaxation. Start by tensing and then relaxing each muscle group in your body, from head to toe.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
              <Text style={styles.buttonText}>Begin Muscle Relaxation</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Guided Relaxation</Text>
            <Text style={styles.sectionText}>
              Follow along with a guided relaxation session to unwind and destress. Let the soothing voice guide you through relaxation techniques and visualization exercises.
            </Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MeditationScreen')}>
              <Text style={styles.buttonText}>Start Guided Relaxation</Text>
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
    width: windowWidth * 0.6,
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

export default RelaxfulScreen;
