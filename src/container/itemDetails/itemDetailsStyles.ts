import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
const {BLACK} = Colors;
export const styles = StyleSheet.create({
  container: {marginTop: 10},
  subContainer: {flex: 1, marginTop: 5, marginLeft: 5},
  rowContainer: {flexDirection: 'row'},
  image: {
    width: 62,
    height: 95,
    alignSelf: 'flex-start',
  },
  keyText: {fontSize: 14, color: BLACK, flex: 1},
  valueText: {fontSize: 14, flex: 1},
  titleText: {fontWeight: 'bold', color: BLACK, fontSize: 16},
  authorText: {color: BLACK, fontSize: 14},
  subjectText: {fontSize: 14},
});
