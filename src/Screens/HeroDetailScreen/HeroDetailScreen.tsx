import React from 'react';
import { View, Text, Image } from 'react-native';

import AttributeBox from '../../Components/AttributeBox/AttributeBox';
import styles from './HeroDetailScreen.style';

const HeroDetailScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://api.opendota.com' + props.route.params.hero.img,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{props.route.params.hero.localized_name}</Text>
      <Text style={styles.subTitle}>
        {props.route.params.hero.attack_type} |{' '}
        {props.route.params.hero.roles.map((role: string, index: number) => (
          <Text key={index} style={styles.role}>
            {role}{' '}
          </Text>
        ))}
      </Text>
      <View style={styles.statRow}>
        <View
          style={[
            styles.diamond,
            styles.red,
            props.route.params.hero.primary_attr === 'str'
              ? { backgroundColor: 'red' }
              : null,
          ]}
        />
        <Text style={styles.statText}>
          {props.route.params.hero.base_str} Strength
        </Text>
      </View>
      <View style={styles.statRow}>
        <View
          style={[
            styles.diamond,
            styles.green,
            props.route.params.hero.primary_attr === 'agi'
              ? { backgroundColor: 'green' }
              : null,
          ]}
        />
        <Text style={styles.statText}>
          {props.route.params.hero.base_agi} Agility
        </Text>
      </View>
      <View style={styles.statRow}>
        <View
          style={[
            styles.diamond,
            styles.blue,
            props.route.params.hero.primary_attr === 'int'
              ? { backgroundColor: 'blue' }
              : null,
          ]}
        />
        <Text style={styles.statText}>
          {props.route.params.hero.base_int} Intelligence
        </Text>
      </View>
      <View style={styles.attributeRow}>
        <AttributeBox
          text='Base Armor'
          value={props.route.params.hero.base_armor}
        />
        <AttributeBox
          text='Move Speed'
          value={props.route.params.hero.move_speed}
        />
      </View>
      <View style={styles.attributeRow}>
        <AttributeBox
          text='Attack Speed'
          value={props.route.params.hero.attack_rate}
        />
        <AttributeBox
          text='Attack Range'
          value={props.route.params.hero.attack_range}
        />
      </View>
      <View style={styles.attributeRow}>
        <AttributeBox
          text='Base Health'
          value={props.route.params.hero.base_health}
        />
        <AttributeBox
          text='Base Mana'
          value={props.route.params.hero.base_mana}
        />
      </View>
    </View>
  );
};

export default HeroDetailScreen;
