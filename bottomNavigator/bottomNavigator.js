import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarComponent from '../calendar/calendar';
import * as Height from '../lib/setHeight';

const BottomTab = createBottomTabNavigator();

const BottomNavi = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === '달력') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === '앨범') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
          height: Height.navigationBarHeight,
        },
      }}>
      <BottomTab.Screen name="달력" component={CalendarComponent} />
      <BottomTab.Screen name="앨범" component={CalendarComponent} />
    </BottomTab.Navigator>
  );
};

export default BottomNavi;
