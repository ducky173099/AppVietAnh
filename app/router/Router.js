import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import MainStack from './MainStack';

const Router = createStackNavigator({
    MainStack: {
      screen: MainStack,
      navigationOptions: {
        headerShown: false,
      },
    },
  
},
{
initialRouteName: 'MainStack',
initialRouteParams: {transition: 'fade'},
// mode: 'modal',
},
);
    
export default Router;