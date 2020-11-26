import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import HeroListScreen from './src/Screens/HeroListScreen/HeroListScreen';
import HeroDetailScreen from './src/Screens/HeroDetailScreen/HeroDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Dota 2 Heroes' component={HeroListScreen} />
        <Stack.Screen name='HeroDetail' component={HeroDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
