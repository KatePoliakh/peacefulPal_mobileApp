import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../constants/colors';
import { windowHeight, windowWidth } from '../../../constants/dimensions';

const GamesScreen = ({ navigation }) => {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.BgCircle1}></View>
        <View style={styles.BgCircle2}></View>
        <View style={styles.BgCircle3}></View>
        <View style={styles.BgCircle4}></View>
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={RFValue(20)} color={colors.BottomButton} />
        </TouchableOpacity>
        <Text style={styles.Title}>Games</Text>
        <View style={{ flexDirection: 'row', left: windowWidth * 0.02}}>
          <View style={styles.gameButton}>
            <TouchableOpacity
                onPress={() => navigation.navigate('BubbleGame')}
                style={styles.TasksButton}>
              <Text style={styles.buttonText}>Bubbles</Text>
              <Image
                  style={{flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'contain'}}
                  source={require('../../../assets/images/gamesIcons/bubbles.png')}

              />
            </TouchableOpacity>
          </View>
          <View style={styles.gameButton}>
            <TouchableOpacity
                onPress={() => navigation.navigate('NumbersGame')}
                style={styles.TasksButton}>
              <Text style={styles.buttonText}>Arithmetic</Text>
              <Image
                  style={styles.ButtonIcon}
                  source={require('../../../assets/images/gamesIcons/arithmetic.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', left: windowWidth * 0.02}}>
          <View style={styles.gameButton}>
            <TouchableOpacity
                onPress={() => navigation.navigate('SwingGame')}
                style={styles.TasksButton}>
              <Text style={styles.buttonText}>  Swing</Text>
              <Image
                  style={styles.ButtonIcon}
                  source={require('../../../assets/images/gamepad_icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.startPageBg,
    height: windowHeight,
    width: windowWidth,
    overflow: 'hidden',
  },
  Title: {
    fontSize: RFValue(50),
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  gameButton: {
    top: "25%",
    bottom: "9%",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.45,
    height: windowHeight * 0.2,
    borderRadius: windowWidth * 0.025,
    backgroundColor: colors.white,
    margin: "2%",
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
  returnButton: {
    padding: windowWidth * 0.025,
    borderRadius: windowWidth * 0.0125,
    marginTop: windowHeight * 0.01,
  },
  buttonText: {
    color: colors.BottomButton,
    width: "100%",
    fontWeight: '400',
    fontSize: RFValue(20),
    top: windowHeight * 0.03
  },
  ButtonIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  BgCircle1: {
    position: "absolute",
    top: "20%",
    left: "-50%",
    width: windowWidth,
    height: windowWidth,
    borderRadius: (windowWidth) / 2,
    backgroundColor: colors.StartPageCircle,
  },
  BgCircle2: {
    position: "absolute",
    top: "4%",
    left: "70%",
    width: windowWidth,
    height: windowWidth,
    borderRadius: (windowWidth) / 2,
    backgroundColor: colors.StartPageCircle,
  },
  BgCircle3: {
    position: "absolute",
    top: "80%",
    left: "-20%",
    width: windowWidth,
    height: windowWidth,
    borderRadius: (windowWidth) / 2,
    backgroundColor: colors.StartPageCircle,
  },
  BgCircle4: {
    position: "absolute",
    top: "55%",
    left: "70%",
    width: windowWidth,
    height: windowWidth,
    borderRadius: (windowWidth) / 2,
    backgroundColor: colors.StartPageCircle,
  },
});
export default GamesScreen