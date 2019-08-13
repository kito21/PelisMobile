import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import {  createStackNavigator } from 'react-navigation';
import ProfileMovie from './Profe/ProfileMovie'


const ROOTSTACK = createStackNavigator({
    ProfileMovie: {
      screen: ProfileMovie
    },
  })

  const App = createAppContainer(ROOTSTACK);


export default App;