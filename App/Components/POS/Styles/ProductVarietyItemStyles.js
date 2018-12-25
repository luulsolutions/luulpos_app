import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../Themes';
import SecondaryText from '../../../base_components/SecondaryText';
import { Platform } from 'react-native';
import colors from '../../../Themes/Colors';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({

  container: {
    elevation: 10,
    width:230,
    height:250,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginLeft: Platform.OS === 'ios' ? '5@ms0.3' : 10,
    marginRight: Platform.Os == 'ios' ? 10 : 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: colors.secondary,
    shadowOffset: { height: 0, width: 0 },
  },
  addToCart:{
    
    flex: 1,
    
    backgroundColor:Colors.nameImage,
    width: "100%"

  },
  image: {
    width: '100%',
    alignItems: 'flex-start',
    resizeMode: 'stretch',
    height: '100%',
    
   },
  checkIcon: {
    alignSelf: 'flex-end',
   },
  row: {
    padding: 1,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 1,
    marginBottom: 1,
  },
  name: {

  },
  price: {
    alignSelf: 'flex-end',
    width: '20%',
    height: '30%',
  },
  primerytext: {
    fontSize: 18,
    maxHeight: 30,
    color: Colors.black,
    fontFamily: 'Open Sans Condensed, sans-serif',
    fontWeight: 'normal',
  },
  priceText: {
    fontSize: 18,
    width: '100%',
    alignSelf: 'flex-end',
    color: Colors.black,
    fontFamily: 'Roboto Slab',
    fontWeight: 'normal',

  },
  secondarytext: {},
  
  addToCartText: {
    fontSize: 22,
    color: Colors.text,
    fontFamily: 'Roboto Slab',
    alignSelf:'center',
    textAlign:'center',
    marginTop:30,
  },
});
