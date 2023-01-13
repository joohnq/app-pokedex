import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

export default function CustomTabBar(props) {
  return (
    <View style={styles.tabBar}>
      <BottomTabBar {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#DE092D",
    borderRadius: 10,
  },
});
