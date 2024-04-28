import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [journals, setJournals] = useState([]);
  const API_BASE = "http://localhost:8000";

  useEffect(() => {
    fetch(`${API_BASE}/journals`)
      .then((response) => response.json())
      .then((data) => setJournals(data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Welcome to Memory Lane</Text>
      <FlatList
        data={journals}
        renderItem={({ item }) => {
          return (
            <>
              <Text>{item.name}</Text>
              <Text>{item.entry}</Text>
            </>
          );
        }}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
