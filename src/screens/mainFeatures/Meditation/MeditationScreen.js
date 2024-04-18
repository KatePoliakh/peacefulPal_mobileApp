import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; // make sure to install this package
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';
import { Audio } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';



const MeditationScreen = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../../../assets/audio/10-min-bodyscan-by-christy-cassisa.mp3')
    );
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }
  return (
  <SafeAreaView style={styles.container}>
   
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline"  styles={{fontSize : 22}}  color={colors.BottomButton} />
      </TouchableOpacity>
    
        <Text style={styles.title}>Meditation</Text>
          <TouchableOpacity style={styles.button} onPress={() => isPlaying ? stopSound() : playSound()}>
        <Text style={styles.buttonText}>{isPlaying ? "Pause" : "Play"} Audio</Text>
      </TouchableOpacity>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: windowHeight,
    width: windowWidth,
  },
  returnButton: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.01,
    padding: windowWidth * 0.025, // 2.5% of screen width
    borderRadius: windowWidth * 0.0125, // 1.25% of screen width
  },
  buttonText: {
    color: colors.BottomButton,
    marginLeft: 5,
    fontSize: RFValue(18),
  },
  button: {
    top: windowHeight * 0.1,
    width: windowWidth * 0.15,
    height: windowHeight * 0.07,
    borderRadius: "30%",
    
    backgroundColor: '#DDDDDD',
  },
  title: {
    fontSize: RFValue(24),
    fontWeight: 'bold',
    marginBottom: 20,
    top: windowHeight * 0.09,

  },
});
export default MeditationScreen