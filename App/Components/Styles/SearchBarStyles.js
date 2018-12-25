import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Themes/';
import { Col } from 'native-base';

export default StyleSheet.create({
  container: {
    height:40,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    width: Metrics.screenWidth -260,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    height: Metrics.searchBarHeight,
    alignSelf: 'center',
    padding: Metrics.smallMargin,
    textAlign: 'left',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.instructions,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.snow,
    paddingLeft: 30,
    color: Colors.snow,
    flexDirection: 'row',
    marginLeft: 1,
    marginRight: 10,
  },
  searchIcon: {
    left: Metrics.doubleBaseMargin,
    alignSelf: 'center',
    color: Colors.primary,
    backgroundColor: Colors.transparent,
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.primary,
    marginHorizontal: Metrics.baseMargin,
  },
  buttonLabel: {
    color: Colors.snow,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
  },
});
