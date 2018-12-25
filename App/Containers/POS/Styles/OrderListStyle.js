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
		borderBottomWidth: 1,
		borderColor: Colors.blacktext
		 
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
		justifyContent: 'space-between'
	},

	boldLabel: {
		fontSize:16,
		fontFamily:'Roboto-Regular',
		alignSelf: 'center',
		color: Colors.title,
		textAlign: 'center',
		marginBottom: Metrics.smallMargin
  },
  headerContainer:{
			 flex:1,
			 justifyContent:'center'
  },
  headerTitle:{
     justifyContent:'space-between',
	 marginBottom:30,
	 flexDirection:'row',
	},
	headerTitleText:{
	alignSelf:'center',
	fontSize:15,
	color:Colors.blacktext,
	fontFamily:"Roboto-Regular"
	 },
	headRow: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: Colors.blacktext
	},
	label: {
		textAlign: 'center',
		color: Colors.primary,
		fontFamily:'Roboto-Regular'

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
    width:110,
    justifyContent:'center',
    backgroundColor: Colors.darkgreen,
   
  },
  summerButtonCancel: {
    margin: 10,
    width:110,
  justifyContent:'center',
    backgroundColor: Colors.white,
    borderBottomColor:Colors.primary,
    borderWidth:1,
  },
  summerButtonPay: {
    margin: 10,
    width:110,
    justifyContent:'center',
		backgroundColor: Colors.primary
  },
  summeryButtonText:{
		fontSize:20,
		color:Colors.darkgreen
  },
  summeryText:{
		fontSize:20,
		color:Colors.blacktext
  },
  summeryPrice:{
     fontSize:25,
	 fontFamily:'Roboto-Thin',
	 fontWeight:'bold'
	 
  },
  summeryButtonTextPay:{
    fontSize:20,
    color:Colors.text
  },
	summeryButtonTextHold:{
    fontSize:20,
    color:Colors.white
  }
})
