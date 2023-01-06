import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            headerTitle: "",
            // headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="pokeball"
                  size={35}
                  color="black"
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{
                    fontFamily: "Poppins_700Bold",
                    fontSize: 28,
                  }}
                >
                  Pokedex
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={PokemonDetail}
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerLeftContainerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleStyle: {
              fontFamily: "Poppins_700Bold",
              fontSize: 28,
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
