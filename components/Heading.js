import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Heading = ({ title }) => {
  return (
    <Text style={styles.heading}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16, 
  },
});

export default Heading;