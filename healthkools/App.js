/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppInit from 'src/AppInit'
import React, {Component} from 'react';
import Store from 'src/Store/configureStore'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux'
import { Text, useColorScheme, View } from 'react-native';

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
