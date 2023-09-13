import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {COLORS} from "src/variables/colors";


export const render_term_service_link = (link_url, link_label, onOpen, style) => {
    return <Text style={[style || styles.linkStyle]} onPress={() => onOpen(link_url)}>{link_label}</Text>
};
export const render_term_service_custom_item = (label, style) => {
    return <Text style={[style || styles.boldBlackStyle]} >{label}</Text>
};


const styles = StyleSheet.create({
    linkStyle: {
      color: "#0d6efd",
      marginLeft: 5,
      marginRight: 5,
        fontWeight: "bold",
        fontSize: 15,
    },
    boldBlackStyle: {
      color: "#000000",
      marginLeft: 5,
      marginRight: 5,
        fontWeight: "bold",
        fontSize: 15,
    },
    customItemStyle: {
        color: "#000000",
        marginLeft: 5,
        marginRight: 5,
          fontWeight: "bold",
          fontSize: 15,
    },
  });