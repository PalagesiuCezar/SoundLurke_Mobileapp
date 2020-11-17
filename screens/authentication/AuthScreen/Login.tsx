import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Platform, Keyboard, Animated, Easing } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Modal from 'react-native-modal';

import axios from 'axios';
import Base64 from '../../../constants/utils/Base64';
import { SCALE } from '../../../components/CustomScale';

import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Custombutton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';

import Singup from './Singup';
import { SafeAreaView } from 'react-native-safe-area-context';

const height = Dimensions.get("screen").height;

export default class Login extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email : '',
      password : '',
      isLogged: false,

      isModalVisible: false,
      keyboardState: 'closed',

      animatedValueIn: new Animated.Value(0),
      animatedValueOut: new Animated.Value(0),
    }

    this.submitHandler = this.submitHandler.bind(this);
  }


  handleChange = ( name: string,value: any ) =>{ 
    console.log([name],value);
    this.setState(() => ({ [name] : value }));
  } 


  UNSAFE_componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  UNSAFE_componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
        keyboardState: 'opened'
    });
  }

  _keyboardDidHide = () => {
    this.setState({
        keyboardState: 'closed'
    });
  }


  // handleAnimation = () => {
  //   Animated.timing(this.state.animatedValueIn, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true,
  //       easing: Easing.ease,
  //   }).start()}


  openModal = () => {
    this.setState({ isModalVisible: true });
  }
  toggleModal = () =>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  closeModal = () =>{
    this.setState({ isModalVisible:false })
  }
  
  
  validLogin = async ( fields:any ) => {
    if(fields.data.token) {
        this.setState({isLogged: true});
    }
  }

  goToForgotPassword = () => {
    this.props.navigation.navigate('Auth',{ 
      screen : 'ForgotPassword', 
      params: { screen: 'ForgotPassword', }
    });
  }

  submitHandler = ( event:any ) => {
    event.preventDefault();

    const url = 'http://192.168.100.38:8080/api/auth/login/';
    const credentials = Base64.btoa(`${this.state.email}:${this.state.password}`)

    axios.post(url, this.state ,{
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Basic ${credentials}`
      }
      }
      )
        .then(response => {
          
          this.validLogin(response);

          this.props.navigation.navigate('Menu',{ 
            screen : 'Home', 
            params: { screen: 'Home',
            params: { credential : credentials }}, 
          });

        })
        .catch(error => {
            console.log(error);
        })
  }


  ModalShow = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} 
        style={styles.signInModal}
        onBackButtonPress={() => this.closeModal()}
        onSwipeComplete={()=>this.closeModal()}
        onBackdropPress={()=>this.closeModal()}
        swipeDirection="down"
        animationIn="slideInUp" animationOut="slideOutDown"
        avoidKeyboard={true}
        hasBackdrop={false}
        propagateSwipe
      > 
        <View style={{ marginTop: 'auto',height:hp("63%")}}>
          <View style={styles.modalContainer}>

          <Singup keyboardState = {this.state.keyboardState} />
          
          </View>
        </View>
      </Modal>
    );
  }

  render(){

    return(
        <SafeAreaView style={styles.container}>
          <LinearGradient 
            colors={['#0E0922','#090516','#0E0922']}
            style = { styles.linearGradient }
            locations = {[0.1,0.5,0.9]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >

          <View style = {styles.vectorContainerTop}>
            <Image source={ require('../../../assets/images/Auth/Vectorleft-top.png') } style = {styles.vectorLeftTop} />
            <Image source={ require('../../../assets/images/Auth/Vector-right-top.png') } style = {styles.vectorRightTop} />
          </View>
          
            <View style={styles.mainContainer} onStartShouldSetResponder={() => true} >
              <>
              <ScrollView contentContainerStyle={{flexGrow:1}}
              horizontal={false}
              >
              <View style={{ backgroundColor:'transparence',alignSelf: 'center' ,flexDirection: 'column', flexWrap: 'wrap' }}>

              <View style={styles.logoContainer}>
                <Animated.Image source={require('../../../assets/images/Unti.png')} 
                  style={SCALE.getScaleTransformationStyle(this.state.animatedValueIn)}
                />
              </View>

              <View style={styles.loginContainer}>
                <View style={[styles.topPartContainer,{ bottom: this.state.keyboardState === 'closed' ? 0 : "25%" }]}>
                  <Text style={styles.welcomeBack}>
                    Welcome back.
                  </Text>
                  
                  <View style={styles.inputContainer}>
                      <CustomTextInput placeholder={"email adress"} 
                        secureTextEntry={false} 
                        hasIcon={true} image={require('../../../assets/images/Auth/heroicons-solid_mail.png')}
                        onChangeText={( value: string ) => this.handleChange('email',value)}
                        onFocus={() => SCALE.pressInAnimation(this.state.animatedValueIn)}
                        onBlur={() => SCALE.pressOutAnimation(this.state.animatedValueIn)}
                      />
                    <CustomTextInput placeholder={"password"} 
                      secureTextEntry={true} 
                      hasIcon={true} image={require('../../../assets/images/Auth/ic_round-vpn-key.png')}
                      onChangeText={( value: string ) => this.handleChange('password',value)}
                      onFocus={() => SCALE.pressInAnimation(this.state.animatedValueIn)}
                      onBlur={() => SCALE.pressOutAnimation(this.state.animatedValueIn)}
                    />
                  </View>
                </View>

                <View style={styles.underInputContainer}>
                  
                    <TouchableOpacity onPress={() => this.goToForgotPassword()}>
                      <Text style={styles.forgotPassword}>
                        Forgot your password?
                      </Text>
                    </TouchableOpacity>
                  
                  <View style = {{ backgroundColor: 'transparent', top: "7%" , flex:1,}}>
                      <Custombutton title={'sign in'}
                        onPress={this.submitHandler}
                      />
                  </View>

                  <View style = {styles.dontHave}>
                      <Text style={styles.forgotPassword}>Don't have an account?</Text>

                    <TouchableOpacity onPress={() => this.openModal()}>
                        <Text style={styles.regNow}>Register now</Text>
                    </TouchableOpacity>

                  </View>

                  {this.ModalShow()}

                </View>
              </View>
        
                </View>
              </ScrollView>
              </>
            </View>

          <View style={ styles.vectorContainerBottom }>
                <Image source={ require('../../../assets/images/Auth/Vector-left-bottom.png') } style = {styles.vectorLeftBottom} />
                <Image source={ require('../../../assets/images/Auth/Vector-right-bottom.png') } style = {styles.vectorRightBottom} />
          </View>

          </LinearGradient>
        </SafeAreaView>
    ) 
  }
}

const styles = StyleSheet.create({
    container: {
      alignContent: 'center',
      alignSelf: 'center',
      flex:1,
    },
    linearGradient: {
      height: Platform.OS === 'ios' ? height : height-35 ,
    },
    vectorContainerTop: {
      zIndex: 0,
      width: wp("100%"),
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    vectorLeftTop:{
      width: wp("80%"),
      height: hp("17%"),
      opacity: 0.9,
      left: "10%",
      tintColor: "#29F7FB",
    },
    vectorRightTop:{
      width: wp("100%"),
      height: hp("25%"),
      opacity: 0.5,
      right: "10%",
      tintColor: '#19224A',
    },
    mainContainer:{
      height: hp("60%"),
      backgroundColor: 'transparent',
      flex:1,
    },
    logoContainer: {
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    loginContainer: {
      flex: 1,
      top: "10%",
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    topPartContainer:{
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeBack: {
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: 28,
      marginBottom: 5
    },
    inputContainer: {
      width: wp("79,7%"),
      alignSelf: 'center',
      backgroundColor: "#59C0C225",
      borderRadius: 20,
      paddingVertical: 10,
    },
    underInputContainer:{
      flex:1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      top: "3%",
    },
    forgotPassword:{
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: 15,
    },
    regNow: {
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: 15,
      color: '#1EABB2',
      paddingLeft: 10,
    },
    dontHave: {
      flex:1,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      bottom: "15%",
    }, 
    vectorContainerBottom:{
      width: wp("100%"),
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'relative',
      bottom: 0,
    },
    vectorLeftBottom:{
      width: wp("100%"),
      left: "40%",
      opacity: 0.7,
      tintColor: '#19224A',
    },
    vectorRightBottom:{
      width: wp("70%"),
      height: hp("11%"),
      right: "50%",
      opacity: 0.9,
      tintColor: "#29F7FB",
    },
    signInModal:{
      marginTop: 'auto',
      justifyContent:'flex-end',
      margin:0,
    },
    modalContainer:{
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: 'white', 
      borderTopLeftRadius:25, 
      borderTopRightRadius: 25,
    }
  });

  