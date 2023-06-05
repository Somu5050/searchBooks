import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
const {BLACK_WITH_OPACITY} = Colors;
export const styles = StyleSheet.create({
  container: {flex: 1},
  loadingBar: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLACK_WITH_OPACITY,
  },
});
