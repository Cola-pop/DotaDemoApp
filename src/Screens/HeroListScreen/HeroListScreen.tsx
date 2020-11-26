import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';

import HeroListItem from '../../Components/HeroListItem/HeroListItem';
import styles from './HeroListScreen.style';

const HeroListScreen = (props: any) => {
  const { navigation } = props;
  const [heroes, setHeroes] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onItemPress = (id: number) => {
    navigation.navigate('HeroDetail', { hero: heroes[id] });
  };

  const renderItem = function ({ item, index }: { item: any; index: any }) {
    return (
      <HeroListItem
        idx={index}
        image={item.img}
        title={item.localized_name}
        attackType={item.attack_type}
        roles={item.roles}
        press={onItemPress}
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
        keyExtractor={(item, index) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default HeroListScreen;
