import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; // make sure to install this package
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';


const JournalScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
    <Text>Journal Screen</Text>
    <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
    <Icon name="arrow-back-outline" size={20} color={colors.BottomButton} />
    </TouchableOpacity>
  </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
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
});
export default JournalScreen