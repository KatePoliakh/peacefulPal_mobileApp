/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
/*export default function MainComponent() {
  const [fontsLoaded] = useFonts({
    'Raleway': require('./assets/fonts/Raleway-VariableFont_wght.ttf'), // adjust the path to your font file as needed
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Startpage />;
}*/
/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
