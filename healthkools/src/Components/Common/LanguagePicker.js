import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from "src/variables/colors";
import { connect } from 'react-redux'
import { flags } from "src/_ressources";
import { set } from 'src/Store/locale';
import { StyleSheet, Image } from 'react-native';
import { t } from 'src/i18n';

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          value: "ar",
          label: t("Arabic") || "Arabe",
          icon: () => <Image source={flags.flag_ar} style={styles.iconStyle} />,
        },
        {
          value: "en",
          label: t("English") || "Anglais",
          icon: () => <Image source={flags.flag_en} style={styles.iconStyle} />,
        },
        {
          value: "fr",
          label: t("French") || "Français",
          icon: () => <Image source={flags.flag_fr} style={styles.iconStyle} />,
        },
      ],
      current_language: props.current_language,
      list_mode: props.list_mode,
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
              item.label = t("Arabic") || "Arabe";
            }
            else if(item.value === "en"){
              item.label = t("English") || "Anglais";
            }
            else if(item.value === "fr"){
              item.label = t("French") || "Français";
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
    list_mode: PropTypes.string,
    test_id: PropTypes.string,
  }

  static defaultProps = {
    current_language: "fr",
    dispatch: () => {},
    list_mode: "FLATLIST",
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
            item.label = t("Arabic") || "Arabe";
          }
          else if(item.value === "en"){
            item.label = t("English") || "Anglais";
          }
          else if(item.value === "fr"){
            item.label = t("French") || "Français";
          }
          return item;
        }),
      });
    }
  }

  handleChangeLanguage = new_language => {
    if(new_language !== this.state.current_language){
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
    const { current_language, items, list_mode, open, test_id } = this.state;
    return(
      <DropDownPicker
        dropDownContainerStyle={styles.dropDownContainerStyle}
        items={items}
        listMode={list_mode}
        open={open}
        selectedItemContainerStyle={styles.selectedItemContainerStyle}
        selectedItemLabelStyle={styles.selectedItemLabelStyle}
        setItems={this.setItems}
        setOpen={this.setOpen}
        setValue={this.setValue}
        style={styles.style}
        testID={test_id}
        value={current_language}
      />
    )
  }
}

const styles = StyleSheet.create({
    iconStyle: {
      height: 20,
      width: 36,
    },
    dropDownContainerStyle: {
      borderColor: COLORS.default_color,
    },
    selectedItemContainerStyle: {
    },
    selectedItemLabelStyle: {
      color: COLORS.default_color,
      fontWeight: "bold",
    },
    style: {
      borderBottomColor: COLORS.default_color,
      borderColor: COLORS.default_color,
      borderLeftWidth: 0,
      borderRadius: 0,
      borderRightWidth: 0,
    },
});

const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}

export default connect(mapStateToProps)(LanguagePicker);
