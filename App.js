import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import PokedexScreen from "./src/pages/PokedexScreen";
import PokemonScreen from "./src/pages/PokemonScreen";

const Stack = createNativeStackNavigator();

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
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokedex"
            component={PokedexScreen}
            options={{
              headerShown: true,
              headerTitleStyle: {
                fontFamily: "Poppins_700Bold",
                fontSize: 34,
                color: "#DE092D",
              },
              headerRight: () => (
                <TouchableOpacity>
                  <Ionicons name="search" size={30} color="#DE092D" />
                </TouchableOpacity>
              ),
            }}
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
