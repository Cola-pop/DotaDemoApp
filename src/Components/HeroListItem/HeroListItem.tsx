import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

import styles from './HeroListItem.style';

const HeroListItem = (props: any) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={{
          uri: 'https://api.opendota.com' + props.image,
        }}
        style={styles.itemImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemAttackType}>
          {props.attackType} |{' '}
          {props.roles.map((role: any) => (
            <Text style={styles.role}>{role} </Text>
          ))}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeroListItem;
