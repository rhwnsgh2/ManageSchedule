import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavi from '../bottomNavigator/bottomNavigator';
const Drawer = createDrawerNavigator();

const DrawNavi = () => {
  return (
    <Drawer.Navigator initialRouteName="달력">
      <Drawer.Screen name="달력" component={BottomNavi} />
      <Drawer.Screen name="앨범" component={BottomNavi} />
    </Drawer.Navigator>
  );
};

export default DrawNavi;
