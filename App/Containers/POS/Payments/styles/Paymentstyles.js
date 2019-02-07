import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../../../Themes/';
import colors from '../../../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingBottom: Metrics.baseMargin,
   },
  col: {
    borderColor: Colors.jhipsterBlue,
    borderRadius: 5,
    borderWidth: 1,
  },
  header: {
    backgroundColor: Colors.primary,
  },
  searchBar: {
    marginTop: 500,
    backgroundColor: Colors.green,
  },
  crumbsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin:5,
    borderRadius: 5,
    borderColor: Colors.primary,
    borderWidth: 2,
  },

  crumbText: {
    textAlign:'center',
    color: Colors.white,
    fontSize: 20,

  },

  crumb: {
   
    alignSelf:'center'

  },
  activecrumb: {
    backgroundColor: Colors.primary,
     
  },
  productCol: {
    backgroundColor: Colors.grey,
  },
  topLogo: {
    alignSelf: 'center',
    width: 150,
    height: 35,
    marginRight:500,
   
     
  },
  headRow: {
    flex: 1,
    paddingBottom:10,
		borderBottomWidth: 1,
		borderColor: Colors.blacktext
  },
  colName: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2
		
	},
  table: {
		padding:10,
		flex: 1,
		marginBottom:20,
		borderColor:Colors.title


  },
  label: {
		textAlign: 'center',
		color: Colors.lightdarkblue,
		fontFamily:'Roboto-light',
		fontSize:11,


  },
  row: {
    flex: 1,
    height:40,
		justifyContent: 'space-between',
		borderBottomWidth: 0.25,
		borderColor: Colors.blacktext,
		padding:10
		 
	},
  total:{
    flex:2,
    backgroundColor:colors.grey,
    padding:10

  },
  totaltext:{
    fontSize:20,
    color:colors.lightdarkblue,
    fontFamily:'Roboto-light'
  },
  paymentMethod:{
    justifyContent:'space-around',
    backgroundColor:'red',
    marginTop:5,
    padding:10,
  }
});
