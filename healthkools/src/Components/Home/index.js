import HomeStackNavigator from 'src/Components/Home/Navigation/HomeStackNavigator';
import LanguagePicker from 'src/Components/Common/LanguagePicker';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from "src/variables/colors";
import { StatusBar, StyleSheet, View } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_view: 'sign_in',
    };
  }
  

  static propTypes = {
    current_language: PropTypes.string,
  }
  static defaultProps = {
    current_language: 'en',
  }

  render() {
    return (
      <View style={styles.home}>
        <LanguagePicker />
        <HomeStackNavigator t={this.props.t}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    home: {
      backgroundColor: COLORS.default_color,
      flex: 1,
      //paddingTop: StatusBar.currentHeight,
    },
});

export default Home;
