import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import { windowWidth, windowHeight } from '../../constants/dimensions';


import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../context/AuthContext';
//import { RFValue } from 'react-native-responsive-fontsize';


function AuthPage ({navigation}){
  const {login} = useContext(AuthContext);
  return (
    
    <SafeAreaView style={styles.authPage}>
      <View style={styles.BgCircle} />
      <View style={styles.WeclomeTitle}>
          <Text style={styles.Title}>Welcome back</Text>
        </View>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          
        </View>

        <Text style={styles.loginText}>
          Login
        </Text>
        

        <InputField
          label={'Email ID'}
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => {login()}} />

        <View style={styles.rowView}>
          <Text >New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={styles.registerText}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  authPage: {
    position: "relative",
    flex: 1,
    backgroundColor: colors.startPageBg,
    overflow: 'hidden',
  },
  BgCircle: {
    position: "absolute",
    top: "40%",
    left: "-40%",
    width: windowWidth, 
    height: windowWidth, 
    borderRadius: (windowWidth) / 2, 
    backgroundColor: colors.StartPageCircle,
  },
  WeclomeTitle: {
    position: "absolute",
    flex: 1,
    paddingTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '1%', 
  },
  Title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: colors.white,
    fontSize: "60px",
    lineHeight: "70px",
    fontWeight: "700",
    textAlign: "center",
  },
  container: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    top: windowHeight * 0.25,
  },
  centeredView: {
    alignItems: 'center'
  },
  loginText: {
    //fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 30,
  },
  centeredText: {
    textAlign: 'center', 
    color: colors.white, 
    marginBottom: 30
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  touchableOpacityStyle: {
    borderColor: colors.BottomButton,
    backgroundColor: colors.BottomButton,
    borderWidth: windowWidth * 0.005, // 0.5% of screen width
    borderRadius: windowWidth * 0.025, // 2.5% of screen width
    paddingHorizontal: windowWidth * 0.075, // 7.5% of screen width
    paddingVertical: windowHeight * 0.025, // 2.5% of screen height
  },
  registerText: {
    color: colors.BottomButton, 
    fontWeight: '700'
  }
});

export default AuthPage;