import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './HeroDetailScreen.style';

const HeroDetailScreen = (props: any) => {
  React.useEffect(() => {
    console.log('https://api.opendota.com' + props.route.params.hero.img);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://api.opendota.com' + props.route.params.hero.img,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default HeroDetailScreen;
