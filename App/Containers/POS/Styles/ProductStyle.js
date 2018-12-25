import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../../Themes';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    width: '100%',
    height: '100%',

  },
  itemContainer: {
    borderRadius: 10,
  },
  items: {
    justifyContent: 'space-between',
    flex: 1,
  },
  gridView: {
    flex: 1,
    width: '100%',
  },
  modalContainer:{
    alignSelf:'center',
  },
  cardHeader:{
    justifyContent:'space-between'

  },
modalBody:{
 alignSelf:'center',

 justifyContent:'space-between',
 flexDirection:'column'
},
modalButtons:{
  flex:1,
 flexDirection:'row',
 justifyContent:'space-between'
},
dailog:{

  height:'100@ms0.5',
width:'300@ms0.5'
}

});
