import React from 'react';
import {StyleSheet, Text} from 'react-native';

import PropTypes from 'prop-types';

class ErrorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error,
      test_id: props.test_id,
    }
  }

  static propTypes = {
    error: PropTypes.string,
    style: PropTypes.object,
    test_id: PropTypes.string,
  }

  static defaultProps = {
    error: "",
    style: null,
    test_id: "",
  }
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.error !== state.error) {
      new_state.error = props.error;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }
  render() {
    const {error, test_id} = this.state;
    return(
      <Text style={this.props.style || styles.errorStyle}
        testID={test_id}
      >
        {error}
      </Text>
    )
  }
}
const styles = StyleSheet.create({
  errorStyle:{
    color: "red",
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    elevation: 300, // works on android
    zIndex: 300, // works on ios
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    textAlign: 'center'
  },
});
export default ErrorComponent;
