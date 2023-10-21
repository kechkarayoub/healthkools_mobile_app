import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';


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
    bottom: 0,
    color: "red",
    elevation: 300, // works on android
    left: 0,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    zIndex: 300, // works on ios
  },
});

export default ErrorComponent;
