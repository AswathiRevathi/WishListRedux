
import React,{Component} from 'react';
import {
 
  View,FlatList,
  Text,Image,TouchableHighlight,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class NewIcon extends Component{

constructor(props){
  super(props);
}

  render(){
    return(
      <View
      style={{
        height: 80,
       
      }}
    >
      <TouchableHighlight onPress={() =>this.props.navigation.navigate('WishListScreen')} >
      <Text>This is CustomHeader</Text>
      </TouchableHighlight>
      
    </View>
    )
    ;
  }
}