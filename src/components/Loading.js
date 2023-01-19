import { StyleSheet, ActivityIndicator, View } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={"#555"} animating={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   marginTop: 20,
   height: '100%',
  },
});
