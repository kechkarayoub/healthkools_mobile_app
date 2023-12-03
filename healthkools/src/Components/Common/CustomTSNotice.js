import CloseButton from 'src/Components/Common/CloseButton';
import Overlay from 'react-native-modal-overlay';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from "src/variables/colors";
import { connect } from 'react-redux';
import { get_cookies_policy_articles } from 'src/Components/terms_of_service/cookies_policy';
import { get_data } from "src/Components/terms_of_service/data";
import { get_data_use_policy_articles } from 'src/Components/terms_of_service/data_use_policy';
import { get_terms_service_notice, get_terms_of_services_articles } from 'src/Components/terms_of_service/terms_of_service';
import { Linking, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { reverse_style } from 'src/utils/rtl_layout';
import { t } from 'src/i18n';

class CustomTSNotice extends React.Component {
  constructor(props) {
    super(props);
    this.data = get_data();  // Site information
    this.state = {
      cookies_policy_articles: get_cookies_policy_articles(this.data, (url) => this.handleOpenUrl(url)),
      current_language: props.current_language,
      data_use_policy_articles: get_data_use_policy_articles(this.data, (url) => this.handleOpenUrl(url)),
      open_cookie_policy: false,
      open_data_use_policy: false,
      open_terms_of_service: false,
      registration_label: props.registration_label,
      terms_of_services_articles: get_terms_of_services_articles(this.data, (url) => this.handleOpenUrl(url)),
    };
  }

  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if(props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    if(props.registration_label !== state.registration_label) {
      new_state.registration_label = props.registration_label;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }

  componentDidUpdate(prevProps, prevState){
    var new_state = {}, set_state = false;
    if(prevState.current_language !== this.state.current_language){
      new_state.current_language = this.state.current_language;
      set_state = true;
    }
    if(prevState.registration_label !== this.state.registration_label){
      new_state.registration_label = this.state.registration_label;
      set_state = true;
    }
    if(set_state){
      this.setState(new_state);
    }
  }

  static propTypes = {
    current_language: PropTypes.string,
    is_not_button: PropTypes.bool,
    onPress: PropTypes.func,
    registration_label: PropTypes.string,
    style: PropTypes.object,
    test_id: PropTypes.string,
    text: PropTypes.string,
    textStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    current_language: "en",
    is_not_button: false,
    onPress: () => {},
    registration_label: "Sign up",
    style: null,
    test_id: '',
    text: '',
    textStyle: null,
  }

  handleOpenUrl = async (url) => {
    // Asynchronous function to handle the opening of a URL
    // Params:
    //  - url (string): The URL to be opened
    // decodeURIComponent(url): Decode the URL before opening it asynchronously using Linking API
    await Linking.openURL(decodeURIComponent(url));
  }

  handleItemClicked = clicked_item => {
    this.setState({
      open_cookie_policy: clicked_item === "cookie_policy",
      open_data_use_policy: clicked_item === "data_use_policy",
      open_terms_of_service: clicked_item === "terms_of_service",
    });
  }

  closeOverlay = () => {
    this.setState({
      open_cookie_policy: false,
      open_data_use_policy: false,
      open_terms_of_service: false,
    });
  }

  renderTermsOfService = () => {
    const {current_language, terms_of_services_articles} = this.state;
    return <View style={styles.TSContainerStyle}>
      {terms_of_services_articles.map((terms_of_services_article, idx) => {
        return <View key={idx} style={styles.articleStyle}>
          <View  style={styles.articleTitleStyle}>
            <View><Text style={styles.articleTitleNumberStyle}>{t("Item") + " " + (idx + 1) + ": "}</Text></View>
            <View style={{ flexShrink: 1 }}>{terms_of_services_article.title[current_language]()}</View>
          </View>
          {terms_of_services_article.paragraphs.map((paragraph, idx_p) => {
            return <View key={idx_p} style={styles.paragraphStyle}>
              <View style={styles.paragraphContentStyle}>
                {paragraph[current_language]()}
              </View>
              {paragraph.list_items &&
                <View style={styles.paragraphListItemsContentStyle}>
                  {paragraph.list_items.map((li, idx_li) => {
                    return <View key={idx_p + "_" + idx_li} style={styles.paragraphItemStyle}>
                      {li[current_language]()}
                    </View>
                  })}
                </View>
              }
            </View>
          })}
        </View>
      })}
    </View>
  }

  renderCookiePolicy = () => {
    const {current_language, cookies_policy_articles} = this.state;
    return <View style={styles.TSContainerStyle}>
      <View  style={styles.paragraphStyle}>
        {cookies_policy_articles.intro[current_language]()}
      </View>
      {cookies_policy_articles.items.map((cookies_policy_article, idx) => {
        return <View key={idx} style={styles.articleStyle}>
          <View  style={styles.articleTitleStyle}>
            {/*<View><Text style={styles.articleTitleNumberStyle}>{t("Item") + " " + (idx + 1) + ": "}</Text></View>*/}
            <View style={{ flexShrink: 1 }}>{cookies_policy_article.title[current_language]()}</View>
          </View>
          {cookies_policy_article.intro &&
            <View  style={styles.paragraphStyle}>
              {cookies_policy_article.intro[current_language]()}
            </View>
          }
          {cookies_policy_article.paragraphs.map((paragraph, idx_p) => {
            return <View key={idx_p} style={styles.paragraphStyle}>
              <View style={styles.paragraphContentStyle}>
                {paragraph[current_language]()}
              </View>
              {paragraph.list_items &&
                <View style={styles.paragraphListItemsContentStyle}>
                  {paragraph.list_items.map((li, idx_li) => {
                    return <View key={idx_p + "_" + idx_li} style={styles.paragraphStyle}>
                      <View  style={styles.paragraphItemStyle}>
                        {li[current_language]()}
                      </View>
                      {li.sub_list_items &&
                        <View style={styles.paragraphSubListItemsContentStyle}>
                          {li.sub_list_items.map((sli, idx_sli) => {
                            return <View key={idx_p + "_" + idx_li + "_" + idx_sli} style={styles.paragraphItemStyle}>
                              {sli[current_language]()}
                            </View>
                          })}
                        </View>
                      }
                    </View>
                  })}
                </View>
              }
            </View>
          })}
        </View>
      })}
    </View>
  }

  renderDataUsePolicy = () => {
    const {current_language, data_use_policy_articles} = this.state;
    return <View style={styles.TSContainerStyle}>
      <View  style={styles.paragraphStyle}>
        {data_use_policy_articles.intro[current_language]()}
      </View>
      {data_use_policy_articles.items.map((data_use_policy_article, idx) => {
        return <View key={idx} style={styles.articleStyle}>
          <View  style={styles.articleTitleStyle}>
            {/*<View><Text style={styles.articleTitleNumberStyle}>{t("Item") + " " + (idx + 1) + ": "}</Text></View>*/}
            <View style={{ flexShrink: 1 }}>{data_use_policy_article.title[current_language]()}</View>
          </View>
          {data_use_policy_article.intro &&
            <View  style={styles.paragraphStyle}>
              {data_use_policy_article.intro[current_language]()}
            </View>
          }
          {data_use_policy_article.paragraphs.map((paragraph, idx_p) => {
            return <View key={idx_p} style={styles.paragraphStyle}>
              <View style={styles.paragraphContentStyle}>
                {paragraph[current_language]()}
              </View>
              {paragraph.list_items &&
                <View style={styles.paragraphListItemsContentStyle}>
                  {paragraph.list_items.map((li, idx_li) => {
                    return <View key={idx_p + "_" + idx_li} style={styles.paragraphStyle}>
                      <View  style={styles.paragraphItemStyle}>
                        {li[current_language]()}
                      </View>
                      {li.sub_list_items &&
                        <View style={styles.paragraphSubListItemsContentStyle}>
                          {li.sub_list_items.map((sli, idx_sli) => {
                            return <View key={idx_p + "_" + idx_li + "_" + idx_sli} style={styles.paragraphItemStyle}>
                              {sli[current_language]()}
                            </View>
                          })}
                        </View>
                      }
                    </View>
                  })}
                </View>
              }
            </View>
          })}
        </View>
      })}
    </View>
  }
  
  render() {
    const { current_language, open_cookie_policy, open_data_use_policy, open_terms_of_service, registration_label } = this.state;
    var terms_service_notice = get_terms_service_notice({registration_label: registration_label})
    return (
      <>
        <Text style={[reverse_style(current_language, styles.cotainer), this.props.style || {}]}
          testID={this.props.test_id}
        >
          <Text style={[reverse_style(current_language, styles.buttonText), this.props.textStyle || {}]}>{terms_service_notice[current_language](this.handleItemClicked)}</Text>
        </Text>
        {(open_terms_of_service || open_cookie_policy || open_data_use_policy) &&
          <Overlay
            fullScreen
            visible={true}
            closeOnTouchOutside={true}
            onClose={this.closeOverlay}
          >
            <View style={reverse_style(current_language, styles.overlayContainer)}>
              <View style={reverse_style(current_language, styles.titleCloseContainer)}>
                <View style={reverse_style(current_language, styles.titleContainerStyle)}>
                  <Text style={[reverse_style(current_language, styles.titleStyle)]}>{t(open_terms_of_service ? "Terms of service" : open_cookie_policy ? "Cookies and other storage technologies" : "Data use policy")}</Text>
                </View>
                <CloseButton name='close'  containerStyle={reverse_style(current_language, styles.iconCloseStyle)} onPress={this.closeOverlay} />
              </View>
              <SafeAreaView style={{flex: 1}}>
                <ScrollView style={styles.TSOverlayContainerStyle} contentContainerStyle={styles.TSContentContainerStyle}>
                  {open_terms_of_service && this.renderTermsOfService()}
                  {open_cookie_policy && this.renderCookiePolicy()}
                  {open_data_use_policy && this.renderDataUsePolicy()}
                </ScrollView>
              </SafeAreaView>
            </View>
          </Overlay>
        }
      </>
    )
  }
}

const styles = StyleSheet.create({
  articleStyle: {},
  articleTitleStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginTop: 25,
  },
  articleTitleNumberStyle: {
    color: COLORS.default_color,
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonText:{
    color:"white",
    fontWeight:'bold',
    lineHeight: 20,
    textAlign: 'justify',
  },
  cotainer: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    textAlign: 'justify',
    width: 300,
  },
  CountryItemNameStyle: {
    marginLeft: 5,
    marginTop: 5,
  },
  CountryItemStyle: {
    flexDirection: 'row'
  },
  iconCloseStyle: {
    height: 50,
    width: 50,
  },
  overlayContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  paragraphContentStyle: {
  },
  paragraphItemStyle: {},
  paragraphListItemsContentStyle: {},
  paragraphStyle: {},
  paragraphSubListItemsContentStyle: {},
  phoneInputContainerStyle: {
    alignItems: 'flex-start',
    borderRadius:30,
    flex: 1,
    justifyContent: 'center',
  },
  searchBarInputStyle: {
    color: 'black',
  },
  searchBarInputContainerStyle: {
    alignItems: 'center',
    backgroundColor: "#dddddd",
    borderRadius: 30,
    display: 'flex',
    elevation: 5, // works on android
    flex: 1,
    flexDirection: 'row',
    shadowColor: "#808080",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titleCloseContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    width: '100%',
  },
  titleContainerStyle: {
    borderBottomColor: 'white',
    borderTopColor: 'white',
    color: 'black',
    height: 35,
    marginBottom: 10,
    marginTop: 0,
    width: '100%',
  },
  titleStyle: {
    color: COLORS.default_color,
    fontWeight: "bold",
    fontSize: 17,
    height: 45,
    justifyContent: 'center',
    marginTop: 5,
    textAlign: "center",
  },
  TSContainerStyle: {
    marginBottom: 15,
  },
  TSContentContainerStyle:{
    flexGrow: 1,
  },
  TSOverlayContainerStyle: {
    height: '93%',
    padding: 5,
  }
});

const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}

export default connect(mapStateToProps)(CustomTSNotice);
