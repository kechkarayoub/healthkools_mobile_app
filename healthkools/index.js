/**
 * @format
 */

import 'react-native-gesture-handler';
import App from './App';
import { AppRegistry, StyleSheet } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';


const RootApp = () => (
    <NavigationContainer style={styles.navigationStyle}>
      <App />
    </NavigationContainer>
);
  
const styles = StyleSheet.create({
    navigationStyle: {
      flex: 1,
    },
});

AppRegistry.registerComponent(appName, () => RootApp);
