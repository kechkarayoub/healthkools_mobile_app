import CloseButton from 'src/Components/Common/CloseButton';
import CustomInputText from 'src/Components/FormFields/CustomInputText';
import CustomTouchableOpacityWithIcon from 'src/Components/FormFields/CustomTouchableOpacityWithIcon';
import ErrorComponent from "src/Components/Common/ErrorComponent";
import Flag from 'react-native-flags';
import Overlay from 'react-native-modal-overlay';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { get_countries, get_contry_by_code } from "src/utils/countries_list";
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

class CustomPhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    var country_phone_code = props.country_phone_code;
    this.state = {
      country_phone_code: country_phone_code,
      country_search_place_holder: props.country_search_place_holder,
      country_select_test_id: props.country_select_test_id,
      current_language: props.current_language,
      disabled: props.disabled,
      form_error: props.form_error,
      icon_url: props.icon_url,
      is_valid_phone_number: props.is_valid_phone_number,
      is_visible_code_select: false,
      searched_country: '',
      selected_country: props.country_phone_code && get_contry_by_code(props.country_phone_code),
      test_id: props.test_id,
      type_phone_number: props.type_phone_number,
      underlineColorAndroid: props.underlineColorAndroid,
      value: props.value,
    };
    this.all_countries = get_countries(this.state.current_language);
    this.searched_list = this.all_countries;
  }

  static propTypes = {
    current_language: PropTypes.string,
    country_phone_code: PropTypes.string,
    country_search_place_holder: PropTypes.string,
    country_select_test_id: PropTypes.string,
    disabled: PropTypes.bool,
    form_error: PropTypes.string,
    icon_url: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    iconStyle: PropTypes.object,
    is_valid_phone_number: PropTypes.bool,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    test_id: PropTypes.string,
    type_phone_number: PropTypes.string,
    underlineColorAndroid: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    current_language: '',
    country_phone_code: '',
    country_search_place_holder: '',
    country_select_test_id: 'country_select_test_id',
    disabled: false,
    form_error: "",
    icon_url: null,
    iconStyle: {},
    is_valid_phone_number: true,
    onChangeText: () => {},
    placeholder: '',
    style: {},
    test_id: 'test_id',
    type_phone_number: 'mobile',
    underlineColorAndroid: 'transparent',
    value: '',
  }

  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    if(props.form_error !== state.form_error) {
      new_state.form_error = props.form_error;
      return_new_state = true;
    }
    if (props.value !== state.value) {
      new_state.value = (props.onChangeText ? props : state).value;
      return_new_state = true;
    }
    if (!state.value && props.country_phone_code !== state.country_phone_code) {
      new_state.country_phone_code = (props.onChangeText ? props : state).country_phone_code;
      new_state.selected_country = props.country_phone_code && get_contry_by_code(new_state.country_phone_code);
      return_new_state = true;
    }
    if (props.disabled !== state.disabled) {
      new_state.disabled = props.disabled;
      return_new_state = true;
    }
    if (props.is_valid_phone_number !== state.is_valid_phone_number) {
      new_state.is_valid_phone_number = props.is_valid_phone_number;
      return_new_state = true;
    }
    if (props.placeholder !== state.placeholder) {
      new_state.placeholder = props.placeholder;
      return_new_state = true;
    }
    if (props.country_search_place_holder !== state.country_search_place_holder) {
      new_state.country_search_place_holder = props.country_search_place_holder;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.current_language !== this.state.current_language){
      this.all_countries = get_countries(this.state.current_language);
      this.searched_list = this.all_countries;
    }
  }
  componentDidMount () {
  }

  openSelectCountry () {
    this.setState({
      is_visible_code_select: true,
    });
  }

  closeOverlay = () => {
    this.searched_list = this.all_countries;
    this.setState({
      is_visible_code_select: false,
      searched_country: '',
    });
  }

  selectCountry = (item) => {
    this.setState({
      country_phone_code: item.phone_code_str,
      is_visible_code_select: false,
      selected_country: item,
    });
    if(this.props.onChangeText){
      this.props.onChangeText(this.state.value, item.phone_code_str);
    }
  }

  keyExtractor = (item, index) => {
    return index.toString();
  }

  renderItem = ({ item }) => {
    return <View style={styles.CountryItemStyle}>
      <Flag code={item.country_code} size={32}  onPress={() => this.selectCountry(item)}/>
      <Text style={styles.CountryItemNameStyle}  onPress={() => this.selectCountry(item)}>{item.translations[this.state.current_language]} ({item.phone_code_str})</Text>
    </View>
  }

  updateSearch = searched_text => {
    // Search countries by code or by name
    this.searched_list = this.all_countries.filter(item => {
      const itemName = item.translations[this.state.current_language].toLowerCase();
      const itemCode = item.phone_code_str.toLowerCase();
      const textData = searched_text.toLowerCase();
      return (itemName.indexOf(textData) > -1 || itemCode.indexOf(textData) > -1);
    });
    this.setState({ searched_country: searched_text });
  }

  inputTextChange = number => {
    if(this.props.onChangeText){
      this.props.onChangeText(number, this.state.country_phone_code);
    }
  }

  render() {
    const { country_search_place_holder, country_select_test_id, disabled, form_error, icon_url, is_valid_phone_number, 
      is_visible_code_select, placeholder, searched_country, selected_country, test_id, underlineColorAndroid, value
    } = this.state;
    return (
      <View style={[styles.componentContainer, form_error ? styles.errorStyle : {}]}>
        <View style={[styles.codeNumberContainerStyle, form_error ? styles.errorStyleCodeNumberContainer : {}]} >
          <View style={styles.buttonCodeContainerStyle} >
            <CustomTouchableOpacityWithIcon 
              icon_name="caret-down"
              onPress={() => this.openSelectCountry()}
              style={styles.buttonCodeStyle}
              text={selected_country ? selected_country.phone_code_str || "" : ''} 
              textStyle={styles.buttonSelectCountryStyle}
              test_id={country_select_test_id}
            />
          </View>
          <View style={styles.phoneInputContainerStyle}>
            <CustomInputText 
              containerStyle={styles.phoneInputContainerStyle2}
              iconStyle={[styles.inputIcon, this.props.iconStyle]}
              keyboardType='number-pad' icon_url={icon_url} 
              onChangeText={(text) => {
                if(this.props.onChangeText){
                  this.inputTextChange(text);
                } 
                else{
                  this.setState({value: text});
                }
              }}
              placeholder={placeholder} 
              style={styles.phoneInputStyle}
              test_id={test_id} 
              type_input="phone_number"
              value={value} 
              underlineColorAndroid={underlineColorAndroid}
            />
          </View>
          {form_error &&
            <ErrorComponent error={form_error} />
          }
        </View>
        <Overlay
          closeOnTouchOutside={true}
          fullScreen
          onClose={this.closeOverlay}
          visible={is_visible_code_select}
        >
          <View style={styles.overlayContainer}>
            <View style={styles.searchCloseContainer}>
              <View style={styles.searchBarContainerStyle}>
                <CustomInputText 
                  containerStyle={styles.searchBarInputContainerStyle}
                  onChangeText={this.updateSearch} 
                  placeholder={country_search_place_holder}
                  value={searched_country} 
                  style={styles.searchBarInputStyle}
                  test_id={"search_country_code"} 
                  type_input="search_country_code"
                  underlineColorAndroid={underlineColorAndroid}
                />
              </View>
              <CloseButton name='close'  containerStyle={styles.iconCloseStyle} onPress={this.closeOverlay} />
            </View>
            <FlatList
              data={this.searched_list}
              keyboardShouldPersistTaps='handled'
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              style={{flex:1}}
            />
          </View>
        </Overlay>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  buttonCodeContainerStyle: {
    display: 'flex',
    flexDirection:'row',
    height: 45,
    width: 60,
  },
  buttonCodeStyle: {
    height: 45,
    width: 60,
  },
  buttonSelectCountryStyle: {
    alignItems: 'center',
    color: 'black',
    flex: 1,
    fontSize: 16,
    justifyContent: 'center'
  },
  codeNumberContainerStyle: {
    borderBottomColor: '#FFFFFF',
    flex:1,
    flexDirection: 'row',
    height:45,
    marginLeft:5,
    marginRight:5,
  },
  componentContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F5FCFF',
    borderBottomWidth: 0,
    borderRadius: 30,
    display: 'flex',
    elevation: 5, // works on android
    flexDirection: 'row',
    height: 45,
    marginBottom: 20,
    shadowColor: "#808080",
    shadowOffset: {
     height: 2,
     width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 300,
  },
  CountryItemNameStyle: {
    marginLeft: 5,
    marginTop: 5,
  },
  CountryItemStyle: {
    flexDirection: 'row'
  },
  errorStyle: {
    height: 60,
  },
  errorStyleCodeNumberContainer: {
    height: 60,
    paddingBottom: 10,
  },
  iconCloseStyle: {
    height: 50,
    width: 50,
  },
  inputIcon:{
    height:25,
    justifyContent: 'center',
    marginRight:15,
    width:30,
  },
  overlayContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  phoneInputContainerStyle: {
    alignItems: 'flex-start',
    borderRadius:30,
    flex: 1,
    justifyContent: 'center',
  },
  phoneInputContainerStyle2: {
    alignItems:'center',
    backgroundColor: '#FffFFF',
    borderBottomColor: '#F5FCFF',
    borderBottomWidth: 0,
    borderRadius:30,
    display: 'flex',
    elevation: 5, // works on android
    flex: 1,
    flexDirection: 'row',
    height:45,
    shadowColor: "#ffffff",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  phoneInputStyle: {
    fontSize: 16,
    marginLeft: 5,
  },
  searchBarContainerStyle: {
    borderBottomColor: 'white',
    borderTopColor: 'white',
    color: 'black',
    height: 35,
    marginBottom: 10,
    marginTop: 0,
    width: '100%',
  },
  searchBarInputContainerStyle: {
    alignItems: 'center',
    backgroundColor: "#dddddd",
    borderRadius: 30,
    display: 'flex',
    elevation: 5, // works on android
    flex: 1,
    flexDirection: 'row',
    shadowColor: "#808080",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchBarInputStyle: {
    color: 'black',
  },
  searchCloseContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    paddingRight: 25,
    width: '100%',
  },
});

export default CustomPhoneNumber;
