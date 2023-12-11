import CustomCountriesSelect from 'src/Components/FormFields/CustomCountriesSelect';
import CustomDatePicker from 'src/Components/FormFields/CustomDatePicker';
import CustomInputText from 'src/Components/FormFields/CustomInputText';
import CustomPhoneNumber from 'src/Components/FormFields/CustomPhoneNumber';
import CustomTextArea from 'src/Components/FormFields/CustomTextArea';
import CustomTouchableOpacity from 'src/Components/FormFields/CustomTouchableOpacity';
import CustomTSNotice from 'src/Components/Common/CustomTSNotice';
import Config from 'react-native-config';
import LanguagePicker from 'src/Components/Common/LanguagePicker';
//import InitialsColor from 'src/Components/Common/InitialsColor';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Alert, ImageBackground, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from "src/variables/colors";
import { connect } from 'react-redux'
import { get_contry_by_code } from "src/utils/countries_list";
import { get_geo_info, check_if_email_or_username_exists_api_get } from 'src/services/api';
import { get_random_color } from "src/utils/index";
import { icons, logos } from "src/_ressources";
import { PhoneNumberUtil } from 'google-libphonenumber';
import { t } from 'src/i18n';

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
      formatted_phone_number: "",
      gender: "",
      initials_bg_color: get_random_color(),
      invalid_messages: {},
      is_portrait: props.is_portrait,
      is_valid_phone_number: false,
      last_name: "",
      password: "",
      password_sign_in: "",
      password_confirmation: "",
      phone_number: "",
      registration_label: props.registration_label,
      username: "",
      valid_messages: {},
    }
    this.geo_info_api_done = true;
    this.get_geolocation_info();
    if(!t("Arabic")){
      // Initialize t translation function if it is not initistialised
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
    if (props.is_portrait !== state.is_portrait) {
      new_state.is_portrait = props.is_portrait;
      return_new_state = true;
    }
    if (props.registration_label !== state.registration_label) {
      new_state.registration_label = props.registration_label;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  get_geolocation_info = () => {
    // get country code & country phone code from geolocation db api
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
    is_portrait: PropTypes.bool,
    navigation: PropTypes.oneOfType([
      PropTypes.object,
    ]),
    registration_label: PropTypes.string,
  }
  
  static defaultProps = {
    current_language: 'en',
    is_portrait: true,
    navigation: null,
    registration_label: 'Sign up',
  }

  componentDidUpdate(prevProps, prevState){
    var new_state = {}, set_state = false;
    if(prevState.current_language !== this.state.current_language){
      new_state.current_language = this.state.current_language;
      set_state = true;
    }
    if(prevState.is_portrait !== this.state.is_portrait){
      new_state.is_portrait = this.state.is_portrait;
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
    const {address, birthday, country_code, country_phone_code, current_language, email, formatted_phone_number,
      form_errors, first_name, is_portrait, is_valid_phone_number, initials_bg_color,
      last_name, password, password_confirmation, phone_number, registration_label,
      username
    } = this.state;

    return (
      <View style={styles.body}>
        <ImageBackground source={logos.logo} style={styles.background}/>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={{marginTop: 70}}></View>
          <LanguagePicker list_mode="SCROLLVIEW" />
          {/* <InitialsColor initials={(last_name ? last_name.charAt(0) : "") + (first_name ? first_name.charAt(0) : "")} bg_color={initials_bg_color}
          /> */}

          <CustomInputText 
            current_language={current_language}
            form_error={form_errors.first_name}
            icon_url={icons.nameIcon} 
            iconStyle={{height: 20}}
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
            placeholder={t("First name")}
            test_id={"first_name"} 
            type_input="first_name" 
            underlineColorAndroid='transparent'
            value={first_name} 
          />
          <CustomInputText 
            current_language={current_language}
            form_error={form_errors.last_name}
            icon_url={icons.nameIcon} 
            iconStyle={{height:20}}
            onChangeText={last_name => {
              var new_state = {last_name: last_name};
              delete this.state.form_errors.last_name;
              new_state.form_errors = this.state.form_errors;
              this.setState(new_state);
            }}
            placeholder={t("Last name")} 
            test_id={"last_name"} 
            type_input="last_name" 
            underlineColorAndroid='transparent'
            value={last_name}
          />
          <CustomInputText 
            current_language={current_language} 
            form_error={form_errors.email}
            icon_url={icons.emailIcon} 
            iconStyle={{height:26, width: 25, marginRight: 18}}
            onChangeText={email => {
              var new_state = {email: email};
              delete this.state.form_errors.email;
              new_state.form_errors = this.state.form_errors;
              this.setState(new_state);
            }} 
            placeholder={t("Email")}
            test_id={"email"} 
            type_input="email"
            underlineColorAndroid='transparent'
            value={email}
          />
          <CustomInputText 
            current_language={current_language} 
            form_error={form_errors.username}
            icon_url={icons.usernameIcon}
            onChangeText={username => {
              var new_state = {username: username};
              delete this.state.form_errors.username;
              new_state.form_errors = this.state.form_errors;
              this.setState(new_state);
            }} 
            placeholder={t("Username")} 
            test_id={"username"} 
            type_input="username"
            underlineColorAndroid='transparent'
            value={username}
          />
          <CustomInputText 
            current_language={current_language}
            form_error={form_errors.password}
            icon_url={icons.passwordIcon} 
            iconStyle={{height:28, width: 24, marginRight: 18}}
            onChangeText={password => {
              var new_state = {password: password};
              delete this.state.form_errors.password;
              new_state.form_errors = this.state.form_errors;
              this.setState(new_state);
            }}
            placeholder={t("Password")} 
            secureTextEntry={true}
            test_id={"password"} 
            type_input="password" 
            underlineColorAndroid='transparent' 
            value={password} 
          />
          <CustomInputText 
            current_language={current_language}
            form_error={form_errors.password_confirmation}
            icon_url={icons.passwordIcon} 
            iconStyle={{height:28, width: 24, marginRight: 18}}
            onChangeText={password_confirmation => {
              var new_state = {password_confirmation: password_confirmation};
              delete this.state.form_errors.password_confirmation;
              new_state.form_errors = this.state.form_errors;
              this.setState(new_state);
            }}  
            placeholder={t("Confirm password")} 
            secureTextEntry={true}
            test_id={"password_confirmation"} 
            type_input="password"
            underlineColorAndroid='transparent' 
            value={password_confirmation}
          />
          <CustomCountriesSelect 
            current_language={current_language} 
            form_error={form_errors.country_code}
            icon_url={icons.countryIcon} 
            iconStyle={{width: 24, marginRight: 18}}
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
            }} 
            placeholder={t("Country")} 
            test_id={"country"} 
            type_select="country"
            underlineColorAndroid='transparent'
            value={country_code} 
          />
          <CustomPhoneNumber 
            country_phone_code={country_phone_code}
            current_language={current_language}
            disabled={false}
            form_error={form_errors.phone_number}
            icon_url={icons.phoneIcon} 
            iconStyle={{width: 25, marginRight: 10}}
            is_valid_phone_number={is_valid_phone_number}
            country_search_place_holder={t("Search by country or by code")}
            onChangeText={(phone_number, country_phone_code) => {
              var new_state = {phone_number: phone_number, country_phone_code: country_phone_code};
              delete this.state.form_errors.phone_number;
              new_state.form_errors = this.state.form_errors;
              this.setState(new_state);
            }} 
            placeholder={t("Phone number")} 
            test_id={"phone_number"} 
            type_phone_number="phone"
            underlineColorAndroid='transparent'
            value={phone_number} 
          />
          <CustomTextArea 
            current_language={current_language}  
            form_error={form_errors.address}
            icon_url={icons.addressIcon} 
            multiline={true}
            numberOfLines={2}
            onChangeText={address => {
              var new_state = {address: address};
              delete this.state.form_errors.address;
              new_state.form_errors = this.state.form_errors;
              this.setState(new_state);
            }} 
            placeholder={t("Address")}
            test_id={"address"}
            type_textarea="address"
            underlineColorAndroid='transparent'
            value={address}
          />
          <CustomDatePicker 
            current_language={current_language} 
            form_error={form_errors.birthday}
            icon_url={icons.birthdayIcon}
            maximumDate={moment().toDate()}
            minimumDate={null}
            mode={"date"} 
            onChange={birthday => {
              var new_state = {birthday: birthday};
              delete this.state.form_errors.birthday;
              new_state.form_errors = this.state.form_errors;
              this.setState(new_state);
            }}
            placeholder={t("Birthday")}
            test_id={"birthday"} 
            type_date="birthday"
            value={birthday}
          />
          <CustomTSNotice {...this.props} current_language={current_language} is_portrait={is_portrait} registration_label={registration_label} />
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
  background: {
    height: '100%',
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  body: {
    backgroundColor: COLORS.default_color,
    flex: 1,
    justifyContent: 'center',
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
  scrollView: {
    alignItems: 'center',
    flexGrow: 1,
    width: '100%',
    paddingTop: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
    is_portrait: state.is_portrait,
  }
}

export default connect(mapStateToProps)(SignUp);
