import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
      'Raleway': require('../assets/fonts/Raleway-VariableFont_wght.ttf'), // adjust the path to your font file as needed
    });
  };
