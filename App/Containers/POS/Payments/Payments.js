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
		Navigation.events().bindComponent(this)
	}
	state = {
		status: 'info',
	}
	
	render() {
		return (
			<View style={{ flex: 1 }}>
			<Calculator style={{ flex: 1 }} />
		  </View>
		)
	}
}

const mapStateToProps = (state) => ({
	fullProfile: state.profiles.fullProfile,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Payments)
