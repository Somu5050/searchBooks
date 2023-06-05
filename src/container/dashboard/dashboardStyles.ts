import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
const {WHITE, GRAY, BLACK, SLATE_GRAY} = Colors;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    padding: 10,
    flex: 1,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    borderColor: BLACK,
    borderWidth: 0.5,
    height: 40,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: GRAY,
  },
  noDataText: {fontSize: 24, color: BLACK, fontWeight: 'bold'},
  rowItem: {flexDirection: 'row', flex: 1},
  bookName: {fontWeight: 'bold', color: SLATE_GRAY},
  authorName: {alignSelf: 'flex-end'},
});
