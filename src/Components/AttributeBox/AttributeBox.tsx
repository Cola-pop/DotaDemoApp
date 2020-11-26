import React from 'react';
import { View, Text } from 'react-native';

import styles from './AttributeBox.style';

const AttributeBox = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
};

export default AttributeBox;
