import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Login from '../screens/authentication/AuthScreen/Login';
import Singup from '../screens/authentication/AuthScreen/Singup';
import CreateProfile from '../screens/authentication/CreateProfile';

import ForgotPassword from '../screens/authentication/password-screens/ForgotPassword';
import ResetPassword from '../screens/authentication/password-screens/ResetPassword';

import { AuthStackParamList, LoginParamList, SingUpParamList, CreateProfileParamList, ForgotPasswordParamList, ResetPasswordParamList } from '../types';

const BottomTab = createBottomTabNavigator<AuthStackParamList>();

export default function AuthBottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Login"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Login"
        component={LoginNavigator}
        options={{
          tabBarVisible: false
        }}
        
      />
      <BottomTab.Screen
        name="SingUp"
        component={SingupNavigator}
        options={{
          tabBarVisible: false
        }}
      />
      <BottomTab.Screen
        name="CreateProfile"
        component={CreateProfileNavigator}
        options={{
          tabBarVisible: false
        }}
      />
      <BottomTab.Screen
        name="ForgotPassword"
        component = {ForgotPasswordNavigator}
        options= {{
          tabBarVisible: false
        }}
      />
      <BottomTab.Screen
        name="ResetPassword"
        component={ResetPasswordNavigator}
        options={{
          tabBarVisible: false
        }}
      />
    </BottomTab.Navigator>
  );
}

const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
}

const SingupStack = createStackNavigator<SingUpParamList>();

function SingupNavigator() {
  return (
    <SingupStack.Navigator>
      <SingupStack.Screen
        name="SingUp"
        component={Singup}
        options={{ headerShown: false }}
      />
    </SingupStack.Navigator>
  );
}

const CreateProfileStack = createStackNavigator<CreateProfileParamList>();

function CreateProfileNavigator() {
  return (
    <CreateProfileStack.Navigator>
      <CreateProfileStack.Screen
          name="CreateProfile"
          component = { CreateProfile }
          options= {{ headerShown: false }}
      />
    </CreateProfileStack.Navigator>
  );
}

const ForgotPasswordStack = createStackNavigator<ForgotPasswordParamList>();

function ForgotPasswordNavigator() {
  return (
    <ForgotPasswordStack.Navigator>
      <ForgotPasswordStack.Screen
        name="ForgotPassword"
        component = { ForgotPassword }
        options = {{
          headerShown: false
        }}
      />
    </ForgotPasswordStack.Navigator>
  );
}

const ResetPasswordStack = createStackNavigator<ResetPasswordParamList>();

function ResetPasswordNavigator() {
  return(
    <ResetPasswordStack.Navigator>
      <ResetPasswordStack.Screen
        name = "ResetPassword"
        component = { ResetPassword }
        options = {{ headerShown: false }}
      />
    </ResetPasswordStack.Navigator>
  );
}