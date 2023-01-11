import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import CardPokemon from "../components/CardPokemon";
import WhatIsBgCard from "../components/WhatIsBgCard";
import axios from "axios";

export default function Pokedex() {
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

  function renderItem({ item }) {
    let habilitieTwo;

    if (item.data.types[1] == undefined) {
      habilitieTwo = "null";
    } else {
      habilitieTwo = item.data.types[1].type.name;
    }

    return (
      <View style={{ width: "50%" }}>
        <StatusBar style="dark" backgroundColor="#fff"></StatusBar>
        <CardPokemon
          name={item.data.name}
          habilitieOne={item.data.types[0].type.name}
          habilitieTwo={habilitieTwo}
          cover={item.data.sprites.other["official-artwork"].front_default}
          bgColor={WhatIsBgCard(item.data.types[0].type.name)}
          id={item.data.id}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ paddingHorizontal: 10, backgroundColor: "#fff" }}>
      <FlatList
        data={listPokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.data.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
