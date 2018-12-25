import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Themes';


export default StyleSheet.create({
 container:{
   backgroundColor:Colors.primary,
   flex:1,
   width:'100%',
   height:150,
   justifyContent:'center',
   alignItems:'center',
   marginBottom:100,
   
 },
 logo:{
   width:100,
   height:100,
   borderRadius:50,
   marginBottom:25,
   

 },
 fullName:{
  marginBottom:-100,  
  fontFamily:'Roboto Slab',
  color:Colors.blacktext,
  fontSize:24,
  

}
});
