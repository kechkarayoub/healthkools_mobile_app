import React from 'react';
import { ScrollView, StyleSheet, View, Alert, ImageBackground, } from 'react-native';
import CustomInputText from 'src/Components/FormFields/CustomInputText';
// import CustomDatePicker1 from 'src/Components/FormFields/CustomDatePicker1';
import CustomDatePicker from 'src/Components/FormFields/CustomDatePicker';
import CustomTextArea from 'src/Components/FormFields/CustomTextArea';
import CustomPhoneNumber from 'src/Components/FormFields/CustomPhoneNumber';
import CustomCountriesSelect from 'src/Components/FormFields/CustomCountriesSelect';
import CustomTouchableOpacity from 'src/Components/FormFields/CustomTouchableOpacity';
import CustomTSNotice from 'src/Components/Common/CustomTSNotice';
//import InitialsColor from 'src/Components/Common/InitialsColor';
import {get_contry_by_code} from "src/utils/countries_list";
import { get_geo_info, check_if_email_or_username_exists_api_get } from 'src/services/api';
// import {set_locale, t} from src/i18n'
import { connect } from 'react-redux'
import {t} from 'src/i18n';
import PropTypes from 'prop-types';
import moment from 'moment';
import {COLORS} from "src/variables/colors";
import {icons, logos} from "src/_ressources";
import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';
import { get_random_color} from "src/utils/index";
import Config from 'react-native-config';

