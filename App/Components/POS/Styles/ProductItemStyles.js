import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../Themes';
import { Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    elevation: 10,
    width:155,
    height:200,
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingTop:5,
    marginLeft: Platform.OS === 'ios' ? 5 : 10,
    marginRight: Platform.OS === 'ios' ? 5 : 10,
    justifyContent:'center',
    alignItems:'center',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'white',
    shadowOffset: { height: 0, width: 0 },
    borderTopLeftRadius:30,
  },
  image: {
    flex:1,
    height:120,
    margin:3
    
     
  },
  row: {
    padding: 1,
    marginTop: 1,
    marginBottom: 1,
  },
  name: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:Colors.transparent,
  },
  primaryText: {
    alignSelf:'center',
    textAlign:'center',
    color: Colors.darkgreen, 
    fontSize:16
  },
  triangle:{
    marginLeft:102,
    marginTop:-19,
    width: -40,
    height: 50,
    borderTopLeftRadius:50,
    
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: Colors.darkgreen,
    transform: [
      {rotate: '90deg'}
    ]
  },
});
