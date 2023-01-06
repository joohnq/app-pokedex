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

  const catchPokemons = () => {
    const endpoints = [];
    for (let i = 1; i <= 20; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => setListPokemons(data));
  };

  const whatIsBgCard = (type) => {
    switch (type) {
      case "bug":
        return "C1D88A";
        break;
      case "dark":
        return "5A5366";
        break;
      case "dragon":
        return "086EC0";
        break;
      case "electric":
        return "F4D23C";
        break;
      case "fairy":
        return "EC8DE4";
        break;
      case "fighting":
        return "D34870";
        break;
      case "fire":
        return "F08080";
        break;
      case "flying":
        return "8FA8DD";
        break;
      case "ghost":
        return "5369AD";
        break;
      case "grass":
        return "5FB953";
        break;
      case "ground":
        return "D97746";
        break;
      case "ice":
        return "75D0C2";
        break;
      case "normal":
        return "919AA1";
        break;
      case "poison":
        return "A566C7";
        break;
      case "psychic":
        return "FFA399";
        break;
      case "rock":
        return "C8B98C";
        break;
      case "steel":
        return "52889C";
        break;
      case "water":
        return "5091D6";
        break;
    }
  };

  useEffect(() => {
    catchPokemons();
  }, []);

  function renderItem({ item }) {
    return (
      <View style={{ width: "50%" }}>
        <CardPokemon
          name={item.data.name}
          habilitieOne={item.data.types[0].type.name}
          // habilitieTwo={item.data.types[1].type.name}
          cover={item.data.sprites.other["official-artwork"].front_default}
          bgColor={whatIsBgCard(item.data.types[0].type.name)}
          id={item.data.id}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <FlatList
        data={listPokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.data.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
