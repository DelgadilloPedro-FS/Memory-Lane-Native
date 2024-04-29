import JournalEntry from "./components/JournalEntry";
import Heading from "./components/Heading";
import { SafeAreaView, FlatList } from "react-native";
import styles, { container } from "./Appstyles";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  const [journals, setJournals] = useState([]);
  const API_BASE = "http://localhost:8000";

  useEffect(() => {
    fetch(`${API_BASE}/journals`)
      .then((response) => response.json())
      .then((data) => setJournals(data));
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Heading title={"Memory Lane"} />
      <FlatList
        data={journals}
        renderItem={({ item }) => <JournalEntry journal={item} />}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
