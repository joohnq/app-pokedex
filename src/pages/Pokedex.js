import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import CardPokemon from "./CardPokemon";

const Data = [
  {
    id: "1",
    name: "Bulbasaur",
    habilitieOne: "Glass",
    habilitieTwo: "Poison",
    cover: require("../assets/bulbasaur.png"),
    bgColor: "49c4ad",
  },
  {
    id: "2",
    name: "Charmander",
    habilitieOne: "Fire",
    habilitieTwo: "Resistenceddddd",
    cover: require("../assets/charmander.png"),
    bgColor: "FC6C6D",
  },
];

export default function Home() {
  const renderItem = ({ item }) => (
    <CardPokemon
      name={item.name}
      habilitieOne={item.habilitieOne}
      habilitieTwo={item.habilitieTwo}
      cover={item.cover}
      bgColor={item.bgColor}
    />
  );

  return (
    <View style={{ width: "100%", padding: 10 }}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
