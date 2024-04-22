import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { windowHeight, windowWidth } from "../../constants/dimensions";
import NotificationHandler from './NotificationHandler';
import {Share as TimePicker} from "react-native-web/src";

const SettingsScreen = ({ navigation }) => {
    const [notificationEnabled, setNotificationEnabled] = useState(false);
    const [selectedFrequency, setSelectedFrequency] = useState("daily");
    const [selectedTime, setSelectedTime] = useState(new Date());

    const toggleNotification = () => {
        setNotificationEnabled(previousState => !previousState);
    };

    const handleFrequencyChange = (itemValue) => {
        setSelectedFrequency(itemValue);
    };



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Enable Notifications</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={notificationEnabled ? "#f4f3f4" : "#f4f3f4"}
                    onValueChange={toggleNotification}
                    value={notificationEnabled}
                />
            </View>
            {notificationEnabled && (
                <View style={styles.notificationSettings}>

                </View>
            )}
            {notificationEnabled && <NotificationHandler />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: windowHeight * 0.07,
        padding: windowWidth * 0.05,
        width: windowWidth * 0.9,
        left: windowWidth * 0.03,
    },
    title: {
        fontSize: RFValue(30),
        fontWeight: 'bold',
        marginBottom: windowWidth * 0.05,
    },
    setting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: windowWidth * 0.03,
    },
    settingText: {
        fontSize: RFValue(20),
    },
    notificationSettings: {
        marginTop: 20,
    },
    label: {
        fontSize: RFValue(18),
        marginBottom: 5,
    },
    picker: {
        width: '100%',
        height: 50,
        marginBottom: 20,
    },
    selectedTime: {
        fontSize: RFValue(16),
        marginBottom: 20,
        color: '#0d6efd',
    },
});

export default SettingsScreen;
