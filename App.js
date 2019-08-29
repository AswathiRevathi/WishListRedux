/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, Button,
  Text,Image,
  StatusBar,AsyncStorage
} from 'react-native';
import Home from './src/Components/Home';
import WishList from './src/Components/WishList';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import NewIcon from './src/Components/NewIcon';
const AppNavigator = createStackNavigator(

  {

  HomeScreen: { screen: Home,

  ///adding test code
   navigationOptions : function(props) {
     console.log("--PRPS",props);


    return {
      title: 'Home',      
    }
  }
  
  },
WishListScreen: { screen: WishList, navigationOptions : function(props) {
  return {title: 'WishList' }}}
});

export default createAppContainer(AppNavigator);

