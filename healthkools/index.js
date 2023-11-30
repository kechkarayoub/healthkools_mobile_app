/**
 * @format
 */

import 'react-native-gesture-handler';
import App from './App';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';


const RootApp = () => (
  <View  style={styles.navigationStyle} >
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </View>
);
  
const styles = StyleSheet.create({
    navigationStyle: {
      flex: 1,
    },
});

AppRegistry.registerComponent(appName, () => RootApp);
