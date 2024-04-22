import React, { useState } from 'react';
import {Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';

const meditations = [
  { id: 1, title: 'Guided Breathing', audioPath: require('../../../assets/audio/meditations/3_minute_Breathing.wav') },
  { id: 2, title: 'Body Scan', audioPath: require('../../../assets/audio/meditations/4_minute_body_scan.wav') },
  { id: 3, title: 'Mindfulness Practice', audioPath: require('../../../assets/audio/meditations/10-min-bodyscan-by-christy-cassisa.mp3') },
  { id: 4, title: 'Tension Release', audioPath: require('../../../assets/audio/meditations/tension_release.wav') },
  { id: 5, title: 'Birds in forest on a sunny day', audioPath: require('../../../assets/audio/meditations/4_minute_body_scan.wav') },
];

const MeditationScreen = ({ navigation }) => {
  const [sound, setSound] = useState(null);
  const [currentMeditation, setCurrentMeditation] = useState(null);

  async function playSound(audioPath, meditationId) {
    if (currentMeditation === meditationId) {
      return;
    }
    if (sound) {
      await sound.stopAsync();
    }
    const { sound } = await Audio.Sound.createAsync(audioPath);
    setSound(sound);
    await sound.playAsync();
    setCurrentMeditation(meditationId);
  }

  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
    }
    setCurrentMeditation(null);
  }

  return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={RFValue(20)} color={colors.BottomButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Meditations</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {meditations.map((meditation) => (
              <TouchableOpacity
                  key={meditation.id}
                  style={[
                    styles.meditationContainer,
                    { backgroundColor: currentMeditation === meditation.id ? 'lightgray' : colors.white }
                  ]}
                  onPress={() => (currentMeditation === meditation.id ? stopSound() : playSound(meditation.audioPath, meditation.id))}
              >
                <Text style={styles.meditationTitle}>{meditation.title}</Text>
                <Text style={styles.buttonText}>{currentMeditation === meditation.id ? 'Stop' : 'Play'}</Text>
              </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.startPageBg,
  },
  returnButton: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.01,
    padding: windowWidth * 0.025,
    borderRadius: windowWidth * 0.0125,
  },
  buttonText: {
    color: colors.BottomButton,
    marginLeft: '1%',
    right: '10%',
    fontSize: RFValue(18),
  },
  meditationContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: windowHeight * 0.01,
    borderRadius: windowWidth * 0.0125,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
  meditationTitle: {
    flex: 1,
    color: colors.BottomButton,
    marginLeft: windowWidth * 0.02,
    fontSize: RFValue(18),
  },
  title: {
    fontSize: RFValue(40),
    fontWeight: 'bold',
    marginTop: windowHeight * 0.09,
    marginBottom: windowHeight * 0.02,
    color: colors.white,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: windowHeight * 0.02,
  },
});


export default MeditationScreen;
