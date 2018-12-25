import { StyleSheet, Platform } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../../Themes'
import { ScaledSheet } from 'react-native-size-matters'

export default ScaledSheet.create({
	...ApplicationStyles.screen,
	container: {
		flex: 1,
		backgroundColor: Colors.grey,
		justifyContent: 'space-between',
		width: '100%'
	},
	itemContainer: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingTop: 1,
		

	},
	gridView: {
		flex: 1,
		width: '100%'
	},
	Modal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: Platform.OS == 'ios' ? 20 : 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bigSlider: {
		backgroundColor: Colors.transparent,
		height: '120@ms0.5',
		width: '100%',
		borderRadius:0,
	},
	image: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent:'center'
	},
	slider: {
		backgroundColor: Colors.primaryTransparent,
		color:Colors.secondary,
		borderRadius:0
 	},
	name: { 
		backgroundColor:Colors.primaryTransparent,
		height:30,
 	},
	primaryText: {
		alignSelf: 'center',
		textAlign:'center',
		width: '100%',
		color: Colors.text,
		fontSize: 20
	}
	
})
