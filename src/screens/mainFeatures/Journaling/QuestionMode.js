import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { windowHeight, windowWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from "../../../components/CustomButton";

const QuestionMode = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [answers, setAnswers] = useState(Array(3).fill(''));
    const navigation = useNavigation();

    const questions = [
        "How do you feel today?",
        "What made you feel this way?",
        "What steps can you take to improve your mood?",
    ];

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
            emotions: answers.map(answer => answer.trim()),
        };

        try {
            const existingEntries = await AsyncStorage.getItem('journalEntries');
            let updatedEntries = [];
            if (existingEntries !== null) {
                updatedEntries = JSON.parse(existingEntries);
            }

            updatedEntries.push(newEntry);

            await AsyncStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

            navigation.goBack();
        } catch (error) {
            console.error('Error saving journal entry:', error);
        }
    };

    const handleAnswerChange = (index, answer) => {
        setAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[index] = answer;
            return updatedAnswers;
        });
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
                    style={[styles.input, { height: windowHeight * 0.3 }]}
                    value={content}
                    onChangeText={setContent}
                    placeholder="Enter content..."
                    multiline
                />
                {questions.map((question, index) => (
                    <View key={index}>
                        <Text style={styles.label}>{question}</Text>
                        <TextInput
                            style={styles.input}
                            value={answers[index]}
                            onChangeText={(answer) => handleAnswerChange(index, answer)}
                            placeholder={`Enter answer to question ${index + 1}...`}
                            multiline
                        />
                    </View>
                ))}
                <CustomButton label={'Submit'} onPress={saveEntry} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: windowWidth * 0.05,
        backgroundColor: colors.startPageBg,
    },
    returnButton: {
        padding: windowWidth * 0.025,
        borderRadius: windowWidth * 0.0125,
        marginTop: windowHeight * 0.02,
    },
    heading: {
        fontSize: RFValue(40),
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.02,
        alignSelf: 'center',
        color: colors.white,
    },
    label: {
        fontSize: RFValue(20),
        marginBottom: windowWidth * 0.01,
        color: colors.BottomButton,
        fontWeight: 'bold',
    },
    input: {
        fontSize: RFValue(18),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: windowWidth * 0.015,
        padding: windowWidth * 0.04,
        marginBottom: windowWidth * 0.04,
        backgroundColor: colors.white,
    },
});

export default QuestionMode;
