import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

import styles from './HeroListItem.style';

type HeroItemProps = {
  press: Function;
  idx: number;
  image: string;
  title: string;
  attackType: string;
  roles: [];
};
class HeroListItem extends React.PureComponent<HeroItemProps> {
  render() {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          this.props.press(this.props.idx);
        }}
      >
        <Image
          source={{
            uri: 'https://api.opendota.com' + this.props.image,
          }}
          style={styles.itemImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{this.props.title}</Text>
          <Text style={styles.itemAttackType}>
            {this.props.attackType} |{' '}
            {this.props.roles.map((role: any) => (
              <Text style={styles.role}>{role} </Text>
            ))}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default HeroListItem;
