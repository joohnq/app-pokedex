import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

function organizeId(id) {
  if (Number(id) < 10) {
    return `#00${id}`;
  } else if (Number(id) >= 10 && Number(id) < 100) {
    return `#0${id}`;
  } else if (Number(id) >= 100) {
    return `#${id}`;
  }
}

export default function CardPokemon({
  bgColor,
  habilitieOne,
  habilitieTwo,
  cover,
  name,
  id,
  navigation,
}) {
  const styleBgColor = styleFunction(`#${bgColor}`);

  if (habilitieTwo == "null") {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("PokemonDetail", { id: id })}
        style={[styles.cardPokemon, styleBgColor.cardPokemon]}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <ImageBackground
              source={require("../assets/pokebola-background.png")}
              style={{
                width: 80,
                height: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: cover }}
                style={{ width: 100, height: 100, marginTop: -60 }}
              />
            </ImageBackground>
          </View>
          <View style={styles.content}>
            <View>
              <Text style={styles.pId}>{organizeId(id)}</Text>
              <Text style={styles.pName}>{name}</Text>
              <View style={styles.habilities}>
                <Text
                  style={[styles.pHabilitieTitle, styleBgColor.pHabilitieTitle]}
                >
                  {habilitieOne}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("PokemonDetail", { id: id })}
        style={[styles.cardPokemon, styleBgColor.cardPokemon]}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <ImageBackground
              source={require("../assets/pokebola-background.png")}
              style={{
                width: 80,
                height: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: cover }}
                style={{ width: 100, height: 100, marginTop: -60 }}
              />
            </ImageBackground>
          </View>
          <View style={styles.content}>
            <View>
              <Text style={styles.pId}>{organizeId(id)}</Text>
              <Text style={styles.pName}>{name}</Text>
              <View style={styles.habilities}>
                <Text
                  style={[styles.pHabilitieTitle, styleBgColor.pHabilitieTitle]}
                >
                  {habilitieOne}
                </Text>
                <Text
                  style={[styles.pHabilitieTitle, styleBgColor.pHabilitieTitle]}
                >
                  {habilitieTwo}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardPokemon: {
    flexDirection: "column",
    padding: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 30,
    elevation: 2,
  },

  pId: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
  },

  pName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    textTransform: "capitalize",
  },

  habilities: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  pHabilitieTitle: {
    fontFamily: "Poppins_700Bold",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    textTransform: "capitalize",
  },
});

const styleFunction = (bgColor) =>
  StyleSheet.create({
    cardPokemon: {
      backgroundColor: bgColor,
    },

    pHabilitieTitle: {
      color: bgColor,
    },
  });
