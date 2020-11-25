import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { ScreenOne } from './screens/screenOne';
import { ScreenTwo } from './screens/screenTwo';
import { ScreenThree } from './screens/screenThree';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='ScreenOne' component={ScreenOne}/>
    <Screen name='ScreenTwo' component={ScreenTwo}/>
    <Screen name='ScreenThree' component={ScreenThree}/>
  </Navigator>
);

export default class App extends Component{
    render() { 
        return(
            <NavigationContainer>
                <HomeNavigator/>
            </NavigationContainer>
        );
    }
}