import React from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Alert, Text } from 'react-native'
import { connect } from 'react-redux'
import { isLoggedIn } from '../Redux/AccountRedux'
import LoadingView from '../base_components/LoadingView'
import { loginScreen, appStack } from '../Navigation/Layouts'
import { Navigation } from 'react-native-navigation'
import AccountActions from '../Redux/AccountRedux'
import { Colors } from '../Themes'
import ProfileActions from '../Redux/ProfileRedux'

class AuthLoadScreen extends React.Component {
	constructor(context, props) {
		super(context, props)
		Navigation.events().bindComponent(this)
		console.tron.log(this.props)
		this.props.loggedIn
		this.props.error
		this.state = {
			isLogged: null
		}
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	// do things with nextProps.someProp and prevState.cachedSomeProp

	// 	if (prevState.isLogged !== nextProps.loggedIn ) {
	// 		console.tron.log(`Is Logged ${nextProps.loggedIn}`)
	// 		if(nextProps.account&& nextProps.loggedIn){
    //           appStack();
	// 		}else {
    //          loginScreen();
	// 		}

	// 	}
	// 	return null
	// }

    componentWillMount(){
		this.props.getAccount();
		console.log(this.props.loggedIn)
	}

	componentWillReceiveProps(newProps) {
		// Did the login attempt complete?
		console.tron.log('isUserLoggin', newProps.loggedIn)
		if (newProps.loggedIn && newProps.account) {
			appStack()
		} else loginScreen()
	}

	render() {

		return (
			<View
				style={{ justifyContent: 'center', alignContent: 'center', flex: 1, backgroundColor: Colors.primary }}
			>
				<LoadingView />

				<Text style={{ color: Colors.text }}>{this.state.isLogged ? 'true' : 'false'}</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
	account: state.account.account,
	fetching: state.account.fetching,
	loggedIn: isLoggedIn(state.account),
	error: state.account.error
})

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(LoginActions.logoutRequest()),
	getAccount: () => dispatch(AccountActions.accountRequest()),
	getDbProfile: (username) => dispatch(ProfileActions.fullProfileDbRequest(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadScreen)
