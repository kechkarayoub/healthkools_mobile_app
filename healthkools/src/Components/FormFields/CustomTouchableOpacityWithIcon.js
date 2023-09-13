import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome";
import {Ionicons,MaterialCommunityIcons,FontAwesome5} from "react-native-vector-icons/FontAwesome";
const BUTTON_SIZE = 30

class CustomTouchableOpacityWithIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    icon_name: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    test_id: PropTypes.string,
    text: PropTypes.string,
    textStyle: PropTypes.object,
  }
  static defaultProps = {
    icon_name: "close",
    onPress: () => {},
    style: null,
    test_id: '',
    text: '',
    textStyle: null,
  }

  render() {
    var text_length = (this.props.text || '').length;
    return (
      <TouchableOpacity style={[styles.containerStyle, this.props.style || {}]}
        onPress={this.props.onPress} testID={this.props.test_id}
      >
        <Text style={[styles.textStyle, this.props.textStyle || {}, text_length == 4 ? {fontSize: 17} : text_length == 5 ? {fontSize: 14} : {}]}>{this.props.text}</Text>
        <Ionicons
          name={this.props.icon_name}
          size={16}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 15,
    justifyContent: 'flex-end',
    width: 300,
  },
  textStyle:{
    color:"white",
    fontWeight:'bold',
    textAlign: 'right',
  },
  iconStyle: {
    marginTop: 0,
  },
});
export default CustomTouchableOpacityWithIcon;
