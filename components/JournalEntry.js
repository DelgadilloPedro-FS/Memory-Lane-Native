import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

const JournalEntry = ({ journal }) => {
  const { name, author_First_Name, author_Last_Name, entry, createdAt } =
    journal;

  const formattedDate = format(new Date(createdAt), "MMMM d, yyyy");
  const navigation = useNavigation();

  return (
    <View style={styles.journalCard}>
      <Text style={styles.entryTitle}>{name}</Text>
      <Text style={styles.authorText}>
        {author_First_Name} {author_Last_Name} - {formattedDate}
      </Text>
      <Text style={styles.entryText}>{entry}</Text>
      <Button
        onPress={() => navigation.navigate("Details", { journal })}
        title={"See Details"}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  journalCard: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  authorText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  entryText: {
    fontSize: 16,
  },
});

export default JournalEntry;
