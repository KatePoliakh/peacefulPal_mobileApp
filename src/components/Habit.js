import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../constants/colors";
import Icon from 'react-native-vector-icons/Ionicons'; 

const Habit = ({navigation}) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [title, setTitle] = useState("");
  const availableColors = [
    "#FF5733", // Red
    "#FFD700", // Gold
    "#5D76A9",
    "#1877F2", // Medium Purple
    "#32CD32", // Lime Green
    "#CCCCFF", // Tomato
    "#4169E1", // Royal Blue
  ];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  async function addHabit() {
    try {
      const habitDetails = {
        title: title,
        color: selectedColor,
        repeatMode: "daily",
        reminder: true,
      };

      // Storing habit details using AsyncStorage
      await AsyncStorage.setItem("habit", JSON.stringify(habitDetails));
      
      setTitle("");
      Alert.alert("Habit added successfully", "Enjoy Practicing");
    } catch (error) {
      console.log("error adding a habit", error);
    }
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
    <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
    <Icon name="arrow-back-outline"  styles={{fontSize : 22}}  color={colors.BottomButton} />
    </TouchableOpacity>

      <Text style={styles.title}>
        Create <Text style={styles.boldTitle}>Habit</Text>
      </Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.textInput}
        placeholder="Title"
      />

      <View style={styles.colorContainer}>
        <Text style={styles.colorTitle}>Color</Text>
        <View style={styles.row}>
          {availableColors?.map((item, index) => (
            <TouchableOpacity
              onPress={() => setSelectedColor(item)}
              key={index}
              activeOpacity={0.8}
            >
              {selectedColor === item ? (
                <AntDesign name="plussquare" size={30} color={item} />
              ) : (
                <FontAwesome name="square" size={30} color={item} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Text style={styles.repeatTitle}>Repeat</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.repeatButton}>
          <Text style={styles.buttonText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.repeatButton}>
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.daysTitle}>On these days</Text>

      <View style={styles.row}>
        {days?.map((item, index) => (
          <TouchableOpacity
            style={styles.dayButton}
            key={index}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.reminderContainer}>
        <Text style={styles.reminderText}>Reminder</Text>
        <Text style={styles.reminderText}>Yes</Text>
      </View>

      <TouchableOpacity onPress={addHabit}
        style={styles.saveButton}>
        <Text style={styles.saveButtonText}>
          SAVE
        </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Habit;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  boldTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  textInput: {
    width: "95%",
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#E1EBEE",
  },
  colorContainer: {
    marginVertical: 10,
  },
  colorTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  repeatTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  repeatButton: {
    backgroundColor: "#AFDBF5",
    padding: 10,
    borderRadius: 6,
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
  },
  daysTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  reminderContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reminderText: {
    fontSize: 17,
    fontWeight: "500",
  },
  saveButton: {
    marginTop: 25,
    backgroundColor: "#00428c",
    padding: 10,
    borderRadius: 8,
  },
  saveButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
