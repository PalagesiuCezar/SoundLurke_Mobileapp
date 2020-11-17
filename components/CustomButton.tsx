import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from './Themed';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

const Custombutton = ({ onPress, isEnabled, isLoading, title, buttonStyle, focusedButton, ...otherProps })  => {

    const onButtonPress = isEnabled && !isLoading ? onPress : () => null

    if(!focusedButton){
        return(
            <LinearGradient
                colors={['#179094','#55D3D7','#4FD8DC']}
                style={{borderRadius:30, width: wp("65%"),}}
                start={{ y: 1.0, x: 0.0 }} end={{ y: -1.0, x: 0.0 }}
                >
                <TouchableOpacity
                    style={[styles.singInButton,buttonStyle]}
                    onPress={onButtonPress}>
        
                    <Text style={styles.singInText}>{title}</Text>
        
                </TouchableOpacity>
            </LinearGradient>
        )
    }else{
        return(
            <LinearGradient
                colors={['#179094','#55D3D7','#4FD8DC']}
                style={{ borderRadius:30 , width: wp("70%"), height: hp("6%"), justifyContent: 'center' }}
                start={{ y: 1.0, x: 0.0 }} end={{ y: -1.0, x: 0.0 }}
                >
                <TouchableOpacity
                    style={styles.singInButtonUnfocused}
                    onPress={onButtonPress}>
        
                    <Text style={styles.singInTextUnfocused}>{title}</Text>
        
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

Custombutton.prototype = {
    onPress: PropTypes.func,
    isEnabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    title: PropTypes.string,
    buttonStyle: PropTypes.any,
    focusedButton: PropTypes.bool
}

Custombutton.defaultProps = {
    onPress: () => console.log("loginlogina"),
    isEnabled: true,
    isLoading: false,
    focusedButton: false
}

const styles = StyleSheet.create({
    singInButton:{
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: wp("65%"),
        height: hp("6%"),
        justifyContent: 'center',
      },
      singInText: {
        textAlign: 'center',
        alignSelf: 'center',
        width: wp('35%'),
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 15,
      },  
      singInButtonUnfocused:{
        marginLeft: 3,
        marginRight: 3,
        width: wp("68.6%"),
        height: hp("5.3%"),
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius:30,
      },
      singInTextUnfocused: {
        top: 8,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 15,
        color: '#0BA4AB'
      },
  });

export default Custombutton;