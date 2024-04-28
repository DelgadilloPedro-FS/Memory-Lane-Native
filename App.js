import JournalEntry from "./components/JournalEntry";
import Heading from "./components/Heading";
import { SafeAreaView,FlatList } from "react-native";
import styles,{container} from "./Appstyles";
import React, { useState, useEffect } from 'react';

export default function App() {
  const [journals, setJournals] = useState([]);
  const API_BASE = "http://localhost:8000";

  useEffect(() => {
    fetch(`${API_BASE}/journals`)
      .then((response) => response.json())
      .then((data) => setJournals(data));
  }, []);

  return (
    <SafeAreaView style={container}>
      <Heading title={"Memory Lane"}/>
      <FlatList
        data={journals}
        renderItem={({ item }) => <JournalEntry journal={item} />}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
}

