import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';

import axios from 'axios';

export default class ForgotPassword extends React.Component {
    signal = axios.CancelToken.source();
    constructor(props){
      super(props);
      // this.state ={
      // }

    }
    goTo = () => {
      this.props.navigation.navigate('Menu',{ 
        screen : 'Explore', 
        params: { screen: 'Explore', }
      });
    }
    renderRequest(){

        const title = 'Submit Password'

        return(
            <TouchableOpacity onPress={ () => this.goTo() }>
            <Text>Login</Text>
          </TouchableOpacity>
        );
    }

    UNSAFE_componentWillMount(){
      this.signal.cancel('Api is being canceled');
    }

  render(){
    // const { data } = this.props.route.params;
    console.log(this.props.route.params);

    return(
        <View style={styles.container}>
            <View style={styles.container}>
                {/* <Text>data is : {JSON.stringify(data)}</Text> */}
            </View>
            <View style={styles.container}>
                {this.renderRequest()}
            </View>
        </View>
    );
}
}
const styles = StyleSheet.create({
    inputText: {
      backgroundColor: '#E5E5E5',
      borderRadius: 30,
      padding: 10,
      marginTop: 7,
      flex:1,
    },
    donthave: {
      // fontFamily: 'Montserrat',
      fontWeight: "bold",
      color: '#0BA4AB',
      lineHeight: 23,
      fontSize: 15,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

  });
