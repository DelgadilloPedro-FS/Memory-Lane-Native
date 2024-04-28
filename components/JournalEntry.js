import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns'; // for date formatting

const JournalEntry = ({ journal }) => {
  // Destructure journal data for cleaner access
  const { name, author_First_Name, author_Last_Name, entry, createdAt } = journal;

  // Format the date for a more user-friendly display
  const formattedDate = format(new Date(createdAt), 'MMMM d, yyyy');

  return (
    <View style={styles.journalCard}>
      <Text style={styles.entryTitle}>{name}</Text>
      <Text style={styles.authorText}>
        {author_First_Name} {author_Last_Name} - {formattedDate}
      </Text>
      <Text style={styles.entryText}>{entry}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  journalCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow effect
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  authorText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  entryText: {
    fontSize: 16,
  },
});

export default JournalEntry;
