import ErrorComponent from "src/Components/Common/ErrorComponent";
import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

class CustomInputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      form_error: props.form_error,
      icon_url: props.icon_url,
      keyboardType: props.keyboardType || "default",
      placeholder: props.placeholder,
      secureTextEntry: props.secureTextEntry,
      test_id: props.test_id,
      type_input: props.type_input,
      underlineColorAndroid: props.underlineColorAndroid,
      value: props.value,
    }
  }

  static propTypes = {
    containerStyle: PropTypes.object,
    current_language: PropTypes.string,
    form_error: PropTypes.string,
    icon_url: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    iconStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    keyboardType: PropTypes.string,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    style: PropTypes.object,
    test_id: PropTypes.string,
    type_input: PropTypes.string,
    underlineColorAndroid: PropTypes.string,
    value: PropTypes.string,
  }
  
  static defaultProps = {
    containerStyle: null,
    current_language: 'en',
    form_error: "",
    icon_url: null,
    iconStyle: null,
    keyboardType: '',
    onChangeText: () => {},
    placeholder: '',
    secureTextEntry: false,
    style: null,
    test_id: '',
    type_input: '',
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
    if (props.placeholder !== state.placeholder) {
      new_state.placeholder = props.placeholder;
      return_new_state = true;
    }
    if (props.value !== state.value) {
      new_state.value = (props.onChangeText ? props : state).value;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  render() {
    const { form_error, icon_url, keyboardType, placeholder, secureTextEntry, test_id, underlineColorAndroid, value } = this.state;
    return (
      <View style={[this.props.containerStyle || styles.inputContainer, form_error ? styles.errorStyle : {}]}>
        <TextInput
          keyboardType={keyboardType}
          onChangeText={(value) => {
            if(this.props.onChangeText){
              this.props.onChangeText(value);
            }
            else{
              this.setState({value: value})
            }
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={[styles.inputs, this.props.style || {}]}
          testID={test_id}
          value={value}
          underlineColorAndroid={underlineColorAndroid}
        />
        {icon_url &&
          <Image style={[styles.inputIcon, this.props.iconStyle]} source={icon_url}/>
        }
        {form_error &&
          <ErrorComponent error={form_error} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    height: 60,
    paddingBottom: 10,
  },
  inputContainer: {
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
  inputIcon:{
    height: 30,
    justifyContent: 'center',
    marginRight: 15,
    width: 30,
  },
  inputs:{
    borderBottomColor: '#FFFFFF',
    flex: 1,
    height:45,
    marginLeft:16,
  },
});

export default CustomInputText;
