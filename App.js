import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StatusBar } from "expo-status-bar";

import PokedexScreen from "./src/pages/PokedexScreen";
import PokemonScreen from "./src/pages/PokemonScreen";
import SearchScreen from "./src/pages/SearchScreen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pokedex" component={PokedexScreen} />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  let [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fonstLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokedex"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PokemonDetail"
            component={PokemonScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
