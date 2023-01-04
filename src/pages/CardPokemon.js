import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

export default function CardPokemon(props) {
  const styleBgColor = styleFunction(`#${props.bgColor}`);
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={[styles.cardPokemon, styleBgColor.cardPokemon]}>
        <Text style={styles.pName}>{props.name}</Text>
        <View style={styles.content}>
          <View style={{ alignItems: "flex-start" }}>
            <Text style={[styles.pHabilitieTitle, styleBgColor.pHabilitieTitle]}>{props.habilitieOne}</Text>
            <Text style={[styles.pHabilitieTitle, styleBgColor.pHabilitieTitle]}>{props.habilitieTwo}</Text>
          </View>
          <ImageBackground
            source={props.cover}
            resizeMode="cover"
            style={{ width: 80, height: 80 }}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardPokemon: {
    flexDirection: "column",
    width: "50%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pName: {
    color: "#fff",
    fontSize: 16,
    alignItems: "flex-start",
    fontFamily: "Poppins_700Bold",
  },

  pHabilitieTitle: {
    fontFamily: "Poppins_700Bold",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 9,
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

    pHabilitieTitle:{
        color: bgColor
    }
  });
