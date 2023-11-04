import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { logos } from 'src/images';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
    }
    
    static defaultProps = {
    }

    render() {
        return (
            <View style={styles.footer}>
                <Image style={styles.logo} source={logos.logo}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
      alignItems: 'center',
      borderColor: "#fff",
      borderTopWidth: 3,
      flex: 1,
    },
    logo: {
      marginTop: 5,
      maxHeight: '90%',
      maxWidth: 150,
    }
});

export default Footer;
