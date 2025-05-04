import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til Habitree!</Text>
      <Text>Dette er min første skjerm 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fyll hele skjermen
    justifyContent: "center", // Sentrert vertikalt
    alignItems: "center", // Sentrert horisontalt
    backgroundColor: "#fff", // Hvit backgrunn
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
