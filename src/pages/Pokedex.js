import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import CardPokemon from "./CardPokemon";
import axios from "axios";

// const Data = [
//   {
//     id: "1",
//     name: "Bulbasaur",
//     habilitieOne: "Glass",
//     habilitieTwo: "Poison",
//     cover: require("../assets/bulbasaur.png"),
//     bgColor: "49c4ad",
//   },
//   {
//     id: "2",
//     name: "Charmander",
//     habilitieOne: "Fire",
//     habilitieTwo: "Resistenceddddd",
//     cover: require("../assets/charmander.png"),
//     bgColor: "FC6C6D",
//   },
//   {
//     id: "3",
//     name: "Charmander",
//     habilitieOne: "Fire",
//     habilitieTwo: "Resistenceddddd",
//     cover: require("../assets/charmander.png"),
//     bgColor: "FC6C6D",
//   },
//   {
//     id: "4",
//     name: "Charmander",
//     habilitieOne: "Fire",
//     habilitieTwo: "Resistenceddddd",
//     cover: require("../assets/charmander.png"),
//     bgColor: "FC6C6D",
//   },
// ];

export default function Home() {
  const [listPokemons, setListPokemons] = useState([]);

  const catchPokemons = async () => {
    const endpoints = [];

    for (let i = 1; i <= 2; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    await axios.all(
      endpoints.map((endpoint) => {
        axios
          .get(endpoint)
          .then((res) => setListPokemons(res))// ERROORRRRRRRRRRRRRRRRRRRRRRRRR
          .catch((err) => console.log(err));
      })
    );
  };

  useEffect(() => {
    catchPokemons();
  }, []);

  function renderItem({ item }) {
    return (
      <View style={{ width: "50%" }}>
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
    <SafeAreaView style={{ padding: 10 }}>
      {/* <FlatList
        data={listPokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
