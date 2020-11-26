import React, { useState } from 'react';
import {
  Button,
  Text,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
} from 'react-native';

const HeroListScreen = (props: any) => {
  const { navigation } = props;

  const goToNextScreen = () => {
    navigation.navigate('HeroDetail');
  };

  const getHeroes = async () => {
    try {
      let response = await fetch('https://api.opendota.com/api/heroStats');
      let json = await response.json();

      return json;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
});

export default HeroListScreen;
