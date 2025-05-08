import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { eachDayOfInterval, subDays, format, getDay, parseISO } from "date-fns";
import { nb } from "date-fns/locale";

// Dager fra Mandag til Søndag
const weekdayLabels = ["M", "T", "O", "T", "F", "L", "S"];

const getDates = () => {
  const end = new Date();
  const start = subDays(end, 90);
  return eachDayOfInterval({ start, end });
};

export default function HabitGrid({ habit, onToggleDate }) {
  const dates = getDates();

  // Organiseres etter ukedag (rad) og uke (kolonne)
  const columns = Array.from({ length: Math.ceil(dates.length / 7) }, (_, i) =>
    dates.slice(i * 7, i * 7 + 7)
  );

  return (
    <View style={styles.wrapper}>
      {/* Ukedagsetiketter */}
      <View style={styles.labels}>
        {weekdayLabels.map((label, i) => (
          <Text key={i} style={styles.label}>
            {label}
          </Text>
        ))}
      </View>

      {/* Grid: kolonnevis */}
      <View style={styles.grid}>
        {columns.map((week, colIndex) => (
          <View key={colIndex} style={styles.column}>
            {week.map((date, rowIndex) => {
              const dateString = format(date, "yyyy-MM-dd");
              const isDone = habit.dates.includes(dateString);
              const dayNumber = format(date, "d"); // f.eks. "8"
              return (
                <TouchableOpacity
                  key={dateString}
                  style={[
                    styles.cell,
                    { backgroundColor: isDone ? habit.color : "#e0e0e0" },
                  ]}
                  onPress={() => {
                    Alert.alert(
                      isDone ? "Fjern markering" : "Marker dag",
                      `Vil du ${
                        isDone ? "fjerne" : "markere"
                      } ${dayNumber}. ${format(date, "MMMM", { locale: nb })}?`,
                      [
                        { text: "Avbryt", style: "cancel" },
                        {
                          text: "Ja",
                          onPress: () => onToggleDate(dateString),
                        },
                      ]
                    );
                  }}
                >
                  <Text style={styles.cellText}>{dayNumber}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: 10,
  },
  labels: {
    marginRight: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    height: 22,
    marginVertical: 2,
  },
  grid: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    marginRight: 4,
  },
  cell: {
    width: 22,
    height: 22,
    marginVertical: 2,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontSize: 10,
    color: "#000",
    opacity: 0.3,
  },
});
