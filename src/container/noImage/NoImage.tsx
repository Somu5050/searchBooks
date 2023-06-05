import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './noImageStyles';

const NoImage: React.FC<{}> = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No Image</Text>
  </View>
);

export default NoImage;
