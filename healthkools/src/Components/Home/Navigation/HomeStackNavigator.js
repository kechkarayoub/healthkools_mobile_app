import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'src/Components/Home/Components/SignIn';
import SignUp from 'src/Components/Home/Components/SignUp';
import React from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import {t} from 'src/i18n';
import { StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();
class HomeStackNavigator extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        current_language: props.current_language,
      };
      this.registration_label = t("Sign up");
      if(!t("Arabic")){
        // Initialize t translation function) if it is not initistialised
        setTimeout(() => {
          this.setState({current_language: this.state.current_language});
          this.registration_label = t("Sign up");
        }, 10);
      }
    }
    static getDerivedStateFromProps(props, state) {
      var new_state = {};
      var return_new_state = false;
      if (props.current_language !== state.current_language) {
        new_state.current_language = props.current_language;
        return_new_state = true;
      }
      return return_new_state ? new_state : null;
    }
    componentDidUpdate(prevProps, prevState){
      var new_state = {}, set_state = false;
      if(prevState.current_language !== this.state.current_language){
        new_state.current_language = this.state.current_language;
        set_state = true;
        this.registration_label = t("Sign up");
      }
      if(set_state){
        this.setState(new_state);
      }
    }
    // static get propTypes() {
    //   return {
    //       current_language: PropTypes.string
    //   };
    // }
    // static getDerivedStateFromProps(props, state) {
    //  var new_state = {};
    //  var return_new_state = false;
    //  if () {
    //  }
    //  return return_new_state ? new_state : null;
    // }
    // componentDidUpdate(prevProps, prevState){
    // }
    render() {
      return (
        <NavigationContainer style={styles.navigationStyle}>
          <Stack.Navigator initialRouteName={"SignIn"} screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name="SignIn" options={{title: t("Sign in")}}>
              {props => <SignIn {...props} t={t}/>}
            </Stack.Screen>
            <Stack.Screen name="SignUp" options={{title: this.registration_label}}>
              {props => <SignUp {...props} t={t} registration_label={this.registration_label} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
}
const styles = StyleSheet.create({
    navigationStyle: {
      flex: 1,
    },
});
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}
export default connect(mapStateToProps)(HomeStackNavigator);
