import React from 'react'
import { View, ScrollView, } from 'react-native'
import { connect } from 'react-redux'
import {_} from 'lodash'
// Styles
import { Navigation } from 'react-native-navigation'
import {Calculator} from 'react-native-pos-calculator'
class Payments extends React.PureComponent {
	constructor(props) {
		super(props)
		console.tron.log('yuuuu',this.props.order)

	}
	state = {
		status: 'info',
		customerOrders:[],
		fullProfile:[]
	}


	
	render() {
		console.tron.log("funtastic", this.state.fullProfile);
		
		return (
		<View style={{ flex: 1 }}>
			<Calculator style={{ flex: 1 }} />
		  </View>
		)
	}
}

const mapStateToProps = (state) => ({
	fullProfile: state.profiles.fullProfile,
	customerOrders: state.orders,

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Payments)
