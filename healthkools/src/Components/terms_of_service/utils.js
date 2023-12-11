import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const empty_text = '.. .. .. . . . .. . . . . . . .. . . . . . . . .. . . . . . . .. . . . . .. .. .. . . . .. . . . . . . .. . . . . . . . .. . . . . . . .. . . . . ... .. .. . . . .. . . . . . . .. . . . . . . . .. . . . . . . .. . . . . .. .. .. . . . .. . . . . . . .. . . . . . . . .. . . . . . . .. . . . . .';

export const render_term_service_link = (link_url, link_label, onOpen, style) => {
    return <Text style={[style || styles.linkStyle]} onPress={() => onOpen(link_url)}>{link_label}</Text>
};

export const render_term_service_custom_item = (label, style) => {
    return <Text style={[style || styles.boldBlackStyle]} >{label}</Text>
};

export const render_transparent_text = (style, nbr_chars, is_portrait) => {
  let text_res = empty_text.substring(0, (nbr_chars || 146) + (is_portrait ? 0 : 250));
  return <Text style={[style || styles.transparentText]} >{text_res}</Text>
};

const styles = StyleSheet.create({
    linkStyle: {
      color: "#0d6efd",
      fontSize: 15,
      fontWeight: "bold",
      marginLeft: 5,
      marginRight: 5,
    },
    boldBlackStyle: {
      color: "#000000",
      fontSize: 15,
      fontWeight: "bold",
      marginLeft: 5,
      marginRight: 5,
    },
    customItemStyle: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 5,
        marginRight: 5,
    },
    transparentText: {
      color: 'transparent',
    },
  });
