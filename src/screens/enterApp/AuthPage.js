import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../constants/colors';
import { windowWidth, windowHeight } from '../../constants/dimensions';

import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../context/AuthContext';
import { RFValue } from 'react-native-responsive-fontsize';


function AuthPage ({navigation}){
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleLogin = () => {
    // Validate the user's input
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }
    if (password === '') {
      alert('Password cannot be empty.');
      return;
    }
    login();
  };
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
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          label={'Password'}
          inputType="password"
          //fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
          value={password}
        />
        
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
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
}

const styles = StyleSheet.create({
  authPage: {
    position: "relative",
    flex: 1,
    backgroundColor: colors.startPageBg,
    overflow: 'hidden',
  },
  BgCircle: {
    position: "absolute",
    top: "30%",
    left: "-40%",
    width: windowWidth,
    height: windowHeight * 0.5,
    borderRadius: (windowWidth) / 2,
    backgroundColor: colors.StartPageCircle,
  },
  WeclomeTitle: {
    position: "absolute",
    flex: 1,
    paddingTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: colors.white,
    fontSize: RFValue(55),
    fontWeight: '700',
    textAlign: "center",
    lineHeight: '65%',
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
    fontSize: RFValue(28),
    fontWeight: '800',
    color: colors.white,
    marginBottom: '40%',
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