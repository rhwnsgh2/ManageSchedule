/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarComponent from './calendar/calendar';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavi from './bottomNavigator/bottomNavigator';
import DrawNavi from './drawerNavigation/drawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawNavi />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
