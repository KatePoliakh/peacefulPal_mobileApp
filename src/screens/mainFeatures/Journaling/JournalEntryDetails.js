// JournalEntryDetails.js
import React from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../constants/colors";
import { windowHeight, windowWidth } from "../../../constants/dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';

const JournalEntryDetails = ({ route, navigation }) => {
    const { entry } = route.params;

    const deleteEntry = async (entryToDelete) => {
        try {
            Alert.alert(
                'Delete Entry',
                'Are you sure you want to delete this journal entry?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: async () => {
                            const updatedEntries = journalEntries.filter(item => item.title !== entry.title);


                            await AsyncStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

                            setJournalEntries(updatedEntries);
                        },
                    },
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.error('Error deleting journal entry:', error);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={RFValue(22)} color={colors.BottomButton} />
            </TouchableOpacity>
            <ScrollView>
                <Text style={styles.title}>{entry.title}</Text>
                <Text style={styles.content}>{entry.content}</Text>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
    },
    returnButton: {
        top: windowHeight * 0.02,
        left: windowWidth * 0.05,
    },
    title: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.02,
        marginTop: windowHeight * 0.05,
        marginLeft: windowHeight * 0.02,
    },
    content: {
        fontSize: RFValue(18),
        marginBottom: windowHeight * 0.02,
        marginLeft: windowHeight * 0.02,
    },
    deleteButton: {
        backgroundColor: colors.red,
        borderRadius: windowHeight * 0.01,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: windowHeight * 0.05,
        width: windowWidth * 0.5,
        top: windowHeight * 0.6
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default JournalEntryDetails;
