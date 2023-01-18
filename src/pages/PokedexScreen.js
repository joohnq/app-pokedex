import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
} from "react-native";
import CardPokemon from "../components/CardPokemon";
import WhatIsBgCard from "../components/WhatIsBgCard";
import axios from "axios";
import { Ionicons, Feather } from "@expo/vector-icons";
import Loading from "../components/Loading";

export default function PokedexScreen({ navigation }) {
  const [listPokemons, setListPokemons] = useState([]);
  const [pokemonInput, setPokemonInput] = useState("");

  const catchPokemons = (value) => {
    const endpoints = [];

    if (typeof value === "number") {
      for (let i = 1; i <= value; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }
    } else {
      endpoints.push(
        `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`
      );
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setListPokemons(res))
      .catch((error) => console.log(error));

    setPokemonInput("");
  };

  useEffect(() => {
    catchPokemons(40);
  }, []);

  function renderPokemon({ item }) {
    return (
      <View style={{ width: "50%" }}>
        <CardPokemon
          name={item.data.name}
          habilitieOne={item.data.types[0].type.name}
          habilitieTwo={
            item.data.types[1] == undefined
              ? "null"
              : item.data.types[1].type.name
          }
          cover={item.data.sprites.other["official-artwork"].front_default}
          bgColor={WhatIsBgCard(item.data.types[0].type.name)}
          id={item.data.id}
          navigation={navigation}
        />
      </View>
    );
  }

  return (
    <>
      <View style={styles.searchCamp}>
        <TextInput
          onChangeText={setPokemonInput}
          style={styles.input}
          cursorColor="#b4b4b4"
          value={pokemonInput}
          placeholder="Pokemon Name"
        />
        <TouchableOpacity
          style={styles.btnSearch}
          onPress={() => {
            catchPokemons(pokemonInput);
            Keyboard.dismiss();
          }}
        >
          <Ionicons name="search" size={30} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRefresh}
          onPress={() => {
            catchPokemons(40);
            Keyboard.dismiss();
          }}
        >
          <Feather name="refresh-cw" size={30} color="#333" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={listPokemons}
          renderItem={renderPokemon}
          keyExtractor={(item) => item.data.id}
          numColumns={2}
          ListEmptyComponent={Loading}
          style={{ backgroundColor: "#fff" }}
        />
        <TouchableOpacity>
          <Text>Show More</Text>
          <Feather name="chevron-down" size={20} color="#555" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchCamp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  input: {
    width: "80%",
    backgroundColor: "#f5f5f5",
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    fontFamily: "Poppins_600SemiBold",
  },

  btnSearch: {
    width: "10%",
    marginRight: 10,
  },
});
