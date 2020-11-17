import * as React from 'react';
import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { Text, View } from '../../../components/Themed';

import axios from 'axios';
import Base64 from '../../../constants/utils/Base64';

class ResetPassword extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          old_password: '',
          new_password: ''
        }

    }
    handleChange(name, value) {
      console.log(name, value);
  
      this.setState(() => ({ [name]: value }));
    }

    submitHandler = (event) => {
      event.preventDefault();

      const url = 'http://192.168.1.8:8080/api/auth/password-change/';
      const credentials = Base64.btoa(`${this.state.email}:${this.state.password}`)

      axios.post(url, this.state ,{
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Basic ${credentials}`
        }
        })
          .then(response => {
            console.log(response);
            this.props.navigation.jumpTo('Menu',{});
          })
          .catch(error => {
              console.log(error);
          })
  }
    renderRequest(){
        const title = 'Submit Password'

        return(
            <Button title = {title} onPress = {() => this.props.navigation.navigate('Menu',{})} />
        );
    }



  render(){
    // const { credential } = this.props.route.params;

    console.log(this.props.route.params);
    
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>ResetPassword</Text>
                <View>
                  <View>
                  <TextInput style = {styles.inputText}
                    placeholder="Old Password..." 
                    onChangeText={(value) => {this.handleChange('old_password',value)}}
                    value = {this.state.old_password}
                    underlineColorAndroid="transparent"
                    secureTextEntry/>
                  </View>
                  <View>
                  <TextInput style = {styles.inputText}
                    placeholder="New Password..." 
                    onChangeText={(value) => {this.handleChange('new_password',value)}}
                    value = {this.state.new_password}
                    underlineColorAndroid="transparent"
                    secureTextEntry/>
                  </View>
                </View>
            </View>
            <View style={styles.container}>
                {this.renderRequest()}
            </View>
        </View>
    )
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

export default ResetPassword;
