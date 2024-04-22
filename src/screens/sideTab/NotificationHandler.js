import React, { useState, useEffect } from "react";
import {Text, TouchableOpacity} from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { addMinutes } from "date-fns";
import colors from "../../constants/colors";
import {windowHeight, windowWidth} from "../../constants/dimensions";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const NotificationHandler = ({}) => {
    const [expoPushToken, setExpoPushToken] = useState("");

    useEffect(() => {
        console.log("Registering for push notifications...");
        registerForPushNotificationsAsync()
            .then((token) => {
                console.log("token: ", token);
                setExpoPushToken(token);
            })
            .catch((err) => console.log(err));
    }, []);

    async function registerForPushNotificationsAsync() {
        let token = (await Notifications.getExpoPushTokenAsync({ projectId: "peacefulPal-mobileApp" })).data;

        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== "granted") {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== "granted") {
                alert("Failed to get push token for push notification!");
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
        } else {
            alert("Must use physical device for Push Notifications");
        }

        return token;
    }

    const scheduleNotification = async () => {
        console.log("Scheduling push notification...");

        // Set notification schedule
        const now = new Date();
        const futureDate = addMinutes(now, 1);
        const scheduleDate = futureDate.getTime();

        const message = {
            content: {
                title: "PeacefulPal",
                body: "Reminder to have a calming session today",
            },
            trigger: {
                date: scheduleDate,
            },
        };

        await Notifications.scheduleNotificationAsync({
            content: message.content,
            trigger: message.trigger,
        });
    };

    return (
        <TouchableOpacity style={{
            alignItems: "center",
            backgroundColor: colors.BottomButton,
            top: windowHeight * 0.01,
            width: windowWidth * 0.5,
            shadowColor: '#000',
            shadowOffset: { width: windowWidth * 0.005, height: windowHeight * 0.005 },
            shadowOpacity: 0.25,
            shadowRadius: windowWidth * 0.01,
            elevation: 5,
            padding: 8,
            borderRadius: windowWidth * 0.01,
            }} onPress={scheduleNotification}>
            <Text style={{color: colors.white}}>Send test push notification</Text>
        </TouchableOpacity>
    );
};


export default NotificationHandler;
