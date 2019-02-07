import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../../Themes'
import colors from '../../../Themes/Colors';


export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		flex: 1,
		backgroundColor: Colors.jhipsterBlue
	},
	row: {
		flex: 1,
		justifyContent: 'space-between',
		borderBottomWidth: 0.25,
		borderColor: Colors.blacktext,
		padding:3
		 
	},
	colName: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2
		
	},
	colVaraint: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2
	},
	colPrice: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	colActions: {
		flex: 2,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

	boldLabel: {
		fontSize:13,
		fontFamily:'Roboto-Regular',
		alignSelf: 'center',
		color: Colors.darkblue,
		textAlign: 'center',
		marginBottom: Metrics.smallMargin,
		
  },
  headerContainer:{
			 flex:1,
			 justifyContent:'center'
  },
  headerTitle:{
	 justifyContent:'space-between',
	 marginTop:-10,
	 marginBottom:30,
	 flexDirection:'row',
	},
	headerTitleText:{
	alignSelf:'center',
	fontSize:11,
	color:Colors.darkblue,
	fontFamily:"Roboto-light"
	 },
	headRow: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: Colors.blacktext
	},
	label: {
		textAlign: 'center',
		color: Colors.lightdarkblue,
		fontFamily:'Roboto-light',
		fontSize:11,


	},
	listContent: {
		marginTop: Metrics.baseMargin
	},
	summery: {
		flex: 2
	},
	summeryContainer: {
		flex: 2,
	},
	table: {
		padding:20,
		flex: 5,
		borderBottomWidth:2,
		borderStyle:'solid',
		marginBottom:20,
		borderColor:Colors.title


	},
	summeryRow: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	colSum: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	summerButtonsContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center'
	},
	summerButtonHold: {
    margin: 10,
    flex:1,
	justifyContent:'center',
    backgroundColor: Colors.darkgreen,
   
  },
  summerButtonNote: {
    margin: 10,
    flex:1,
    justifyContent:'center',
    backgroundColor: Colors.white,
    borderColor:Colors.primary,
    borderWidth:1,
  },
  summerButtonCancel: {
    margin: 10,
    flex:1,
    justifyContent:'center',
    backgroundColor: Colors.white,
    borderColor:Colors.secondary,
    borderWidth:1,
  },
  summerButtonPay: {
    margin: 10,
    flex:1,
    justifyContent:'center',
	backgroundColor: Colors.primary,
   },
  summeryButtonText:{
		fontSize:15,
		color:Colors.darkgreen
  },
  summeryText:{
		fontSize:12,
		color:Colors.blacktext
  },
  summeryPrice:{
     fontSize:17,
	 fontFamily:'Roboto-Medium',
 	 
  },
  summeryButtonTextPay:{
    fontSize:15,
	color:Colors.text,
	marginLeft:10
	
  },
	summeryButtonTextHold:{
    fontSize:15,
    color:Colors.white
  },
  summeryButtonTextNote:{
    fontSize:15,
    color:Colors.primary
  }
})
