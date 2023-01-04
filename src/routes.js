import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Pokedex}
          options={{
            headerTitle: "Pokedex",
            headerTitleStyle: {
              fontFamily: "Poppins_700Bold",
            },
            headerRight: () => (
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="theme-light-dark"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Pokemon" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
