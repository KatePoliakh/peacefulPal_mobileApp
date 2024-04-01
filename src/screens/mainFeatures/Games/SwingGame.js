import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; // make sure to install this package
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';


const SwingGame = ({ navigation }) => {
  const [angle, setAngle] = useState(0);
  const swingRef = useRef(null);

  const startSwinging = () => {
    if (!swingRef.current) {
      swingRef.current = setInterval(() => {
        setAngle((prevAngle) => {
          // This will cause the swing to slowly return to the horizontal position
          const newAngle = prevAngle * 0.95;
  
          // This will add some randomness to the swing
          const randomAngle = (Math.random() - 0.5) * 10;
  
          return newAngle + randomAngle;
        });
      }, 10);
    }
  };

  const stopSwinging = () => {
    if (swingRef.current) {
      clearInterval(swingRef.current);
      swingRef.current = null;
    }
  };

  const handleTouch = () => {
    if (angle >= 1 && angle <= 359) {
      stopSwinging();
    }
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
    <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
    <Icon name="arrow-back-outline" size={20} color={colors.BottomButton} />
    </TouchableOpacity>
    <Text  style={styles.header}>Swing Game </Text>
      <TouchableOpacity
        style={styles.swing}
        onPressIn={startSwinging}
        onPressOut={stopSwinging}
        onTouchStart={handleTouch}
      >
        <Text style={styles.swingText}>Keep the swings balanced</Text>
        <View style={[styles.swingSet, { transform: [{ rotate: `${angle}deg` }] }]} />
      </TouchableOpacity>
  </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  returnButton: {
    padding: windowWidth * 0.025, // 2.5% of screen width
    borderRadius: windowWidth * 0.0125, // 1.25% of screen width
    marginTop: windowHeight * 0.01, // 1% of screen height
  },
  buttonText: {
    color: colors.BottomButton,
    marginLeft: 5,
  },
  swing: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  swingText: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  swingSet: {
    width: 10,
    height: 100,
    backgroundColor: 'brown',
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
export default SwingGame