import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList } from 'react-native';

import HeroListItem from '../../Components/HeroListItem/HeroListItem';

const HeroListScreen = (props: any) => {
  const { navigation } = props;
  const [heroes, setHeroes] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const goToNextScreen = () => {
    navigation.navigate('HeroDetail');
  };

  const renderItem = function ({ item }: { item: any }) {
    return <HeroListItem text={item.localized_name} />;
  };

  const getHeroes = async () => {
    try {
      let response = await fetch('https://api.opendota.com/api/heroStats');
      let json = await response.json();

      setHeroes(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getHeroes();
  }, []);

  return loading ? (
    <View style={[styles.spinnerContainer, styles.horizontal]}>
      <ActivityIndicator size={200} color='red' />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={heroes}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
      />
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
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default HeroListScreen;
