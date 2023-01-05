import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CardPokemon(props) {
  const functionId = (id) => {
    if (Number(id) < 10) {
      return `#00${id}`;
    } else if (Number(id) >= 10 && Number(id) <= 100) {
      return `#0${id}`;
    } else if (Number(id) >= 100) {
      return `#${id}`;
    }
  };

  const styleBgColor = styleFunction(`#${props.bgColor}`);
  return (
    <TouchableOpacity style={[styles.cardPokemon, styleBgColor.cardPokemon]}>
      <View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={props.cover}
            style={{ width: 100, height: 100, marginTop: -45 }}
          />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.pId}>{functionId(props.id)}</Text>
            <Text style={styles.pName}>{props.name}</Text>
            <View style={styles.habilities}>
              <Text
                style={[styles.pHabilitieTitle, styleBgColor.pHabilitieTitle]}
              >
                {props.habilitieOne}
              </Text>
              <Text
                style={[styles.pHabilitieTitle, styleBgColor.pHabilitieTitle]}
              >
                {props.habilitieTwo}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardPokemon: {
    flexDirection: "column",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    marginTop: 40,
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
    color: "#49c4ad",
    paddingHorizontal: 10,
    paddingVertical: 2,
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
