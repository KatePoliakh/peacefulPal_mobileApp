import React from 'react';
import {Text, StyleSheet, Linking, TouchableOpacity, SafeAreaView} from 'react-native';
import {windowHeight, windowWidth} from "../../constants/dimensions";
import colors from "../../constants/colors";
import {RFValue} from "react-native-responsive-fontsize";

const EmergencyHelpScreen = () => {
  const callHotline = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Emergency Mental Health Help</Text>
        <Text style={styles.text}>
          If you are in a crisis, please call this number
        </Text>

        <TouchableOpacity style={styles.button}
                          onPress={() => callHotline('84954021501')}>
          <Text style={styles.buttonText}>8-495-402-15-01</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}
                          onPress={() => Linking.openURL('https://www.psihologiya-praktika.ru/po-konsultatsii/')}>
          <Text style={styles.linkText}>free consultation</Text>
        </TouchableOpacity>
      </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: colors.white
  },

  scroll: {
    top: "10%"
  },
  title: {
    fontSize: 0.06 * windowWidth,
    fontWeight: 'bold',
    marginBottom: 0.05 * windowWidth,
    textAlign: 'center',
    top: '20%',
    color: colors.bottomButton,
  },
  text: {
    fontSize: RFValue(18),
    top: '20%',
    alignSelf: "center",
    left: windowWidth * 0.01,
    color: colors.bottomButton
  },
  link: {
    color: '',
    textDecorationLine: 'underline',
    top: '55%',
    position: "absolute",
    //display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: windowWidth * 0.65,
    height: windowHeight * 0.09,
    padding: windowWidth * 0.025,
    borderRadius: windowWidth * 0.025,
    backgroundColor: colors.BottomButton,
  },
  linkText:{
    color:colors.white,
    fontWeight: 'bold',
  },
  button: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: windowWidth * 0.65,
    height: windowHeight * 0.09,
    padding: windowWidth * 0.025,
    borderRadius: windowWidth * 0.025,
    backgroundColor: colors.BottomButton,
    top: '40%'
  },
  buttonText:{
    color:colors.white,
    fontWeight: 'bold',
  },
});

export default EmergencyHelpScreen;
