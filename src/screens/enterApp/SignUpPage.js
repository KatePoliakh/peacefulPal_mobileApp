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
        navigation.goBack();
      } else {
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
      <View style={styles.WelcomeTitle}>
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
                   value={password}
                   secureTextEntry={true}
        />
        <TextInput style={styles.input}
                   placeholder="Confirm password"
                   placeholderTextColor="grey"
                   onChangeText={text => setConfirmPassword(text)}
                   value={confirmPassword}
                   secureTextEntry={true}
        />
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
    top: windowHeight * 0.4,
    left: -windowWidth * 0.4,
    width: windowWidth,
    height: windowWidth,
    borderRadius: windowWidth / 2,
    backgroundColor: colors.StartPageCircle,
  },
  WelcomeTitle: {
    paddingTop: '10%',
  },
  Title: {
    color: colors.white,
    fontSize: windowWidth * 0.1,
    lineHeight: windowWidth * 0.12,
    fontWeight: '700',
    textAlign: "center",
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: '5%',
  },
  centeredView: {
    alignItems: 'center',
    width: '100%',
  },
  registerText: {
    fontSize: windowWidth * 0.07,
    marginBottom: '5%',
    marginTop: '15%',
    color: colors.white,
    fontWeight: 'bold',
  },
  centeredText: {
    textAlign: 'center',
    color: colors.BottomButton,
    marginBottom: '5%',
    width: '100%',
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '5%',
    width: '100%',
  },
  loginText: {
    color: colors.BottomButton,
    fontWeight: '700',
  },
  input: {
    height: windowHeight * 0.07,
    marginBottom: windowHeight * 0.02,
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