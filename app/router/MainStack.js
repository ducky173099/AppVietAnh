import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/main/HomeScreen';
import BottomTab from './BottomTab';
import PlayerMusicScreen from '../screens/main/PlayerMusicScreen';


const MainStack = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
        BottomTab:{
            screen: BottomTab,
            navigationOptions: {
                headerShown: false,
            },
        },
        PlayerMusicScreen:{
            screen: PlayerMusicScreen,
            navigationOptions: {
                headerShown: false,
            },
        },

    },
    {
      initialRouteName: 'BottomTab',
      initialRouteParams: {transition: 'fade'},
      // mode: 'modal',
    },
);

  
export default MainStack;