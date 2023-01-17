import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function EmptyListMessage() {
  return (
    <View>
      <Text style={styles.container}>Lista Vazia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
