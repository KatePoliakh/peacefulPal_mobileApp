import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; // make sure to install this package
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';
import ConfettiCannon from 'react-native-confetti-cannon';
const NumbersGame = ({ navigation }) => {
};
  /*const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [answer, setAnswer] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswer = () => {
    if (parseInt(answer) === num1 + num2) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setNum1(Math.floor(Math.random() * 10));
        setNum2(Math.floor(Math.random() * 10));
        setAnswer('');
      }, 2000);
    } else {
      alert('Wrong answer. Try again!');
      setAnswer('');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
    
    
    <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
    <Icon name="arrow-back-outline" size={20} color={colors.BottomButton} />
    </TouchableOpacity>
  

  <Text style={styles.header}>Arithmetic Game</Text>
      <Text style={styles.question}>{num1} + {num2} = ?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={answer}
        onChangeText={text => setAnswer(text)}
      />
      <Button title="Submit" onPress={handleAnswer} />
      {showConfetti && <ConfettiCannon count={200} origin={{x: -10, y: 0}} />}
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  returnButton: {
    padding: windowWidth * 0.025, // 2.5% of screen width
    borderRadius: windowWidth * 0.0125, // 1.25% of screen width
    marginTop: windowHeight * 0.01, // 1% of screen height
  },
  buttonText: {
    color: colors.BottomButton,
    marginLeft: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});*/
export default NumbersGame;