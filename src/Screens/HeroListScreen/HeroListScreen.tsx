import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';

import HeroListItem from '../../Components/HeroListItem/HeroListItem';

const HeroListScreen = (props: any) => {
  const { navigation } = props;
  const [heroes, setHeroes] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const goToNextScreen = () => {
    navigation.navigate('HeroDetail');
  };

  const renderItem = function ({ item }: { item: any }) {
    return (
      <HeroListItem
        image={item.img}
        title={item.localized_name}
        attackType={item.attack_type}
        roles={item.roles}
      />
    );
  };

  const getHeroes = async () => {
    try {
      let response = await fetch('https://api.opendota.com/api/heroStats');
      let json = await response.json();

      setHeroes(json);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getHeroes();
  };

  useEffect(() => {
    setLoading(true);
    getHeroes();
  }, []);

  return loading || refreshing ? (
    <View style={[styles.spinnerContainer, styles.horizontal]}>
      <ActivityIndicator size={200} color='red' />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={heroes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#18191a',
    padding: 8,
  },
  spinnerContainer: {
    backgroundColor: '#18191a',
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
