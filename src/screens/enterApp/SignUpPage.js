import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { windowWidth, windowHeight } from '../../constants/dimensions';

import colors from '../../constants/colors';

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

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

        <InputField label={'Full Name'} />
        <InputField label={'Email ID'} keyboardType="email-address" />
        <InputField label={'Password'} inputType="password" />
        <InputField label={'Confirm Password'} inputType="password" />

        <View style={styles.datePickerView}>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={styles.datePickerText}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <CustomButton label={'Register'} onPress={() => {}} />

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
    paddingTop: '20%',
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
  scrollView: {
    paddingHorizontal: 25,
  },
  centeredView: {
    alignItems: 'center',
  },
  registerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '500',
    color: colors.BottomButton,
    marginBottom: '10%',
    marginTop: '65%',
  },
  socialMediaView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  socialMediaButton: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  centeredText: {
    textAlign: 'center',
    color: colors.BottomButton,
    marginBottom: 30,
  },
  datePickerView: {
    flexDirection: 'row',
    borderBottomColor: colors.BottomButton,
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 30,
  },
  datePickerText: {
    color: '#666',
    marginLeft: 5,
    marginTop: 5,
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  loginText: {
    color: colors.BottomButton,
    fontWeight: '700',
  },
});

export default RegisterScreen;