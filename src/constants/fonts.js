import * as Font from 'expo-font';

const fetchFonts = () => {
    return Font.loadAsync({
      'Raleway': require('../assets/fonts/Raleway-VariableFont_wght.ttf'),
      'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
    });
  };