const phoneUtil = PhoneNumberUtil.getInstance();
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      birthday: moment().add(-30, "years").toDate(),
      country_code: "",
      country_phone_code: "",
      current_language: props.current_language,
      country_name: "",
      email: "",
      error_messages: {},
      first_name: "",
      form_errors: {},
      gender: "",
      initials_bg_color: get_random_color(),
      invalid_messages: {},
      is_valid_phone_number: false,
      last_name: "",
      password: "",
      password_sign_in: "",
      password_confirmation: "",
      phone_number: "",
      registration_label: props.registration_label,
      formatted_phone_number: "",
      username: "",
      valid_messages: {},
    }
    this.geo_info_api_done = true;
    this.getGeoInfo();
    if(!t("Arabic")){
      // Initialize t translation function) if it is not initistialised
      setTimeout(() => {
        this.setState({current_language: this.state.current_language});
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
    if (props.registration_label !== state.registration_label) {
      new_state.registration_label = props.registration_label;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  getGeoInfo = () => {
    if(this.geo_info_api_done){
      this.geo_info_api_done = false;
      const api_key = Config.REACT_APP_GEOLOCATION_DB_API_KEY;
      get_geo_info(api_key).then(res => {
        this.geo_info_api_done = true;
        var selected_country = res.country_code && get_contry_by_code(res.country_code);
        this.setState({
          country_code: res.country_code,
          country_phone_code: selected_country.phone_code_str,
        });
      })
      .catch(err => {
        this.geo_info_api_done = true;
      });
    }
  }
  static propTypes = {
    current_language: PropTypes.string,
    registration_label: PropTypes.string,
    navigation: PropTypes.oneOfType([
      PropTypes.object,
    ]),
  }
  static defaultProps = {
    current_language: 'en',
    registration_label: 'Sign up',
    navigation: null,
  }
  componentDidUpdate(prevProps, prevState){
    var new_state = {}, set_state = false;
    if(prevState.current_language !== this.state.current_language){
      new_state.current_language = this.state.current_language;
      set_state = true;
    }
    if(prevState.registration_label !== this.state.registration_label){
      new_state.registration_label = this.state.registration_label;
      set_state = true;
    }
    // else if(Object.keys(prevState.form_errors).join("_") !== Object.keys(this.state.form_errors).join("_")){
    //   new_state.form_errors = this.state.form_errors;
    //   set_state = true;
    // }
    if(set_state){
      this.setState(new_state);
    }
  }
  onClickListener = (viewId) => {
    // if("restore_password" == viewId){
    //   set_locale("ar");
    //   current_language = "ar";
    // }
    // else{
    //   set_locale("fr");
    //   current_language = "fr";
    // }
    // this.setState({"current_language": current_language})
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  handleRegister = () => {
    var {formatted_phone_number, phone_number, initials_bg_color} = this.state;
    var phone_number_valid = false;
    if(formatted_phone_number){
      try {phone_number_valid = phoneUtil.isValidNumber(phoneUtil.parse(formatted_phone_number));}catch (error){}
    }
  }

  render() {
    const {address, birthday, country_code, country_phone_code, current_language, registration_label, email,
      form_errors, first_name, initials_bg_color,
      last_name, password, password_confirmation, phone_number, formatted_phone_number,
      username, is_valid_phone_number} = this.state;

    return (
        <View style={styles.body}>
          <ImageBackground source={logos.logo} style={styles.background}/>
          <ScrollView contentContainerStyle={styles.scrollView}>
              {/* <InitialsColor initials={(last_name ? last_name.charAt(0) : "") + (first_name ? first_name.charAt(0) : "")} bg_color={initials_bg_color}
              /> */}

              <CustomInputText placeholder={t("First name")} underlineColorAndroid='transparent'
                onChangeText={first_name => {
                  // this.state.form_errors.first_name = "this field is required!";
                  // this.state.form_errors.last_name = "this field is required!";
                  // this.state.form_errors.country_code = "this field is required!";
                  // this.state.form_errors.email = "this field is required!";
                  // this.state.form_errors.username = "this field is required!";
                  // this.state.form_errors.password = "this field is required!";
                  // this.state.form_errors.password_confirmation = "this field is required!";
                  // this.state.form_errors.phone_number = "this field is required!";
                  // this.state.form_errors.address = "this field is required!";
                  // this.state.form_errors.birthday = "this field is required!";
                  var new_state = {first_name: first_name};
                  delete this.state.form_errors.first_name;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }}
                icon_url={icons.nameIcon} value={first_name} current_language={current_language}
                test_id={"first_name"} type_input="first_name" iconStyle={{height:20}}
                form_error={form_errors.first_name}
              />
              <CustomInputText placeholder={t("Last name")} underlineColorAndroid='transparent'
                onChangeText={last_name => {
                  var new_state = {last_name: last_name};
                  delete this.state.form_errors.last_name;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }}
                icon_url={icons.nameIcon} value={last_name} current_language={current_language}
                test_id={"last_name"} type_input="last_name" iconStyle={{height:20}}
                form_error={form_errors.last_name}
              />
              <CustomInputText placeholder={t("Email")} underlineColorAndroid='transparent'
                onChangeText={email => {
                  var new_state = {email: email};
                  delete this.state.form_errors.email;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }} value={email}
                icon_url={icons.emailIcon}  iconStyle={{height:26, width: 25, marginRight: 18}}
                current_language={current_language} test_id={"email"}  type_input="email"
                form_error={form_errors.email}
              />
              <CustomInputText placeholder={t("Username")} underlineColorAndroid='transparent'
                onChangeText={username => {
                  var new_state = {username: username};
                  delete this.state.form_errors.username;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }} value={username}
                icon_url={icons.usernameIcon}
                current_language={current_language} test_id={"username"} type_input="username"
                form_error={form_errors.username}
              />
              <CustomInputText placeholder={t("Password")} underlineColorAndroid='transparent' secureTextEntry={true}
                onChangeText={password => {
                  var new_state = {password: password};
                  delete this.state.form_errors.password;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }}
                icon_url={icons.passwordIcon} value={password} current_language={current_language}
                test_id={"password"} type_input="password"  iconStyle={{height:28, width: 24, marginRight: 18}}
                form_error={form_errors.password}
              />
              <CustomInputText placeholder={t("Confirm password")} underlineColorAndroid='transparent' secureTextEntry={true}
                onChangeText={password_confirmation => {
                  var new_state = {password_confirmation: password_confirmation};
                  delete this.state.form_errors.password_confirmation;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }}
                icon_url={icons.passwordIcon} value={password_confirmation} current_language={current_language}
                test_id={"password_confirmation"} type_input="password" iconStyle={{height:28, width: 24, marginRight: 18}}
                form_error={form_errors.password_confirmation}
              />
              <CustomCountriesSelect placeholder={t("Country")} underlineColorAndroid='transparent'
                onSelect={(country_code) => {
                  var new_state = {country_code: country_code};
                  if(country_code && !this.state.phone_number){
                    var selected_country = country_code && get_contry_by_code(country_code);
                    if(selected_country){
                      new_state.country_phone_code = selected_country.phone_code_str;
                    }
                  }
                  delete this.state.form_errors.country_code;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }} value={country_code}
                icon_url={icons.countryIcon} iconStyle={{width: 24, marginRight: 18}}
                current_language={current_language} test_id={"country"} type_select="country"
                form_error={form_errors.country_code}
              />
              <CustomPhoneNumber country_search_place_holder={t("Search by country or by code")} placeholder={t("Phone number")} underlineColorAndroid='transparent'
                onChangeText={(phone_number, country_phone_code) => {
                  var new_state = {phone_number: phone_number, country_phone_code: country_phone_code};
                  delete this.state.form_errors.phone_number;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }} value={phone_number}
                icon_url={icons.phoneIcon} iconStyle={{width: 25, marginRight: 10}} disabled={false} country_phone_code={country_phone_code}
                current_language={current_language} test_id={"phone_number"} type_phone_number="phone" is_valid_phone_number={is_valid_phone_number}
                form_error={form_errors.phone_number}
              />
              <CustomTextArea placeholder={t("Address")} underlineColorAndroid='transparent'
                onChangeText={address => {
                  var new_state = {address: address};
                  delete this.state.form_errors.address;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }} value={address}
                icon_url={icons.addressIcon} multiline={true}
                current_language={current_language} test_id={"address"} numberOfLines={2} type_textarea="address"
                form_error={form_errors.address}
              />
              {/*<CustomDatePicker1 disabled={false} display={"default"} placeholder={t("Birthday")}
                onChange={birthday => {
                  var new_state = {birthday: birthday};
                  delete this.state.form_errors.birthday;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }} value={birthday}
                icon_url={icons.birthdayIcon}
                current_language={current_language} test_id={"birthday"} type_date="birthday"
                form_error={form_errors.birthday}
              />
              */}
              <CustomDatePicker disabled={false} placeholder={t("Birthday")}
                mode={"date"} maximumDate={moment().toDate()}
                minimumDate={null}
                onChange={birthday => {
                  var new_state = {birthday: birthday};
                  delete this.state.form_errors.birthday;
                  new_state.form_errors = this.state.form_errors;
                  this.setState(new_state);
                }} value={birthday}
                icon_url={icons.birthdayIcon}
                current_language={current_language} test_id={"birthday"} type_date="birthday"
                form_error={form_errors.birthday}
              />
              <CustomTSNotice {...this.props} current_language={current_language} registration_label={registration_label} />
              <CustomTouchableOpacity onPress={() => this.onClickListener('register')}
                text={t("Sign up")} style={styles.loginButton}
              />
              <CustomTouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}
                text={t("Sign in")} style={styles.loginButton}
              />
          </ScrollView>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    body: {
      backgroundColor: COLORS.default_color,
      flex: 1,
      justifyContent: 'center',
    },
    scrollView: {
      alignItems: 'center',
      flexGrow: 1,
      width: '100%',
      paddingTop: 10,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
      elevation: 19, // works on android
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
    },
    background: {
      height: '100%',
      opacity: 0.2,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
});
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language
  }
}
export default connect(mapStateToProps)(SignUp);
