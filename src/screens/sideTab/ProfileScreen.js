import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.profileImage}
        source={{uri: 'https://example.com/profile.jpg'}} // replace with the actual image URL
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john.doe@example.com</Text>
      <Text style={styles.bio}>This is a short bio about John Doe. He is a software developer.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05, // 5% of screen width
  },
  profileImage: {
    width: width * 0.3, // 30% of screen width
    height: width * 0.3, // 30% of screen width
    borderRadius: (width * 0.3) / 2, // half of width
    marginBottom: height * 0.02, // 2% of screen height
  },
  name: {
    fontSize: width * 0.05, // 5% of screen width
    fontWeight: 'bold',
  },
  email: {
    fontSize: width * 0.04, // 4% of screen width
    color: 'gray',
    marginBottom: height * 0.01, // 1% of screen height
  },
  bio: {
    fontSize: width * 0.04, // 4% of screen width
    textAlign: 'center',
  },
});

export default ProfileScreen;