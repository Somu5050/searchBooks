import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
type Props = {
  children: any;
  style?: {};
};
const Card: React.FC<Props> = ({children, style}) => (
  <View style={[styles.cardContainer, style]}>{children}</View>
);
const {WHITE, BLACK} = Colors;
export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: WHITE,
    shadowColor: BLACK,
    padding: 10,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 3,
    borderWidth: 0,
    borderColor: BLACK,
    margin: 5,
  },
});

export default Card;
