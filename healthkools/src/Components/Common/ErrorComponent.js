import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reverse_style } from 'src/utils/rtl_layout';
import { StyleSheet, Text } from 'react-native';


class ErrorComponent extends React.Component {
  // This component represents an error for an invalidated form field.
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      error: props.error,
      test_id: props.test_id,
    }
  }

  static propTypes = {
    current_language: PropTypes.string,
    error: PropTypes.string,
    style: PropTypes.object,
    test_id: PropTypes.string,
  }

  static defaultProps = {
    current_language: "en",
    error: "",
    style: null,
    test_id: "",
  }

  // Get derived state from props to handle changes
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if(props.error !== state.error) {
      new_state.error = props.error;
      return_new_state = true;
    }
    if(props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  render() {
    const {current_language, error, test_id} = this.state;
    return(
      <Text style={this.props.style || reverse_style(current_language, styles.errorStyle)}
        testID={test_id}
      >
        {error}
      </Text>
    )
  }
}

// Styles for the ErrorComponent component
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
    right: null,
    textAlign: 'center',
    width: '100%',
    zIndex: 300, // works on ios
  },
});

// Map the current_language from Redux state to component props
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}

// Connect the component to the Redux store
export default connect(mapStateToProps)(ErrorComponent);
