import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Button title="Change Password" onPress={() => navigation.navigate('ChangePassword')} />
      <Button title="Notification Settings" onPress={() => navigation.navigate('NotificationSettings')} />
      <Button title="Privacy Settings" onPress={() => navigation.navigate('PrivacySettings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;