import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import MainScreen from "./screens/MainScreen";
import AddHabitScreen from "./screens/AddHabitScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcomen" }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Habits" }}
        />
        <Stack.Screen
          name="AddHabit"
          component={AddHabitScreen}
          options={{ title: "New Habit" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
