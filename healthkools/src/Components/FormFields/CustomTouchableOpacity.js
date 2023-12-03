import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { reverse_style } from "src/utils/rtl_layout";
import { PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class CustomTouchableOpacity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      disabled: props.disabled,
    };
  }
  static propTypes = {
    current_language: PropTypes.string,
    disabled: PropTypes.bool,
    is_not_button: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
    test_id: PropTypes.string,
    text: PropTypes.string,
    textStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    current_language: 'en',
    disabled: false,
    is_not_button: false,
    onPress: () => {},
    style: null,
    test_id: '',
    text: '',
    textStyle: null,
  }

  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    if(props.disabled !== state.disabled) {
      new_state.disabled = props.disabled;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  render() {
    const { current_language, disabled } = this.state;
    if(disabled){
      return (
        <View style={[reverse_style(current_language, this.props.is_not_button ? styles.notButtonCotainer : styles.buttonContainer), this.props.style || {}, styles.disabledStyle]}
          testID={this.props.test_id}
        >
          <Text style={[reverse_style(current_language, this.props.is_not_button ? styles.notButtonText : styles.buttonText), this.props.textStyle || {}]}>
            {this.props.text}
          </Text>
        </View>
      )
    }
    return (
      <TouchableOpacity style={[reverse_style(current_language, this.props.is_not_button ? styles.notButtonCotainer : styles.buttonContainer), this.props.style || {}]}
        onPress={this.props.onPress} testID={this.props.test_id}
      >
        <Text style={[reverse_style(current_language, this.props.is_not_button ? styles.notButtonText : styles.buttonText), this.props.textStyle || {}]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 30,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    width: 300,
  },
  buttonText: {
    color: 'white',
  },
  disabledStyle: {
    opacity: 0.7,
  },
  notButtonCotainer: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 15,
    justifyContent: 'flex-end',
    marginBottom: 10,
    width: 300,
  },
  notButtonText: {
    color: "white",
    fontWeight: 'bold',
    height: 20,
    paddingLeft: 10,
    textAlign: 'left',
    width: "100%",
  },
});

const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}

export default connect(mapStateToProps)(CustomTouchableOpacity);
