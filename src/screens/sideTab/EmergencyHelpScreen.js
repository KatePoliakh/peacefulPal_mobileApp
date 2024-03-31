import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const EmergencyHelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Mental Health Help</Text>
      <Text style={styles.text}>
        If you are in a crisis, please call the National Suicide Prevention Lifeline at{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('tel:18002738255')}>
          1-800-273-TALK (8255)
        </Text>
        {'\n'}
        or use the{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.crisistextline.org/')}>
          Crisis Text Line
        </Text>{' '}
        by texting TALK to 741741.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  link: {
    color: 'blue',
  },
});

export default EmergencyHelpScreen;