import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

const JournalCard = ({ journal, onDelete, onEdit }) => {
  const navigation = useNavigation()

  const { name, author_First_Name, author_Last_Name, entry, createdAt, _id } = journal;
  const formattedDate = format(new Date(createdAt), 'MMMM d, yyyy');

  const [isEditing, setIsEditing] = useState(false);

  const handleEditPress = () => {
    if (onEdit) {
      onEdit(_id);
    } else {
      navigation.navigate('EditJournal', { journalId: _id });
    }
  };

  const handleDeletePress = () => {
    Alert.alert(
      'Delete Journal Entry',
      'Are you sure you want to delete this entry?',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            if (onDelete) {
              onDelete(_id);
            } else {
              Alert.alert('Journal Entry Deleted');
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.journalCard}>
      <Text style={styles.entryTitle}>{name}</Text>
      <Text style={styles.authorText}>
        {author_First_Name} {author_Last_Name} - {formattedDate}
      </Text>
      <Text style={styles.entryText}>{entry}</Text>
      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity onPress={handleEditPress}>
            <Text style={styles.actionText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEditPress}>
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleDeletePress}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
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
  actions: {
    flexDirection: 'row', // Arrange buttons horizontally
    justifyContent: 'flex-end', // Align buttons to the right
    marginTop: 8,
  },
  actionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 16, // Add margin between buttons
  },
});

export default JournalCard;
