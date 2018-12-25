import { Metrics, Colors, Fonts } from '../../Themes';

export default {
  container:{
    margin:5,
    flex:2,
    flexDirection:'row',
    paddingTop:10,
    height:50,
  },
  text: {
    ...Fonts.style.h5,
    color: Colors.primary,
    marginVertical: Metrics.baseMargin,
    
   },
  icon:{
    alignSelf:'flex-end',
    color: Colors.title,
    marginLeft: "95%",
    marginTop:-40,
    
  }
};
