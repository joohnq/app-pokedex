import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import CardPokemon from "../components/CardPokemon";
import WhatIsBgCard from "../components/WhatIsBgCard";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

export default function PokedexScreen({ navigation }) {
  const [listPokemons, setListPokemons] = useState([]);
  const [pokemonInput, setPokemonInput] = useState("");

  const handleSearch = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`).then(res => setListPokemons(res.data)).catch(err => console.log(err));
  };

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
    <View style={{ paddingHorizontal: 10, backgroundColor: "#fff" }}>
      <View style={styles.searchCamp}>
        <TextInput
          onChangeText={setPokemonInput}
          style={styles.input}
          cursorColor="#b4b4b4"
        />
        <TouchableOpacity style={styles.btnSearch} onPress={handleSearch}>
          <Ionicons name="search" size={30} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSearch} onPress={catchPokemons}>
          <Ionicons name="refresh" size={30} color="#333" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={listPokemons}
        renderItem={renderPokemon}
        keyExtractor={(item) => item.data.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchCamp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  input: {
    width: "80%",
    backgroundColor: "#f4f4f4",
    marginRight: 10,
    borderColor: "#adb5bd",
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    fontFamily: "Poppins_600SemiBold",
  },

  btnSearch: {
    width: "10%",
  },
});
