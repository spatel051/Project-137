import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppContainer = createAppContainer(stackNavigator);

const stackNavigator = createStackNavigator({
  Home: {screen: HomeScreen,
  navigationOptions: {
    headerShown: false
  }},
  Details: {screen: DetailsScreen}
}, {
  initialRouteName: 'Home'
});