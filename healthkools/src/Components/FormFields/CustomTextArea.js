import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import ErrorComponent from "src/Components/Common/ErrorComponent";
import PropTypes from 'prop-types';

class CustomTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      form_error: props.form_error,
      icon_url: props.icon_url,
      multiline: props.multiline,
      numberOfLines: props.numberOfLines,
      placeholder: props.placeholder,
      secureTextEntry: props.secureTextEntry,
      test_id: props.test_id,
      underlineColorAndroid: props.underlineColorAndroid,
      value: props.value,
    }
  }

  static propTypes = {
    current_language: PropTypes.string,
    form_error: PropTypes.string,
    icon_url: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
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
    current_language: 'en',
    form_error: "",
    icon_url: null,
    multiline: false,
    numberOfLines: 1,
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
    const {icon_url, form_error, placeholder, secureTextEntry, test_id, underlineColorAndroid, value, multiline, numberOfLines} = this.state;
    return (
      <View style={[styles.textAreaContainer, form_error ? styles.errorStyle : {}]}>
        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          onChangeText={(value) => {
            if(this.props.onChangeText){
              this.props.onChangeText(value);
            }
            else{
              this.setState({value: value})
            }
          }}
          secureTextEntry={secureTextEntry}
          style={[styles.textArea, this.props.style || {}]}
          testID={test_id}
          underlineColorAndroid={underlineColorAndroid}
          value={value}
        />
        {icon_url &&
          <Image style={styles.inputIcon} source={icon_url}/>
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
  textAreaContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F5FCFF',
    borderBottomWidth: 0,
    borderRadius: 30,
    elevation: 5, // works on android
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    height: 45,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 300,
  },
  textArea:{
    flex: 1,
    height: 45,
    marginLeft: 16,
    padding: 5,
  },
  inputIcon:{
    height: 30,
    justifyContent: 'center',
    marginRight: 15,
    width: 30,
  },
});
export default CustomTextArea;
