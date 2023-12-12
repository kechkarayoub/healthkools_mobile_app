import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from "src/variables/colors";
import { connect } from 'react-redux'
import { flags } from "src/_ressources";
import { Image, StyleSheet, View } from 'react-native';
import { reverse_style } from 'src/utils/rtl_layout';
import { set } from 'src/Store/locale';
import { t } from 'src/i18n';

class LanguagePicker extends React.Component {
  // This component represents supported languages dropdown picker.
  constructor(props) {
    super(props);
    this.state = {
      disabled: props.disabled,
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
    container_style: PropTypes.object,
    current_language: PropTypes.string,
    disabled: PropTypes.bool,
    dispatch: PropTypes.func,
    list_mode: PropTypes.string,
    main_container_style: PropTypes.object,
    test_id: PropTypes.string,
  }

  static defaultProps = {
    container_style: null,
    current_language: "fr",
    disabled: false,
    dispatch: () => {},
    list_mode: "FLATLIST",
    main_container_style: null,
    test_id: 'test_id',
  }

  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    if (props.disabled !== state.disabled) {
      new_state.disabled = props.disabled;
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
    const { current_language, disabled, items, list_mode, open, test_id } = this.state;
    return(
      <View style={[this.props.main_container_style || styles.main_container_style]}>
        <View style={[this.props.container_style || reverse_style(current_language, styles.container_style)]}>
          <DropDownPicker
            disabled={disabled}
            dropDownContainerStyle={{...styles.dropDownContainerStyle}}
            iconContainerStyle={reverse_style(current_language, styles.iconContainerStyle)}
            items={items}
            listMode={list_mode}
            open={open}
            listItemContainerStyle={reverse_style(current_language, styles.listItemContainerStyle)}
            selectedItemContainerStyle={reverse_style(current_language, styles.selectedItemContainerStyle)}
            selectedItemLabelStyle={styles.selectedItemLabelStyle}
            setItems={this.setItems}
            setOpen={this.setOpen}
            setValue={this.setValue}
            style={{...reverse_style(current_language, styles.style), ...(disabled ? styles.disabledStyle : {})}}
            testID={test_id}
            value={current_language}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container_style: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderBottomColor: '#F5FCFF',
      borderBottomWidth: 0,
      borderRadius: 30,
      display: 'flex',
      elevation: 5, // works on android
      flexDirection: 'row',
      height: 45,
      marginBottom: 20,
      shadowColor: "#808080",
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      width: 300,
      zIndex: 5,
    },
    disabledStyle: {
      opacity: 0.8,
      backgroundColor: "#d8d8d8",
    },
    dropDownContainerStyle: {
      borderColor: COLORS.default_color,
      zIndex: 5,
    },
    iconContainerStyle: {
      marginRight: 10,
    },
    iconStyle: {
      height: 20,
      width: 36,
    },
    listItemContainerStyle: {
      display: 'flex',
      flexDirection: "row",
    },
    main_container_style: {
      alignItems: 'center',
      width: '100%',
      zIndex: 5,
    },
    selectedItemContainerStyle: {
      display: 'flex',
      flexDirection: "row"
    },
    selectedItemLabelStyle: {
      color: COLORS.default_color,
      fontWeight: "bold",
    },
    style: {
      borderBottomColor: COLORS.default_color,
      borderColor: COLORS.default_color,
      borderLeftWidth: 0,
      borderRadius: 30,
      borderRightWidth: 0,
      display: 'flex',
      flexDirection: "row",
    },
});

const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}

export default connect(mapStateToProps)(LanguagePicker);
