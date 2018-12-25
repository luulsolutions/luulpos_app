import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor:Colors.grey,
    flex: 1,
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
