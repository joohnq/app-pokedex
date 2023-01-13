import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import BottomTabNavigator from "./src/components/BottomTabNavigator";
import PokemonScreen from "./src/pages/PokemonScreen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Stack = createNativeStackNavigator();

function Tabs() {
  return <BottomTabNavigator />;
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
      <StatusBar style="light" backgroundColor="#DE092D" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Tabs}
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
