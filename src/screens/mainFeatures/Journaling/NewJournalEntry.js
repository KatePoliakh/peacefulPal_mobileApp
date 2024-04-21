import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {windowHeight, windowWidth} from "../../../constants/dimensions";
import colors from "../../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import {RFValue} from "react-native-responsive-fontsize";

const NewJournalEntry = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigation = useNavigation();

    const saveEntry = async () => {
        if (title.trim() === '' || content.trim() === '') {
            // Validation: Ensure title and content are not empty
            return;
        }

        // Create a new entry object
        const currentDate = new Date();
        const newEntry = {
            date: currentDate.toDateString(),
            title: title.trim(),
            content: content.trim(),
        };

        try {
            // Load existing entries from AsyncStorage
            const existingEntries = await AsyncStorage.getItem('journalEntries');
            let updatedEntries = [];
            if (existingEntries !== null) {
                updatedEntries = JSON.parse(existingEntries);
            }

            // Add the new entry to the existing entries
            updatedEntries.push(newEntry);

            // Save the updated entries to AsyncStorage
            await AsyncStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

            // Navigate back to the journal page
            navigation.goBack();
        } catch (error) {
            console.error('Error saving journal entry:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={RFValue(22)} color={colors.BottomButton} />
            </TouchableOpacity>
            <ScrollView>
                <Text style={styles.heading}>New Record</Text>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter title..."
            />
            <Text style={styles.label}>Content:</Text>
            <TextInput
                style={[styles.input, { height: windowHeight * 0.5 }]}
                value={content}
                onChangeText={setContent}
                placeholder="Enter content..."
                multiline
            />
            <Button title="Save Entry" onPress={saveEntry} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        padding: windowWidth * 0.05,
        backgroundColor: colors.startPageBg,
    },
    returnButton: {
        padding: windowWidth * 0.025, // 2.5% of screen width
        borderRadius: windowWidth * 0.0125, // 1.25% of screen width
        marginTop: windowHeight * 0.02, // 1% of screen height
    },
    heading: {
        fontSize: RFValue(40), // Adjust based on screen width
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.02, // Adjust based on screen height
        top: windowHeight * 0.01,
        alignSelf: 'center',
        color: colors.white,
    },
    label: {
        fontSize: RFValue(20), // Adjust based on screen width
        marginBottom: windowWidth * 0.01, // Adjust based on screen width
    },
    input: {
        fontSize: windowWidth * 0.045, // Adjust based on screen width
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: windowWidth * 0.015, // Adjust based on screen width
        padding: windowWidth * 0.04, // Adjust based on screen width
        marginBottom: windowWidth * 0.04, // Adjust based on screen width
    },
});

export default NewJournalEntry;
