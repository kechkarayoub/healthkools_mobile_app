import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

class InitialsColor extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    bg_color: PropTypes.string,
    containerStyle: PropTypes.object,
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
    initials: "",
    onPress: null,
    style: null,
    test_id: 'initials_color_test_id',
  }

  render() {
    var containerStyle = this.props.containerStyle || {};
    var style = this.props.style || {};
    style.backgroundColor = this.props.bg_color;
    return(
      <View style={[styles.container, containerStyle]} testID={this.props.test_id}>
        <Text style={[styles.textStyle, style]} onPress={this.props.onPress}>{this.props.initials}</Text>
      </View>
    )
  }
}

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
