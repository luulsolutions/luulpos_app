import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  Header: {
    backgroundColor: Colors.jhipsterBlue,
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
  },
  listContent: {
    marginTop: Metrics.baseMargin,
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    marginRight: 0,
    borderRadius: 10,
    paddingTop: 1,
    width: null,
    flex: 1,
  },

});
