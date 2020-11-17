import * as React from 'react';
import { StyleSheet, Button, TextInput, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import axios from 'axios';

import { Text, View } from '../../../components/Themed';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

import Custombutton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';

import { CheckBox, Body } from 'native-base';

export default class Singup extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      confirm_password:'',
      user_type: 1,
      
      isSuccessful: false,
      token: '',
      
      checkedBox: false,
    }
    this.submitHandler = this.submitHandler.bind(this);
    console.log(this.state.keyboardState)
  }


  handleChange = ( name: string,value: any ) =>{ 
    console.log([name],value);
    this.setState(() => ({ [name] : value }));
  } 
  
  validSignup = ( token ) => {
    if (token) {
      console.log(token);
      this.setState({ isSuccessful: true });
    }
  }

  submitHandler = (event:any) => {
    event.preventDefault();
    const url = "http://192.168.100.38:8080/api/auth/register/"
    console.log(this.state)

    axios.post(url, this.state)
      .then(response => {
        console.log(response);
        this.validSignup(response.data.token)
        console.log(this.state.token)
        
        this.props.navigation.navigate('Menu',{ 
          screen : 'Home', 
          params: { screen: 'Home',
          params: { token : this.state.token,
           }}, 
        });

      })
      .catch(error => {
        console.log(error)
      })
  }

  render(){
    return(      
      <View style={styles.container}>
          <LinearGradient
              colors={['#194E6D','#33ffe4']}
              style ={{  borderTopLeftRadius: 25, borderTopRightRadius: 25}}
              start={{ y: 1.2, x: 0.0 }} end={{ y: -1.0, x: 0.0 }}
          >
            <View style={styles.swipeBar}></View>

            <View style={{ backgroundColor: 'transparent', width:wp("100%"), height:hp("100%")}}>

              <ScrollView style={styles.inputView}>

                <CustomTextInput placeholder={'first name'} 
                  onChangeText={(value:string) => this.handleChange('first_name',value)} />
                <CustomTextInput placeholder={'last name'} 
                  onChangeText={(value:string) => this.handleChange('last_name',value)} />

                <CustomTextInput placeholder={'email adress'}
                  onChangeText={(value:string) => this.handleChange('email',value)} />

                <CustomTextInput placeholder={'password'} secureTextEntry={true}
                  onChangeText={(value:string) => this.handleChange('password',value)} />
                <CustomTextInput placeholder={'confirm password'} secureTextEntry={true}
                  onChangeText={(value:string) => this.handleChange('confirm_password',value)} />

                <View style={styles.termsAndCondition}>
                  <CheckBox checked={this.state.checkedBox} color={'#00a18c70'} 
                    onPress={ () => this.handleChange('checkedBox',!this.state.checkedBox)}/>
                  <Body>
                    <Text style={styles.textAcc}>Accept the terms and condition</Text>
                  </Body>
                </View>
                <View style={styles.createAccountButton}>
                <Custombutton title={'create account'} 
                  buttonStyle={styles.createAccountButton}
                  onPress={this.submitHandler}/>
                </View>
                
              </ScrollView>
            
            </View>
          </LinearGradient>
        </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp("65%"),
    width: wp("100%"),
    alignContent: "center",
    alignSelf: 'center',
  },
  swipeBar:{
    width: wp("15%"),
    top: "2%",
    alignSelf:'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  inputView:{
    top: "5%",
  },
  termsAndCondition:{
    width: wp("100%"),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    left: "14%",
  },
  textAcc:{
    right: "15%",
    bottom: "5%",
    fontSize: 15,
    fontWeight: '700',
  },
  createAccountButton:{
    backgroundColor: 'transparent', 
    top: "5%", 
    paddingBottom: 25, 
    alignItems: 'center',
  }
})