import React, { useState, useEffect } from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../constants/colors";
import {windowHeight, windowWidth} from "../../constants/dimensions";

const PomodoroTimer = ({navigation}) => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isBreak, setIsBreak] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        if (isBreak) {
                            setIsBreak(false);
                            setMinutes(25);
                        } else {
                            setIsBreak(true);
                            setMinutes(5);
                        }
                        setIsActive(false);
                    } else {
                        setMinutes(minutes => minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds => seconds - 1);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, minutes, seconds, isBreak]);

    const handleStartStop = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsBreak(false);
        setMinutes(25);
        setSeconds(0);
    };
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.timer}>
                {formatTime(minutes)}:{formatTime(seconds)}
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleStartStop}
                >
                    <Text>{isActive ? 'Pause' : 'Start'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleReset}
                >
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.description}>
                {isBreak
                    ? 'Take a 5-minute break!'
                    : 'Focus for the next 25 minutes!'}
            </Text>
         <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={RFValue(20)} color={colors.BottomButton} />
         </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.startPageBg,
    },
    timer: {
        fontSize: RFValue(80),
        fontWeight: 'bold',
        color: colors.white,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: '10%',
        alignItems: 'center',
    },
    button:{
        marginRight: windowWidth * 0.1,
        marginLeft: windowWidth * 0.1,
        padding: windowWidth * 0.04,
        width: windowWidth * 0.2,
        height: windowHeight * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: windowHeight * 0.01,
        borderRadius: windowWidth * 0.0125,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
        shadowOpacity: 0.25,
        shadowRadius: windowWidth * 0.01,
        elevation: 5,
        backgroundColor: colors.white,
    },
    description: {
        marginTop: '20%',
        fontSize: RFValue(18),
        textAlign: 'center',
        color: colors.BottomButton,
        fontWeight: 'bold',
    },
    returnButton: {
        position: 'absolute',
        top: windowHeight * 0.05, // Adjust based on screen height
        left: windowWidth * 0.03, // Adjust based on screen width
        padding: windowWidth * 0.04, // Adjust based on screen width
        borderRadius: windowWidth * 0.01, // Adjust based on screen width
    },
});

export default PomodoroTimer;
