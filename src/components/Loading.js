import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <ActivityIndicator
      size="large"
      color={"555"}
      animating={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
