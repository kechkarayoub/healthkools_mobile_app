import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class CustomTouchableOpacity extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
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
    is_not_button: false,
    onPress: () => {},
    style: null,
    test_id: '',
    text: '',
    textStyle: null,
  }

  render() {
    return (
      <TouchableOpacity style={[this.props.is_not_button ? styles.notButtonCotainer : styles.buttonContainer, this.props.style || {}]}
        onPress={this.props.onPress} testID={this.props.test_id}
      >
        <Text style={[this.props.is_not_button ? styles.notButtonText : styles.buttonText, this.props.textStyle || {}]}>
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
    height: 45,
    justifyContent: 'center',
    marginBottom: 20,
    width: 300,
  },
  buttonText: {
    color: 'white',
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
  notButtonText:{
    color:"white",
    fontWeight:'bold',
    height: 20,
  }
});

export default CustomTouchableOpacity;
