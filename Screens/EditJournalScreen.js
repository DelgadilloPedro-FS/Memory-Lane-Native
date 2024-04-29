import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native"; // for navigation

const EditJournalScreen = ({ route }) => {
  const navigation = useNavigation();
  const { journalId } = route.params; // Access journal ID passed from navigation

  const [journal, setJournal] = useState({}); // State for journal data
  const API_BASE = "http://localhost:8000/journals";
  // Fetch journal data based on ID on screen load
  useEffect(() => {
    // Replace with your logic to fetch journal data by ID
    const fetchData = async () => {
      const response = await fetch(`${API_BASE}/${journalId}`); // Replace with your API endpoint
      const fetchedJournal = await response.json();
      setJournal(fetchedJournal);
    };

    fetchData();
  }, [journalId]); // Re-run effect when journalId changes

  const handleChangeText = (name, value) => {
    setJournal({ ...journal, [name]: value });
  };

  const handleSavePress = async ({ _id, name, entry }) => {

    const response = await fetch(API_BASE/_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, entry }),
    });

    if (response.ok) {
      console.log("Journal saved successfully!");
      navigation.goBack(); // Navigate back if successful
    } else {
      console.error("Error saving journal:", response.statusText);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Journal Entry</Text>
      {journal && ( // Render form only if journal data is available
        <>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            value={journal.name}
            onChangeText={(text) => handleChangeText("name", text)}
            defaultVaule={journal.name}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Entry"
            multiline={true}
            numberOfLines={4}
            value={journal.entry}
            onChangeText={(text) => handleChangeText("entry", text)}
          />
          <Button title="Save Journal" onPress={() => handleSavePress(journal)} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
  },
});

export default EditJournalScreen;
