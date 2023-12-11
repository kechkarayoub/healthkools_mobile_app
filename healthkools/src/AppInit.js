import Home from 'src/Components/Home';
import i18n from 'src/i18n';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { COLORS } from "src/variables/colors";
import { connect } from 'react-redux'
import { get_current_language } from 'src/utils'
import { Dimensions, I18nManager as RNI18nManager, Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { I18nextProvider } from 'react-i18next';

class AppInit extends Component{
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
    };
    this.updateOrientation = this.updateOrientation.bind(this);
    get_current_language(current_language => {
      if(this.state.current_language !== current_language){
        const action = { type: "CHANGE_LANGUAGE", value: current_language }
        this.props.dispatch(action);
      }
    });
  }

  componentDidMount() {
    this.handleInitLanguage();
    Dimensions.addEventListener('change', this.updateOrientation);
    this.updateOrientation();
  }
  componentWillUnmount() {
    if(Dimensions.removeEventListener){ // Sometimes Dimensions.removeEventListener become undefined what generate an error
      Dimensions.removeEventListener('change', this.updateOrientation);
    }
  }

  updateOrientation = () => {
    const { width, height } = Dimensions.get('window');
    let is_portrait = height >= width;
    if(is_portrait !== this.state.is_portrait){
      const action = { type: "CHANGE_DIMENTIONS", value: is_portrait };
      //console.log('new dimentions. is portrait: ', is_portrait);
      this.props.dispatch(action);
    }
  };
  
  static propTypes = {
    current_language: PropTypes.string,
    is_portrait: PropTypes.bool,
  }
  
  static defaultProps = {
    current_language: 'en',
    is_portrait: true,
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
    if(prevState.current_language != this.state.current_language){
      this.handleInitLanguage(true);
    }
  }

  handleInitLanguage = (reload) => {
      i18n.init(this.state.current_language)
          .then(() => {
              const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';
              // RN doesn't always correctly identify native
              // locale direction, so we force it here.
              if (i18n.dir !== RNDir) {
                  const isLocaleRTL = i18n.dir === 'RTL';
                  //RNI18nManager.forceRTL(isLocaleRTL);
                  // RN won't set the layout direction if we
                  // don't restart the app's JavaScript.
                  // if(reload){
                  //   // Trigger a reload of the app (similar to Expo updates)
                  //   DevSettings.reload();
                  // }
              }
              i18n.services.pluralResolver.addRule('pl', {
                numbers: [1, 2, 3],
                plurals: function (n) {
                  return Number(
                    n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
                  );
                },
              });
              this.setState({ isI18nInitialized: true });
          })
          .catch((error) => console.warn(error));
  }

  render(){
    return (
      <I18nextProvider i18n={i18n}>
        <SafeAreaView  style={{ backgroundColor: COLORS.default_color, flex: 1 }}>
          <View style={styles.container}>
            {Platform.OS === 'android' && (
              <View
                style={{
                  height: StatusBar.currentHeight,
                  backgroundColor: COLORS.default_color,
                }}
              >
                <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
              </View>
            )}
            <Home />
          </View>
        </SafeAreaView>
      </I18nextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
    is_portrait: state.is_portrait,
  }
}

export default connect(mapStateToProps)(AppInit);
