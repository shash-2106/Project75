import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
    return (
     <AppContainer/>
     
    );
  }
  }
  const TabNavigator = createBottomTabNavigator({Write:{screen:WriteStoryScreen},Read:{screen:ReadStoryScreen}},
    {
      defaultNavigationOptions : ({navigation})=>({
        tabBarIcon:()=>{
          const routeName = navigation.state.routeName
          if(routeName=="Read"){
            return(<Image source={require("./assets/readBook.png")} style={{width:40,height:40}}></Image>)

          }
         else if(routeName=="Write"){
           return(<Image source={require("./assets/writeBook.png")} style={{width:40,height:40}}></Image>)
         }
        }
      })
    }
    )
  
  const AppContainer = createAppContainer(TabNavigator);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });