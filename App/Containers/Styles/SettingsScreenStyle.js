import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding: 20,
  },
  buttonIcon: {
 backgroundColor:Colors.primary
  },
icon:{
  color: Colors.text
}

});
