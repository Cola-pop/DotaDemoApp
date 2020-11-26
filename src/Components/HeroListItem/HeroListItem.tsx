import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const HeroListItem = (props: any) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ff9999',
    padding: 20,
    margin: 5,
  },
  itemText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 32,
  },
});

export default HeroListItem;
