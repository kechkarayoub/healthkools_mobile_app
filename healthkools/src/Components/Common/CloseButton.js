import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from "src/variables/colors";
import { Stack, IconButton } from "@react-native-material/core";
import { StyleSheet } from 'react-native';

const BORDER_WIDTH = 1; // This variable will be used in styling
const BUTTON_SIZE = 25; // This variable will be used in styling

class CloseButton extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    alignItems: PropTypes.string,
    elevation: PropTypes.number,
    justifyContent: PropTypes.string,
    marginBottom: PropTypes.number,
    marginRight: PropTypes.number,
    onPress: PropTypes.func,
    test_id: PropTypes.string,
    zIndex: PropTypes.number,
  }

  static defaultProps = {
    alignItems: "flex-end",
    elevation: 2,
    justifyContent: "flex-end",
    marginBottom: 15,
    marginRight: -35,
    onPress: () => {},
    test_id: 'test_id',
    zIndex: 2,
  }

  render() {
    return(
      <Stack
        alignItems={this.props.alignItems || "flex-end"}
        elevation={this.props.elevation || 2}
        justifyContent={this.props.justifyContent || "flex-end"}
        marginBottom={this.props.marginBottom || 15}
        marginRight={this.props.marginRight || -35}
        zIndex={this.props.zIndex || 2}
        fill spacing={4}
      >
        <IconButton style={styles.button} onPress={this.props.onPress}
          testID={this.props.test_id || 'test_id'}
          icon={props => <Icon name="close" color={COLORS.default_color} size={BUTTON_SIZE/2} {...props} />}
        />
      </Stack>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    alignItems: 'flex-end',
    borderRadius: BUTTON_SIZE / 2,
    borderWidth: BORDER_WIDTH,
    height: BUTTON_SIZE + BORDER_WIDTH,
    justifyContent: 'flex-end',
    width: BUTTON_SIZE + BORDER_WIDTH,
  },
});
export default CloseButton;
