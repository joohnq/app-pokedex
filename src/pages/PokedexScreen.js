import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CardPokemon from "../components/CardPokemon";
import WhatIsBgCard from "../components/WhatIsBgCard";
import axios from "axios";

export default function PokedexScreen({ navigation }) {
  const [listPokemons, setListPokemons] = useState([]);

  const catchPokemons = () => {
    const endpoints = [];
    for (let i = 1; i <= 30; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => setListPokemons(data));
  };

  useEffect(() => {
    catchPokemons();
  }, []);

  function renderPokemon({ item }) {
    let habilitieTwo;

    if (item.data.types[1] == undefined) {
      habilitieTwo = "null";
    } else {
      habilitieTwo = item.data.types[1].type.name;
    }

    return (
      <View style={{ width: "50%" }}>
        <CardPokemon
          name={item.data.name}
          habilitieOne={item.data.types[0].type.name}
          habilitieTwo={habilitieTwo}
          cover={item.data.sprites.other["official-artwork"].front_default}
          bgColor={WhatIsBgCard(item.data.types[0].type.name)}
          id={item.data.id}
          navigation={navigation}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ paddingHorizontal: 10, backgroundColor: "#fff" }}>
      <FlatList
        data={listPokemons}
        renderItem={renderPokemon}
        keyExtractor={(item) => item.data.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
