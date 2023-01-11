import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokedexScreen from "./pages/PokedexScreen";
import PokemonScreen from "./pages/PokemonScreen";
import SearchScreen from "./pages/SearchScreen";

const Stack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={PokedexScreen}
        options={{
          headerTitle: "Pokedex",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_700Bold",
            fontSize: 28,
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={PokemonScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function SearchStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
