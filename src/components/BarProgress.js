import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function BarProgress({ hp, atk, def, spd, sa, sd }) {
  return (
    <View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.title}>HP</Text>
        <View>
          <ProgressBar style={styles.bar} progress={hp / 300} color={"red"} />
          <Text style={styles.mark}>{hp} / 300</Text>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.title}>ATTACK</Text>
        <View>
          <ProgressBar
            style={styles.bar}
            progress={atk / 300}
            color={"yellow"}
          />
          <Text style={styles.mark}>{atk} / 300</Text>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.title}>DEFENCE</Text>
        <View>
          <ProgressBar style={styles.bar} progress={def / 300} color={"blue"} />
          <Text style={styles.mark}>{def} / 300</Text>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.title}>SPEED</Text>
        <View>
          <ProgressBar style={styles.bar} progress={spd / 300} color={"gray"} />
          <Text style={styles.mark}>{spd} / 300</Text>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.title}>SPECIAL ATTACK</Text>
        <View>
          <ProgressBar style={styles.bar} progress={sa / 300} color={"green"} />
          <Text style={styles.mark}>{sa} / 300</Text>
        </View>
      </View>
      <View style={{ marginBottom: 5 }}>
        <Text style={styles.title}>SPECIAL DEFENCE</Text>
        <View>
          <ProgressBar
            style={styles.bar}
            progress={sd / 300}
            color={"purple"}
          />
          <Text style={styles.mark}>{sd} / 300</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
  bar: {
    height: 12,
    borderRadius: 10,
    position: "relative",
  },
  mark: {
    fontFamily: "Poppins_600SemiBold",
    position: "absolute",
    bottom: 0,
    color: "#000",
    fontSize: 10,
    alignItems: "center",
    top: -1,
    right: 10,
  },
});
