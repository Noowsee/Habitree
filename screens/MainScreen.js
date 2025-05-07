import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

export default function MainScreen({ navigation }) {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  return (
    <View style={styles.container}>
      <Text styles={styles.title}>Your Habits</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.habitItem, { borderLeftColor: item.color }]}>
            <Text style={styles.habitText}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No habits listed.</Text>}
      />

      <Button
        title="Add new habit"
        onPress={() =>
          navigation.navigate("AddHabit", { onAddHabit: handleAddHabit })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  habitItem: {
    padding: 10,
    marginBlock: 10,
    borderLeftWidth: 5,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  habitText: {
    forntSize: 18,
  },
});
