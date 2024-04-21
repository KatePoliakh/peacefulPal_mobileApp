import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet, Alert, TextInput,
} from 'react-native';


import CustomButton from '../../components/CustomButton';
import { windowWidth, windowHeight } from '../../constants/dimensions';
import colors from '../../constants/colors';
import { apiUrl } from  '../../constants/url';

const RegisterScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = async () => {
    // Check if any field is empty
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/register`, {
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
        <View style={{direction: 'column'}}>
        <TextInput style={styles.input}
                   placeholder="Full Name"
                   placeholderTextColor="grey"
                   onChangeText={text => setFullName(text)}
                   value={fullName}/>
        <TextInput style={styles.input}
                   placeholder="Email"
                   placeholderTextColor="grey"
                   keyboardType="email-address"
                   onChangeText={text => setEmail(text)}
                   value={email}/>
        <TextInput style={styles.input}
                   placeholder="Password"
                   placeholderTextColor="grey"
                   onChangeText={text => setPassword(text)}
                   value={password}/>
        <TextInput style={styles.input}
                   placeholder="Confirm password"
                   placeholderTextColor="grey"
                   onChangeText={text => setConfirmPassword(text)}
                   value={confirmPassword}/>
        </View>

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
  centeredText: {
    textAlign: 'center',
    color: colors.BottomButton,
    marginBottom: '5%', // Adjusted margin based on percentage
    width: '100%', // Ensures the text takes full width
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
  input: {
    height: windowHeight * 0.07,
    marginBottom: windowHeight * 0.02, // Add margin to the bottom of each input
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
    shadowOpacity: 0.25,
    shadowRadius: windowWidth * 0.01,
    elevation: 5,
  },
});


export default RegisterScreen;