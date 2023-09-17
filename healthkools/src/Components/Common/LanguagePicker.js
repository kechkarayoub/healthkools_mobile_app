import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'

import {flags} from "src/_ressources";
import PropTypes from 'prop-types';
import {set} from 'src/Store/locale';
import {t} from 'src/i18n';
import {COLORS} from "src/variables/colors";

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          value: "ar",
          label: t("Arabic"),
          icon: () => <Image source={flags.flag_ar} style={styles.iconStyle} />,
        },
        {
          value: "en",
          label: t("English"),
          icon: () => <Image source={flags.flag_en} style={styles.iconStyle} />,
        },
        {
          value: "fr",
          label: t("French"),
          icon: () => <Image source={flags.flag_fr} style={styles.iconStyle} />,
        },
      ],
      current_language: props.current_language,
      open: false,
      test_id: props.test_id,
    };
    // if the t function is not yet configured,
    // then we translate the labels after a timeout (10ms);
    // the time required for the configuration of the function t
    if(!t("Arabic")){
      // Translate languages labels
      setTimeout(() => {
        this.setState({
          items: this.state.items.map(item => {
            if(item.value === "ar"){
              item.label = t("Arabic");
            }
            else if(item.value === "en"){
              item.label = t("English");
            }
            else if(item.value === "fr"){
              item.label = t("French");
            }
            return item;
          }),
        });
      }, 10);
    }
  }

  static propTypes = {
    current_language: PropTypes.string,
    dispatch: PropTypes.func,
    test_id: PropTypes.string,
  }

  static defaultProps = {
    current_language: "fr",
    dispatch: () => {},
    test_id: 'test_id',
  }


  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }
  componentDidUpdate(prevProps, prevState){
    // if current_language is changed, we translating languages labels
    if(prevState.current_language !== this.state.current_language){
      // Translate languages labels
      this.setState({
        items: this.state.items.map(item => {
          if(item.value === "ar"){
            item.label = t("Arabic");
          }
          else if(item.value === "en"){
            item.label = t("English");
          }
          else if(item.value === "fr"){
            item.label = t("French");
          }
          return item;
        }),
      });
    }
  }
  handleChangeLanguage = new_language => {
    if(new_language !== this.props.current_language){
      set("current_language", new_language);
      // Dispatch an action to change current languages in global state
      const action = { type: "CHANGE_LANGUAGE", value: new_language };
      this.props.dispatch(action);
    }
  }
  setOpen = (open)=> {
    this.setState({
      open: open
    });
  }

  setValue =(callback) => {
    // callback() return selected value
    this.handleChangeLanguage(callback());
  }

  setItems = (callback) => {
    // Modify or add new items
    this.setState(state => ({
      items: callback(state.items)
    }));
  }
  render() {
    const { open, current_language, items, test_id } = this.state;
    return(
      <DropDownPicker
        dropDownContainerStyle={styles.dropDownContainerStyle}
        items={items}
        open={open}
        selectedItemContainerStyle={styles.selectedItemContainerStyle}
        selectedItemLabelStyle={styles.selectedItemLabelStyle}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
        style={styles.style}
        testID={test_id}
        value={current_language}
      />
    )
  }
}
const styles = StyleSheet.create({
    iconStyle: {
      width: 36,
      height: 20,
    },
    style: {
      borderColor: 'transparent',
      borderRadius: 0,
      borderBottomColor: COLORS.default_color,
    },
    dropDownContainerStyle: {
      borderColor: COLORS.default_color,
    },
    selectedItemLabelStyle: {
      color: COLORS.default_color,
      fontWeight: "bold",
    },
    selectedItemContainerStyle: {
    },
});
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}
export default connect(mapStateToProps)(LanguagePicker);
