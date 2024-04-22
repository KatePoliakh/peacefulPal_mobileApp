import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../constants/colors";
import { windowHeight, windowWidth } from "../constants/dimensions";

const CustomButton = ({ onPress, label }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.BottomButton,
        paddingVertical: windowWidth * 0.05, // Adjust padding based on window width
        paddingHorizontal: windowWidth * 0.1, // Adjust padding based on window width
        borderRadius: windowWidth * 0.03, // Adjust border radius based on window width
        marginBottom: windowHeight * 0.05, // Adjust margin based on window height
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: RFValue(16), // Responsive font size
        color: '#fff',
    },
});

export default CustomButton;
