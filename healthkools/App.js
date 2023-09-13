/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';


//import Store from 'src/Store/configureStore'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux'
import Store from 'src/Store/configureStore'
import AppInit from 'src/AppInit'
//import { enableScreens } from 'react-native-screens';
//enableScreens();

//import { REACT_APP_URL_WS } from '@env';


function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { isI18nInitialized: false };
  }
  componentDidMount() {
  }
  render(){
    return (
      <Provider store={Store}>
          <AppInit/>
      </Provider>
    );
  }
}


export default App;
