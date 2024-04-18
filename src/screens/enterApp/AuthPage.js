import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import colors from '../../constants/colors';
import { windowWidth, windowHeight } from '../../constants/dimensions';

import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../context/AuthContext';
import { RFValue } from 'react-native-responsive-fontsize';

function AuthPage({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://3a17-95-64-169-174.ngrok-free.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, navigate to main screen or dashboard
        login();
      } else {
        // Login failed, display error message
        const data = await response.json();
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };

  return (
      <SafeAreaView style={styles.authPage}>
        <View style={styles.BgCircle} />
        <View style={styles.WeclomeTitle}>
          <Text style={styles.Title}>Welcome back</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.loginText}>Login</Text>
          <InputField
              label={'Email ID'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
          />
          <InputField
              label={'Password'}
              inputType="password"
              value={password}
              onChangeText={setPassword}
          />
          <CustomButton label={'Login'} onPress={handleLogin} />
          <View style={styles.rowView}>
            <Text>New to the app?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  authPage: {
    position: 'relative',
    flex: 1,
    backgroundColor: colors.startPageBg,
    overflow: 'hidden',
  },
  BgCircle: {
    position: 'absolute',
    top: windowHeight * 0.4,
    left: -windowWidth * 0.4,
    width: windowWidth,
    height: windowWidth,
    borderRadius: windowWidth / 2,
    backgroundColor: colors.StartPageCircle,
  },
  WeclomeTitle: {
    position: 'absolute',
    flex: 1,
    paddingTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: colors.white,
    fontSize: RFValue(50),
    fontWeight: '700',
    textAlign: 'center',
    left: windowWidth * 0.01,
  },
  container: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    top: windowHeight * 0.3,
  },
  loginText: {
    fontSize: RFValue(28),
    fontWeight: '800',
    color: colors.white,
    marginBottom: '10%',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  registerText: {
    color: colors.BottomButton,
    fontWeight: '700',
  },
});

export default AuthPage;
