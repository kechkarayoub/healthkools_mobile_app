import DropDownPicker from 'react-native-dropdown-picker';
import ErrorComponent from "src/Components/Common/ErrorComponent";
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from "src/variables/colors";
import { connect } from 'react-redux';
import { get_contries_select_options } from "src/utils/countries_list";
import { Image, StyleSheet, View } from 'react-native';
import { reverse_style } from 'src/utils/rtl_layout';
import { t } from 'src/i18n';

class CustomCountriesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries_options: get_contries_select_options(props.current_language),
      current_language: props.current_language,
      disabled: props.disabled,
      form_error: props.form_error,
      icon_url: props.icon_url,
      list_mode: props.list_mode,
      placeholder: props.placeholder,
      open: false,
      searchable: props.searchable,
      searchPlaceholder: props.searchPlaceholder,
      searchPlaceholderTextColor: props.searchPlaceholderTextColor,
      test_id: props.test_id,
      type_select: props.type_select,
      value: props.value,
    };
  }

  static propTypes = {
    current_language: PropTypes.string,
    disabled: PropTypes.bool,
    form_error: PropTypes.string,
    icon_url: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    iconStyle: PropTypes.object,
    list_mode: PropTypes.string,
    onSelect: PropTypes.func,
    placeholder: PropTypes.string,
    searchable: PropTypes.bool,
    searchPlaceholder: PropTypes.string,
    searchPlaceholderTextColor: PropTypes.string,
    test_id: PropTypes.string,
    type_select: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    current_language: "fr",
    disabled: false,
    form_error: "",
    icon_url: null,
    iconStyle: null,
    list_mode: "MODAL",
    onSelect: () => {},
    placeholder: "Select an item",
    searchable: true,
    searchPlaceholder: "Search an item",
    searchPlaceholderTextColor: "gray",
    test_id: 'country_select_test_id',
    type_select: "",
    value: "",
  }

  // Get derived state from props to handle changes
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if(props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      new_state.countries_options = get_contries_select_options(props.current_language),
      return_new_state = true;
    }
    if(props.form_error !== state.form_error) {
      new_state.form_error = props.form_error;
      return_new_state = true;
    }
    if(props.value !== state.value) {
      new_state.value = (props.onSelect ? props : state).value;
      return_new_state = true;
    }
    if(props.disabled !== state.disabled) {
      new_state.disabled = props.disabled;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  // Component did update to handle state changes
  componentDidUpdate(prevProps, prevState){
    if(prevState.current_language !== this.state.current_language){
      this.setState({
        current_language: this.state.current_language,
        countries_options: get_contries_select_options(this.state.current_language),
      });
    }
  }

  setOpen = (open)=> {
    this.setState({
      open: !this.props.disabled && open,
    });
  }

  setValue =(callback) => {
    var new_val = callback(); // callback() return selected value
    if(this.props.onSelect){
      this.props.onSelect(new_val);
    }
    else{
      this.setState({value: new_val});
    }
  }
  
  render() {
    const {
      countries_options, current_language, disabled, form_error, icon_url, list_mode, open, placeholder, searchable, searchPlaceholder, 
      searchPlaceholderTextColor, test_id, value,
    } = this.state;
    let dropdownContainerPlatformStyle = {
      flexDirection: 'row',
    },
    inputIconPlatformStyle = {
      marginRight: 15,
    };
    if(Platform.OS === 'ios'){
      // Unexpected behavior on ios; I need to reverse direction value to work normally
      dropdownContainerPlatformStyle = reverse_style(current_language, dropdownContainerPlatformStyle, true);
      inputIconPlatformStyle = reverse_style(current_language, inputIconPlatformStyle, true);
    }
    return(
      <View style={[reverse_style(current_language, styles.selectContainer), reverse_style(current_language, dropdownContainerPlatformStyle), form_error ? styles.errorStyle : {}]}>
        <DropDownPicker
          containerStyle={[styles.containerStyle]}
          disabled={disabled}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          iconContainerStyle={reverse_style(current_language, styles.iconContainerStyle)}
          items={countries_options}
          language={current_language}
          listItemContainerStyle={reverse_style(current_language, styles.listItemContainerStyle)}
          listMode={list_mode}
          open={open}
          placeholder={t(placeholder)}
          placeholderStyle={styles.placeholder}
          searchable={searchable}
          searchPlaceholder={t(searchPlaceholder)}
          searchPlaceholderTextColor={searchPlaceholderTextColor}
          selectedItemContainerStyle={reverse_style(current_language, styles.selectedItemContainerStyle)}
          selectedItemLabelStyle={styles.selectedItemLabelStyle}
          setOpen={(open_) => this.setOpen(open_)}
          setValue={this.setValue}
          style={{...reverse_style(current_language, styles.style), ...(disabled ? styles.disabledStyle : {})}}
          testID={test_id}
          value={value}
        />
        {icon_url &&
          <Image style={[reverse_style(current_language, styles.inputIcon), reverse_style(current_language, inputIconPlatformStyle), reverse_style(current_language, this.props.iconStyle), disabled ? styles.disabledIconStyle : {}]} source={icon_url}/>
        }
        {form_error &&
          <ErrorComponent error={form_error} />
        }
      </View>
    )
  }
}

// Styles for the CustomCountriesSelect component
const styles = StyleSheet.create({
    // iconStyle: {
    //   width: 36,
    //   height: 20,
    // },
    containerStyle: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderBottomColor: '#F5FCFF',
      borderRadius: 30,
      elevation: 300, // works on android
      marginRight: 0,
      shadowColor: 'transparent',
      shadowOffset:{ width: 0, height: 0, },
      shadowOpacity: 0,
      width: 255,
      zIndex: 300, // works on ios
    },
    disabledIconStyle: {
      opacity: 0.5,
    },
    disabledStyle: {
      opacity: 0.6,
    },
    dropDownContainerStyle: {
      borderColor: COLORS.default_color,
      elevation: 300, // works on android
      zIndex: 300, // works on ios
    },
    errorStyle: {
      height: 60,
      paddingBottom: 10,
    },
    iconContainerStyle: {
      marginRight: 10,
    },
    inputIcon:{
      height: 30,
      justifyContent: 'center',
      marginRight: 15,
      width: 30,
    },
    listItemContainerStyle: {
      display: 'flex',
      flexDirection: "row",
    },
    placeholder: {
      color: "grey",
      opacity: 0.8,
      paddingLeft: 5,
    },
    selectContainer: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      display: 'flex',
      elevation: 300, // works on android
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      marginBottom: 20,
      width: 300,
      zIndex: 300, // works on ios
    },
    selectedItemContainerStyle: {
      display: 'flex',
      flexDirection: "row"
    },
    selectedItemLabelStyle: {
      color: COLORS.default_color,
      fontWeight: "bold",
    },
    style: {
      borderColor: '#FFFFFF',
      borderRadius: 30,
      display: 'flex',
      elevation: 30, // works on android
      flexDirection: "row",
      shadowColor: 'transparent',
      shadowOffset:{ width: 0, height: 0, },
      shadowOpacity: 0,
      zIndex: 30, // works on ios
    },
});

// Map the current_language from Redux state to component props
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}

// Connect the component to the Redux store
export default connect(mapStateToProps)(CustomCountriesSelect);
