import CustomTouchableOpacity from "src/Components/FormFields/CustomTouchableOpacity";
import DateTimePicker from "react-native-modal-datetime-picker";
import ErrorComponent from "src/Components/Common/ErrorComponent";
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { get_date_format } from "src/utils/index";
import { Image, StyleSheet, View } from 'react-native';

class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      darkMode: props.darkMode,
      disabled: props.disabled,
      form_error: props.form_error,
      icon_url: props.icon_url,
      maximumDate: props.maximumDate || undefined,
      minimumDate: props.minimumDate || undefined,
      minuteInterval: props.minuteInterval,
      mode: props.mode,
      open_datetime_picker: false,
      placeholder: props.placeholder,
      test_id: props.test_id,
      type_date: props.type_date,
      value: props.value || null,
    }
  }

  static propTypes = {
    containerStyle: PropTypes.object,
    current_language: PropTypes.string,
    darkMode: PropTypes.bool,
    disabled: PropTypes.bool,
    form_error: PropTypes.string,
    icon_url: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    iconStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    maximumDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    minimumDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    minuteInterval: PropTypes.number,
    mode: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    test_id: PropTypes.string,
    type_date: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    containerStyle: null,
    current_language: 'en',
    darkMode: true,
    disabled: false,
    form_error: "",
    icon_url: null,
    iconStyle: null,
    maximumDate: null,
    minimumDate: null,
    minuteInterval: 5,
    mode: 'date', //'date' or 'time' or 'datetime'
    onChange: () => {},
    placeholder: '',
    style: null,
    test_id: '',
    type_date: '',
    value: null,
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
    // if ((props.maximumDate || undefined) !== state.maximumDate) {
    //   new_state.maximumDate = props.maximumDate || undefined;
    //   return_new_state = true;
    // }
    // if ((props.minimumDate || undefined) !== state.minimumDate) {
    //   new_state.minimumDate = props.minimumDate || undefined;
    //   return_new_state = true;
    // }
    if (props.placeholder !== state.placeholder) {
      new_state.placeholder = props.placeholder;
      return_new_state = true;
    }
    if ((props.value || null) !== state.value) {
      new_state.value = (props.onChange ? props : state).value || null;
      new_state.open_datetime_picker = false;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  handleDateTimeChange = (date) => {
    if(!date){
      this.setState({
        open_datetime_picker: false,
      });
    }
    else{
      if(this.props.onChange){
        this.props.onChange(date);
      }
      else{
        this.setState({
          value: date,
          open_datetime_picker: false,
        });
      }
    }
  }

  render() {
    const { darkMode, disabled, form_error, icon_url, maximumDate, minimumDate, minuteInterval, mode, open_datetime_picker, 
      placeholder, test_id, value} = this.state;
    var value_str = value ? get_date_format(moment(value)) : placeholder;
    return (
      <View style={[this.props.containerStyle || styles.datePickerContainer, form_error ? styles.errorStyle : {}]}>
        <CustomTouchableOpacity onPress={() => {
            if(!disabled){
              this.setState({open_datetime_picker: true});
            }
          }}
          style={styles.dateTextContainerStyle}
          test_id={test_id + "_date_btn"}
          text={value_str} 
          textStyle={[value ? styles.dateTimeStyle : styles.placeholderStyle, disabled ? styles.disabledStyle : {}]}
        />
        {icon_url &&
          <Image style={[styles.datePickerIcon, this.props.iconStyle, disabled ? styles.disabledIconStyle : {}]} source={icon_url}/>
        }
        {form_error &&
          <ErrorComponent error={form_error} />
        }
        <DateTimePicker
          date={value || moment().toDate()}
          isDarkModeEnabled={darkMode}
          isVisible={open_datetime_picker}
          maximumDate={maximumDate || undefined}
          minimumDate={minimumDate || undefined}
          minuteInterval={minuteInterval}
          mode={mode}
          onConfirm={(date) => this.handleDateTimeChange(date)}
          onCancel={() => this.handleDateTimeChange()}
          testID={test_id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  datePickerContainer: {
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
  datePickerIcon:{
    height: 30,
    justifyContent: 'center',
    marginRight: 15,
    width: 30,
  },
  dateTextContainerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 0,
    paddingLeft: 20,
  },
  dateTimeStyle: {
    color: 'black',
    textAlign: 'left',
  },
  disabledIconStyle: {
    opacity: 0.5,
  },
  disabledStyle: {
    opacity: 0.5,
  },
  errorStyle: {
    height: 60,
    paddingBottom: 10,
  },
  placeholderStyle: {
    color: "grey",
    opacity: 0.8,
  },
});

export default CustomDatePicker;
