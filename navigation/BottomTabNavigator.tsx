import { Ionicons,Entypo,SimpleLineIcons,Feather,MaterialCommunityIcons } from '@expo/vector-icons';
import TabBarIcon from '../constants/utils/TabBarIcon';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Home from '../screens/pages/Home';
import Explore from '../screens/pages/Explore';
import Chalendar from '../screens/pages/Chalendar';
import Profile from '../screens/pages/Profile';

import { BottomTabParamList, HomeParamList, ProfileParamList, ExploreParamList, ChalendarParamList} from '../types';

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarPosition = 'bottom'
      swipeEnabled = 'true' 
      animationEnabled = 'true'

      tabBarOptions = {{
        
        activeTintColor: '#0BA4AB',
        inactiveTintColor: '#E5E5E5',
        style: {
          backgroundColor: '#151515'
        },

        showIcon: true,
        showLabel: false, //false

        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#0BA4AB',
          borderBottomWidth: 2,
        },

      }}
      >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon icon='Entypo' name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component = {ExploreNavigator}
        options = {{
          tabBarIcon: ({ color }) => <TabBarIcon icon='MaterialCommunityIcons' name="magnify" color={color} />,
        }}
      />
      <BottomTab.Screen 
        name="Chalendar"
        component = {ChalendarNavigator}
        options ={{
          tabBarIcon: ({ color }) => <TabBarIcon icon='Feather' name="calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon icon='Ionicons' name="md-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const ExploreStack = createStackNavigator<ExploreParamList>();

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator>
        <ExploreStack.Screen 
          name = "Explore"
          component = {Explore}
          options={{ headerShown: false }}
        />
    </ExploreStack.Navigator>
  );
}

const ChalendarStack = createStackNavigator<ChalendarParamList>();

function ChalendarNavigator() {
  return(
    <ChalendarStack.Navigator>
      <ChalendarStack.Screen 
        name = "Chalendar"
        component = {Chalendar}
        options = {{ headerShown: false }}
      />
    </ChalendarStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}
