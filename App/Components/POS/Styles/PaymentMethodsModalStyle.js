import { ApplicationStyles, Metrics, Colors } from '../../../Themes'
import { ScaledSheet } from 'react-native-size-matters'

export default ScaledSheet.create({
 
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	},

	modalContent: {
		alignSelf: 'center',
		justifyContent:'center',
		backgroundColor:'black'
	},
	modalCard: {
		alignSelf: 'center',
		width: '300@ms0.5',
	
	},
	modalCardHeader:{
		backgroundColor:Colors.primary,
		height:100,
		justifyContent:'space-between'
 	},
	modalHeaderText:{
		color:Colors.text,
		fontSize:19,
  	},
	modalBody:{
       justifyContent:'space-between'
	},
	input:{
		margin:10
	},
	Buttons:{
		backgroundColor:Colors.primary,
		width:300,
		margin:10,
		justifyContent:'center',
		borderRadius:5,

	},
	 
	closebuttonIcon:{
		 color:Colors.white,
		 fontSize:45

   },

	modalCardButtons:{
		justifyContent:'center',
		flexDirection:'row'

	},
	modalButtonText:{
		  color:Colors.text,
		  alignSelf:'center',
		  fontSize:22,
		  marginLeft:20
	},

	absolute: {
		position: "absolute",
		top: 0, left: 0, bottom: 0, right: 0,
	  },
})
