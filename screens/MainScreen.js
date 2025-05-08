import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import HabitGrid from "../components/HabitGrid";

export default function MainScreen({ navigation }) {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  return (
    <View style={styles.container}>
      <Text styles={styles.title}>Your Habits</Text>
      <ScrollView>
        {habits.length === 0 ? (
          <Text>No habits listed.</Text>
        ) : (
          habits.map((habit, index) => (
            <View key={habit.id} style={styles.habitBlock}>
              <Text style={styles.habitText}>{habit.name}</Text>
              <HabitGrid
                habit={habit}
                onToggleDate={(date) => {
                  setHabits((prev) =>
                    prev.map((h, i) => {
                      if (i !== index) return h;
                      const dates = h.dates.includes(date)
                        ? h.dates.filter((d) => d !== date)
                        : [...h.dates, date];
                      return { ...h, dates };
                    })
                  );
                }}
              />
            </View>
          ))
        )}
      </ScrollView>

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
  habitBlock: {
    marginBottom: 30,
  },
});
