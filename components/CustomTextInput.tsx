import React from 'react';
import { TouchableOpacity, StyleSheet, TextInput, Image, Platform } from 'react-native';
import { View } from './Themed';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

const CustomTextInput = ({ placeholder, isPassword, secureTextEntry, onChangeText, onFocus, onBlur, hasIcon, image, ...otherProps }) => {

    if(!hasIcon){
        return(
            <View style={styles.inputView}>
                <TextInput style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={placeholder}
                    placeholderTextColor="#464646"
                    onChangeText={onChangeText}
                    onFocus = {onFocus}
                    onBlur = {onBlur}
                    secureTextEntry={secureTextEntry}
                  />

                </View>
        )
    }else{
        return(
            <View style={styles.inputView}>
                <TextInput style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={placeholder}
                    placeholderTextColor="#464646"
                    onChangeText={onChangeText}
                    onFocus = {onFocus}
                    onBlur = {onBlur}
                    secureTextEntry={secureTextEntry}
                />
                <Image source={ image } style = {styles.inputIcon} />
            </View>
        )
    }
}

CustomTextInput.prototype = {
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    hasIcon: PropTypes.bool,
    image: PropTypes.any
}
CustomTextInput.defaultProps = {
    isPassword: false,
    hasIcon: false,
    secureTextEntry: false,
    onBlur: () => console.log("blur is working"),
    onFocus: () => console.log("focus is working"),
    onChangeText: () => console.log("not doing anything"),
}

const styles = StyleSheet.create({
    inputView:{
        width: wp("70,7%"),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#E5E5E5',
        marginVertical: 15,
        borderRadius: 20,
    },
    textInput:{
        zIndex: 1,
        width: wp("64,7%"),
        height: hp("5,6%"),
        paddingLeft: 20,
        fontFamily: Platform.OS === 'ios' ? 'sans-serif' : 'normal',
    },
    inputIcon:{
        width: wp("8,4%"),
        height: hp("3%"),
        right: 20,
    },
})

export default CustomTextInput;