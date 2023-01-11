import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            headerTitle: "Pokedex",
            headerTitleStyle: {
              fontFamily: "Poppins_700Bold",
              fontSize: 28,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={PokemonDetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
