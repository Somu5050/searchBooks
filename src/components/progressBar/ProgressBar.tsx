import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {styles} from './progressBarStyles';
type Props = {
  children: any;
  loading: boolean;
  transparent?: boolean;
};
const {BLACK} = Colors;
export const ProgressBar: React.FC<Props> = ({children, loading}) => (
  <View style={styles.container}>
    {children}
    {loading && (
      <ActivityIndicator
        color={BLACK}
        style={styles.loadingBar}
        size="large"
        animating={true}
      />
    )}
  </View>
);
