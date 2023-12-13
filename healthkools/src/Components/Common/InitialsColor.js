import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class InitialsColor extends React.Component {
  // This component represents initials letters when there is no image or avatar.
  constructor(props) {
    super(props);
    this.state = {
      bg_color: props.bg_color,
      disabled: props.disabled,
    }
  }

  static propTypes = {
    bg_color: PropTypes.string,
    containerStyle: PropTypes.object,
    disabled: PropTypes.bool,
    initials: PropTypes.string,
    onPress: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
    ]),
    style: PropTypes.object,
    test_id: PropTypes.string,
  }

  static defaultProps = {
    bg_color: "gray",
    containerStyle: null,
    disabled: false,
    initials: "",
    onPress: null,
    style: null,
    test_id: 'initials_color_test_id',
  }

  render() {
    let containerStyle = this.props.containerStyle || {};
    let style = this.props.style || {};
    style.backgroundColor = this.state.bg_color || "gray";
    const { disabled } = this.state;
    return(
      <View style={[styles.container, containerStyle]} testID={this.props.test_id}>
        <Text style={[styles.textStyle, style]} onPress={disabled ? null : this.props.onPress}>{this.props.initials}</Text>
      </View>
    )
  }
}

// Styles for the InitialsColor component
const styles = StyleSheet.create({
  container: {
    height: 130,
    margin: 'auto',
    padding: 10,
    width: 130,
  },
  textStyle: {
    borderRadius: 55,
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    height: 110,
    lineHeight: 100,
    margin: 'auto',
    textAlign: 'center',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    width: 110,
  },
});

export default InitialsColor;
