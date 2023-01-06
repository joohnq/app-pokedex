import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import React from "react";
import axios from "axios";

export default function PokemonDetail() {
  return (
    <ScrollView>
      <View style={styles.sectionCover}>
        <Text>Hello</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionCover: {
    backgroundColor: "red",
    width: "100%",
    height: 300,
  },
});
