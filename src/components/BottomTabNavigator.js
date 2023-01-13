import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokedexScreen from "../pages/PokedexScreen";
import SearchScreen from "../pages/SearchScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import CustomTabBarButton from "./CustomTabBarButton";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="Pokedex"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#f5f5f5",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Pokedex") {
            iconName = focused ? "pokeball" : "pokeball";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Search") {
            iconName = focused ? "md-search" : "md-search";
          } else if (route.name === "Menu") {
            iconName = focused ? "menu" : "menu";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Menu"
        component={SearchScreen}
        options={{ tabBarButton: (props) => <CustomTabBarButton {...props} /> }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ tabBarButton: (props) => <CustomTabBarButton {...props} /> }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarButton: (props) => <CustomTabBarButton {...props} /> }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomColor: "#DE092D",
    borderBottomWidth: 2,
    borderTopWidth:0,
    elevation: 0,
    position: "absolute",
    height: 60,
  },
});
