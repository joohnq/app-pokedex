import { StyleSheet, FlatList, SafeAreaView, View } from "react-native";
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
  {
    id: "3",
    name: "Charmander",
    habilitieOne: "Fire",
    habilitieTwo: "Resistenceddddd",
    cover: require("../assets/charmander.png"),
    bgColor: "FC6C6D",
  },
  {
    id: "4",
    name: "Charmander",
    habilitieOne: "Fire",
    habilitieTwo: "Resistenceddddd",
    cover: require("../assets/charmander.png"),
    bgColor: "FC6C6D",
  },
];

export default function Home() {
  function renderItem({ item }) {
    return (
      <View style={{width: '50%'}}>
        <CardPokemon
          name={item.name}
          habilitieOne={item.habilitieOne}
          habilitieTwo={item.habilitieTwo}
          cover={item.cover}
          bgColor={item.bgColor}
          id={item.id}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{padding: 10}}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
