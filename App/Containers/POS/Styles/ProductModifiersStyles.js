import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../../Themes';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    

  },
  Modal: {
    flex:1,
    marginTop: Platform.OS == 'ios' ? 20 : 30,
  },
  crumbsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 10,
    flex: 0.1,
    paddingLeft: 10,
    backgroundColor: Colors.grey,
    borderColor: Colors.grey,

  },

  crumbText: {

    color: Colors.white,
    fontSize: 20,

  },

  crumbStyle : {
    backgroundColor: Colors.snow,
    

  },
  activecrumb: {
    backgroundColor: Colors.primary,

  },
});
