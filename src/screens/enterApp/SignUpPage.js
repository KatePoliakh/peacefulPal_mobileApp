import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet, Alert,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { windowWidth, windowHeight } from '../../constants/dimensions';

import colors from '../../constants/colors';

const RegisterScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    try {
      const response = await fetch('https://3a17-95-64-169-174.ngrok-free.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (response.ok) {
        // Registration successful, navigate to login screen
        navigation.goBack();
      } else {
        // Registration failed, display error message
        const data = await response.json();
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };
  return (
    <SafeAreaView style={styles.signUpPage}>
      <View style={styles.BgCircle} />
      <View style={styles.WeclomeTitle}>
          <Text style={styles.Title}>Hi, happy that you’re joining!</Text>
        </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.centeredView}>
        </View>
        <Text style={styles.registerText}>Register</Text>
        <InputField label={'Full Name'} value={fullName} onChangeText={setFullName}/>
        <InputField label={'Email ID'} keyboardType="email-address" value={email} onChangeText={setEmail}/>
        <InputField label={'Password'} inputType="password" value={password} onChangeText={setPassword}/>
        <InputField label={'Confirm Password'} inputType="password" value={confirmPassword} onChangeText={setConfirmPassword}/>

        <CustomButton label={'Register'} onPress={handleRegister} />

        <View style={styles.loginView}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  signUpPage: {
    flex: 1,
    backgroundColor: colors.startPageBg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    overflow: 'hidden',
  },
  BgCircle: {
    position: "absolute",
    top: windowHeight * 0.4, // Adjusted top position based on window height and width
    left: -windowWidth * 0.4, // Adjusted left position based on window width
    width: windowWidth,
    height: windowWidth,
    borderRadius: windowWidth / 2,
    backgroundColor: colors.StartPageCircle,
  },
  WeclomeTitle: {
    paddingTop: '10%',
  },
  Title: {
    color: colors.white,
    fontSize: windowWidth * 0.1, // Adjusted font size based on window width
    lineHeight: windowWidth * 0.12, // Adjusted line height based on window width
    fontWeight: '700',
    textAlign: "center",
  },
  scrollView: {
    width: '100%', // Ensures the scrollView takes full width
    paddingHorizontal: '5%', // Adjusted padding based on percentage
  },
  centeredView: {
    alignItems: 'center',
    width: '100%', // Ensures the centered view takes full width
  },
  registerText: {
    fontSize: windowWidth * 0.07, // Adjusted font size based on window width
    marginBottom: '5%', // Adjusted margin based on percentage
    marginTop: '15%', // Adjusted margin based on percentage
    color: colors.white,
    fontWeight: '500',
  },
  socialMediaView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%', // Adjusted margin based on percentage
    width: '100%', // Ensures the social media view takes full width
  },
  socialMediaButton: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: '5%', // Adjusted padding based on percentage
    paddingVertical: '2%', // Adjusted padding based on percentage
  },
  centeredText: {
    textAlign: 'center',
    color: colors.BottomButton,
    marginBottom: '5%', // Adjusted margin based on percentage
    width: '100%', // Ensures the text takes full width
  },
  datePickerView: {
    flexDirection: 'row',
    borderBottomColor: colors.BottomButton,
    borderBottomWidth: 1,
    paddingBottom: '2%', // Adjusted padding based on percentage
    marginBottom: '5%', // Adjusted margin based on percentage
    width: '100%', // Ensures the date picker view takes full width
  },
  datePickerText: {
    color: '#666',
    marginLeft: '1%', // Adjusted margin based on percentage
    marginTop: '1%', // Adjusted margin based on percentage
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '5%', // Adjusted margin based on percentage
    width: '100%', // Ensures the login view takes full width
  },
  loginText: {
    color: colors.BottomButton,
    fontWeight: '700',
  },
});


export default RegisterScreen;