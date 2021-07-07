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

const setHeaderDayText = () => {
  return calendarHeaderMonth / 3;
};

export const setDayComponent = () => {
  const remainHeight =
    windowHeight -
    navigationBarHeight -
    calendarHeaderMonth -
    calendarHeaderDayText;
  return remainHeight / 8;
};
export const navigationBarHeight = windowRatioHeight(1 / 11);
export const calendarHeaderMonth = windowAndBarRatioHeight(1 / 11);
export const calendarHeaderDayText = setHeaderDayText();
export const dayComponent = setDayComponent();
export default windowHeight;
