import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,

  },

  titleText: {
    alignSelf: 'center',
    fontSize: 30,
    color: Colors.primary,
    fontFamily:"Roboto-Thin"
  },
});
