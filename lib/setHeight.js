import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const windowRatioHeight = ratio => {
  return windowHeight * ratio;
};

const windowAndBarRatioHeight = ratio => {
  return (windowHeight - navigationBarHeight) * ratio;
};

export const navigationBarHeight = windowRatioHeight(1 / 11);
export const calendarHeader = windowAndBarRatioHeight(1 / 11);

export default windowHeight;
