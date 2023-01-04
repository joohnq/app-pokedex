import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';

const Stack = createNativeStackNavigator()

export default function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokedex" component={Pokedex}/>
        <Stack.Screen name="Pokemon" component={Pokemon}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}