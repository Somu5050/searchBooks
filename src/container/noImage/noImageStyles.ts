import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
const {GRAY} = Colors;
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 62,
    height: 95,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderColor: GRAY,
    borderWidth: 1,
  },
  text: {textAlign: 'center'},
});
