import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HeroListScreen from './src/Screens/HeroListScreen/HeroListScreen';
import HeroDetailScreen from './src/Screens/HeroDetailScreen/HeroDetailScreen';

const Stack = createStackNavigator();

const initialState = {
  heroes: [],
};

const reducer = (state = initialState, action: any) => {
  if (action.type === 'UPDATE_HEROES') {
    return action.newHeroes;
  }

  return state;
};

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Dota 2 Heroes' component={HeroListScreen} />
          <Stack.Screen name='Hero Detail' component={HeroDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
