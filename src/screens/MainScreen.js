/**
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import {createBottomTabNavigator, BottomTabBar, createAppContainer} from 'react-navigation';
import { Realm } from 'realm';

import MainFeed from './MainFeed';
import Search from './Search/Search';
import MyCloset from './MyCloset';
import MyPage from './MyPage';
import ScrapBook from './ScrapBook';
import Icon from 'react-native-vector-icons/Ionicons';

// class App extends React.Component<{}>{
//   render(){
//     return(
//       <View style  = {styles.container}>
//         <Text>LALALALALALA</Text>
//       </View>
//     )
//   }
// }

const TabBarComponent = (props) => (
  <ImageBackground
  source = {require('../assets/gradient3.jpg')}
  style = {{
    width : Dimensions.get('window').width,
    height : 50
  }}
  >
    <BottomTabBar {...props} />
  </ImageBackground>
);


const tabs = createBottomTabNavigator({
  MainFeed:{
    screen: MainFeed,
    navigationOptions:{
      tabBarLabel: "Main Feed",
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-paper" color =
        {tintColor} size={24}/>
      ),
    }
  },
  Search:{
    screen:Search,
    navigationOptions:{
      tabBarLabel: "Search",
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-search" color =
        {tintColor} size={24}/>
      ),
    }
  },

  MyCloset:{
    screen:MyCloset,
    navigationOptions:{
      tabBarLabel: "My Closet",
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-shirt" color =
        {tintColor} size={24}/>
      ),
    }
  },

  ScrapBook:{
    screen:ScrapBook,
    navigationOptions:{
      tabBarLabel: "Scrap Book",
      // tabBarIcon: ({tintColor})=>(
      //   <IcoMoon 
      //     name="closet" 
      //     color ={tintColor}
      //     size = {24}
      //   />
      // ),
    }
  },

  MyPage:{
    screen:MyPage,
    navigationOptions:{
      tabBarLabel: "My Page",
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-person" color =
        {tintColor} size={24}/>
      ),
    }
  },
},{
//   tabBarOptions: {
//     showLabel: false, // hide labels
//     activeTintColor: '#586589', // active icon color
//     inactiveTintColor: '#fff7ff',  // inactive icon color
//     style: {
//         backgroundColor: '#e6cea8' // TabBar background
//   }
// }
  tabBarComponent: props =>
      <TabBarComponent
        {...props}
        showLabel={false}
        activeTintColor='#6B4279'
        inactiveTintColor='#B993C7'
        style={{
          backgroundColor: null,
          borderTopWidth: null,
          // elevation: 2
        }}
      />,
});

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor : '#fff7ff',
    alignItems : 'center',
    justifyContent : 'center',
  },
});

export default createAppContainer(tabs);