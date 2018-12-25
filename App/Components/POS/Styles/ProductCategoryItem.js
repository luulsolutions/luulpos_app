import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../Themes';
import { Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    marginLeft: Platform.OS === 'ios' ? 15 : 20,
    borderBottomWidth: 1,
    borderBottomColor: '#0364a3',
    justifyContent:'center',
    alignItems:'stretch',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: 'white',
    shadowOffset: { height: 0, width: 0 },
  },
  image: {
    flex:1,
    
    justifyContent:'center',
    height: 120,
     
    
  },
  row: {
    padding: 1,
    marginTop: 1,
    marginBottom: 1,
  },
  name: {
    flex: 1,
    justifyContent: 'center',
    alignSelf:'center',
    alignContent:'center',
    backgroundColor:Colors.nameImage,
    width: "100%"
    
  },
  primaryText: {
    
    margin:1,
    textAlign:'center',
    color: Colors.text, 
    fontSize:20
  },
});
