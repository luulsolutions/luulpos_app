import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../../Themes';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    justifyContent: 'space-between',
    width: '100%',

  },
  itemContainer: {
    borderRadius: 10,
    paddingTop: 1,
     },
  gridView: {
    flex: 1,
    width: '100%',
  },
  Modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigSlider:{
    backgroundColor: Colors.transparent,
    height: '140@ms0.5',
    width: '100@ms0.5'
  },
  image:{
    flex:1,
    width:'100%',
    height:'100%'
  }
  
});
