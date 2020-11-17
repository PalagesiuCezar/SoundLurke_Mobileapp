import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {StyleSheet, View , TextInput, TouchableOpacity, Text} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App(){

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
    if (!isLoadingComplete) {
          return null;
        } else {
      return (
        <SafeAreaProvider>
           <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
    )}
  }

