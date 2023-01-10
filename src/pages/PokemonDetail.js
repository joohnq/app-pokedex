import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import WhatIsBgCard from "../components/WhatIsBgCard";
import BarProgress from "../components/BarProgress";

export default function PokemonDetail({ route }) {
  const navigation = useNavigation();
  const [pokemonName, setPokemonName] = useState("Loading...");
  const [pokemonCover, setPokemonCover] = useState("Loading...");
  const [pokemonDesc, setPokemonDesc] = useState("Loading...");
  const [pokemonHabOne, setPokemonHabOne] = useState("Loading...");
  const [pokemonHabTwo, setPokemonHabTwo] = useState("");

  const [pokemonHp, setPokemonHp] = useState("");
  const [pokemonAtk, setPokemonAtk] = useState("");
  const [pokemonDef, setPokemonDef] = useState("");
  const [pokemonSpd, setPokemonSpd] = useState("");
  const [pokemonSa, setPokemonSa] = useState("");
  const [pokemonSd, setPokemonSd] = useState("");

  const styleBgColor = styleFunction(`#${WhatIsBgCard(pokemonHabOne)}`);

  useEffect(() => {
    catchPokemon(route.params.id);
  }, []);

  const catchPokemon = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemonName(res.data.name);
      setPokemonCover(res.data.sprites.other["official-artwork"].front_default);
      setPokemonHabOne(res.data.types[0].type.name);
      if (res.data.types[1] == undefined) {
        setPokemonHabTwo("");
      } else {
        setPokemonHabTwo(res.data.types[1].type.name);
      }
      setPokemonHp(res.data.stats[0].base_stat);
      setPokemonAtk(res.data.stats[1].base_stat);
      setPokemonDef(res.data.stats[2].base_stat);
      setPokemonSa(res.data.stats[3].base_stat);
      setPokemonSd(res.data.stats[4].base_stat);
      setPokemonSpd(res.data.stats[5].base_stat);
    });

    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => {
      res.data.flavor_text_entries.filter((item) => {
        if (item.language.name == "en" && item.version.name == "red") {
          const newText = item.flavor_text.replace(/(\r\n|\n|\r)/gm, " ");
          setPokemonDesc(newText);
        }
      });
    });
  };

  if (pokemonHabTwo == "") {
    return (
      <>
        <StatusBar translucent={false}></StatusBar>
        <ScrollView>
          <View style={[styles.sectionCover, styleBgColor.sectionCover]}>
            <View style={{ alignItems: "flex-start" }}>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={30}
                  color="black"
                  style={styles.arrowBack}
                  onPress={() => navigation.goBack()}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{
                  uri: pokemonCover,
                }}
                style={{
                  width: 250,
                  height: 250,
                  marginTop: -30,
                  marginBottom: 30,
                }}
              />
            </View>
            <Image
              source={require("../assets/wavesOpacity.png")}
              style={{
                width: "100%",
                height: 150,
                position: "absolute",
                bottom: 0,
                zIndex: -1,
              }}
            />
          </View>
          <View style={{ padding: 20 }}>
            <View style={styles.info}>
              <Text style={styles.pName}>{pokemonName}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[styles.pHabilitieTitle, styleBgColor.sectionCover]}
                >
                  {pokemonHabOne}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.pDesc}>{pokemonDesc}</Text>
            </View>
            <View>
              <View>
                <Text style={styles.subtitles}>Base Stats</Text>
              </View>
              <BarProgress
                hp={pokemonHp}
                atk={pokemonAtk}
                def={pokemonDef}
                spd={pokemonSpd}
                sa={pokemonSa}
                sd={pokemonSd}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  } else {
    return (
      <>
        <StatusBar translucent={false}></StatusBar>
        <ScrollView>
          <View style={[styles.sectionCover, styleBgColor.sectionCover]}>
            <View style={{ alignItems: "flex-start" }}>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={30}
                  color="black"
                  style={styles.arrowBack}
                  onPress={() => navigation.goBack()}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{ uri: pokemonCover }}
                style={{
                  width: 250,
                  height: 250,
                  marginTop: -30,
                  marginBottom: 30,
                }}
              />
            </View>
            <Image
              source={require("../assets/wavesOpacity.png")}
              style={{
                width: "100%",
                height: 150,
                position: "absolute",
                bottom: 0,
                zIndex: -1,
              }}
            />
          </View>
          <View style={{ padding: 20 }}>
            <View style={styles.info}>
              <Text style={styles.pName}>{pokemonName}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[styles.pHabilitieTitle, styleBgColor.sectionCover]}
                >
                  {pokemonHabOne}
                </Text>
                <Text
                  style={[styles.pHabilitieTitle, styleBgColor.sectionCover]}
                >
                  {pokemonHabTwo}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.pDesc}>{pokemonDesc}</Text>
            </View>
            <View>
              <View>
                <Text style={styles.subtitles}>Base Stats</Text>
              </View>
              <BarProgress
                hp={pokemonHp}
                atk={pokemonAtk}
                def={pokemonDef}
                spd={pokemonSpd}
                sa={pokemonSa}
                sd={pokemonSd}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  sectionCover: {
    backgroundColor: "#fff",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: "relative",
  },

  arrowBack: {
    color: "#e4e4e4",
    padding: 5,
    borderRadius: 44 / 2,
    marginLeft: 20,
    marginTop: 20,
  },

  pName: {
    color: "#000",
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    textTransform: "capitalize",
  },

  pDesc: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },

  info: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pHabilitieTitle: {
    fontFamily: "Poppins_700Bold",
    backgroundColor: "#fff",
    color: "#fff",
    borderRadius: 10,
    marginLeft: 10,
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    textTransform: "capitalize",
  },

  subtitles: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    textAlign: "center",
  },
});

const styleFunction = (bgColor) =>
  StyleSheet.create({
    sectionCover: {
      backgroundColor: bgColor,
    },
  });
