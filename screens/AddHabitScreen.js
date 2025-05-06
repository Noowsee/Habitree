import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  textInput,
  TextInput,
} from "react-native";

export default function AddHabitScreen({ navigation, route }) {
  const [habitName, setHabitName] = useState("");
  const [color, setColor] = useState("#34a853"); // Standard green color

  const handleAdd = () => {
    if (!habitName.trim()) return;

    const newHabit = {
      id: Date.now().toString(),
      name: habitName,
      color: color,
      dates: [],
    };

    // Send habit back to HabitScreen via route.params
    route.params.onAddHabit(newHabit);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Habit-name:</Text>
      <TextInput
        style={styles.input}
        value={habitName}
        onChangeText={setHabitName}
        placeholder="Run, Read, Train, Meditate etc."
      />

      <Text style={styles.label}>Color (hex):</Text>
      <TextInput
        style={styles.input}
        value={color}
        onChangeText={setColor}
        placeholder="#34a853"
      />

      <Button title="Add habit" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
  },
});
