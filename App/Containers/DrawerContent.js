import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Image, BackHandler } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from './Styles/DrawerContentStyles'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import {
	loginScreen,
	registerScreen,
	forgotPasswordScreen,
	changePasswordScreen,
	settingsScreen, 
	checksScreen,
	entitiesScreen,
	AuthLoad,
	ChecksScreen
} from '../Navigation/Layouts'
import { connect } from 'react-redux'
import LoginActions from '../Redux/LoginRedux'
import { isLoggedIn } from '../Redux/AccountRedux'
import DrawerProfile from '../Components/DrawerProfile'

class DrawerContent extends React.PureComponent {
	constructor(context, props) {
		super(context, props)
		Navigation.events().bindComponent(this),
			(this.state = {
				hasImage: false
			})
	}

	hideSideMenu() {
		Navigation.mergeOptions(this.props.componentId, {
			sideMenu: {
				left: {
					visible: false
				}
			}
		})
	}

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', () => {
			this.hideSideMenu()
		})
	}

	handlePressLogin = () => {
		this.hideSideMenu()
		loginScreen()
	}
	handlePressRegister = () => {
		this.hideSideMenu()
		registerScreen()
	}
	handlePressForgotPassword = () => {
		this.hideSideMenu()
		forgotPasswordScreen()
	}
	handlePressSettings = () => {
		this.hideSideMenu()
		settingsScreen()
	}
	handlePressChecks = () => {
		this.hideSideMenu()
		checksScreen()
	}
	handlePressChangePassword = () => {
		this.hideSideMenu()
		changePasswordScreen()
	}
	handlePressEntities = () => {
		this.hideSideMenu()
		entitiesScreen()
	}
	handlePressLogout = () => {
		this.hideSideMenu()

		loginScreen()
		this.props.logout()
	}

	render() {
		//const  profileDTO  = this.props.fullProfile.profileDTO ?this.props.fullProfile:null
		console.tron.log('yaa', this.props.fullProfile.profileDTO.fullPhotoUrl)
		return ( 
			<ScrollView style={styles.container}>
				<DrawerProfile profile={this.props.fullProfile.profileDTO} />
				{!this.props.loggedIn && <DrawerButton text="Login" onPress={this.handlePressLogin} />}
				{!this.props.loggedIn && (
					<DrawerButton text="Forgot Password" onPress={this.handlePressForgotPassword} />
				)}
				{this.props.loggedIn && <DrawerButton text="Checks" name="settings" onPress={this.handlePressChecks}    />}
   				{this.props.loggedIn && <DrawerButton text="Settings" name="settings" onPress={this.handlePressSettings}   />}
				{this.props.loggedIn && <DrawerButton text="Logout" name="phonelink-lock" onPress={this.handlePressLogout}   />}
			</ScrollView>
		)
	}
}

DrawerContent.contextTypes = {
	drawer: PropTypes.object
}

const mapStateToProps = (state) => ({
	loggedIn: isLoggedIn(state.account),
	fullProfile: state.profiles.fullProfile
})

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(LoginActions.logoutRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
