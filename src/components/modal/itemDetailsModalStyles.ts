import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
const {WHITE, BLACK_WITH_OPACITY} = Colors;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: BLACK_WITH_OPACITY,
  },
  modal: {
    padding: 20,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: WHITE,
    width: '90%',
    height: '70%',
    borderRadius: 5,
  },
  closeContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  closeImage: {
    height: 30,
    width: 30,
  },
});
