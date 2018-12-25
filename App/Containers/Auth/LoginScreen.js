import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, View, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/LoginScreenStyles'
import { Images, Metrics, Colors } from '../../Themes'
import LoginActions from '../../Redux/LoginRedux'
import PinActions from '../../Redux/PinRedux'
import * as Animatable from 'react-native-animatable'
import { Navigation } from 'react-native-navigation'
import { Container, Header, Content, Item, Input } from 'native-base'
import { appStack, goToPinScreen } from '../../Navigation/Layouts'
import { Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileActions from '../../Redux/ProfileRedux'
import images from '../../Themes/Images';
class LoginScreen extends React.Component {
	handleViewRef = (ref) => (this.view = ref)
	static propTypes = {
		dispatch: PropTypes.func,
		fetching: PropTypes.bool,
		attemptLogin: PropTypes.func
	}

	constructor(props) {
		super(props)
		Navigation.events().bindComponent(this)
		this.state = {
			done: false,
			username: '',
			password: '',
			visibleHeight: Metrics.screenHeight,
			topLogo: { width: Metrics.screenWidth },
			valid: '',
			pinObject: {}
		}
	}

	componentWillReceiveProps(newProps) {
		// Did the login attempt complete?
		if (!newProps.fetching && !newProps.pinFetching && !this.state.done) {
			if (newProps.error) {
				if (newProps.error === 'WRONG') {
					this.shake()
					this.setState({ valid: 'Incorrect  Username or Password' })
				}
			} else if (newProps.account) {
				if (newProps.pinError === 'WRONG') {
					console.tron.log('user Does not have PIN it means first Login so Full Login ')
					this.fetchDbFullProfile(newProps.account.email)
					this.loginWithPIN('choose')
				} else {
					this.fetchDbProfile(newProps.account.login)
					appStack()
				}
				this.setState({ done: true })
			}
		}
	}
	fetchDbProfile = (username) => {
		this.props.getDbProfile(username)
	}
	fetchDbFullProfile = (email) => {
		this.props.getApiProfile(email)
	}

	handlePressLogin = () => {
		const { username, password } = this.state
		// attempt a login - a saga is listening to pick it up from here.
		this.props.finPinByUsername(username)
		this.props.attemptLogin(username, password)
	}
	handlePressCancel = () => {
		this.props.logout()
		Navigation.popToRoot(this.props.componentId)
	}

	handleChangeUsername = (text) => {
		this.setState({ username: text })
	}

	handleChangePassword = (text) => {
		this.setState({ password: text })
	}
	loginWithPIN = (mode) => {
		this.setState({ pinObject: { username: this.state.username, password: this.state.password, mode } }, () =>
			goToPinScreen(this.state.pinObject)
		)
	}
	shake = () =>
		this.view
			.wobble(800)
			.then((endState) => console.tron.log(endState.finished ? 'bounce finished' : 'bounce cancelled'))

	render() {
		const { username, password } = this.state
		const { fetching } = this.props
		const editable = !fetching
		const textInputStyle = editable ? styles.textInput : styles.textInputReadonly
		return (
			
			<Container style={styles.container}>
			 <ImageBackground source={images.backgroundlogin}  style={{flex:1}}>

				<Content
					contentContainerStyle={{
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<ScrollView style={{ height: this.state.visibleHeight }} keyboardShouldPersistTaps="always">
						<Image source={Images.bluelogo} style={[ styles.topLogo, this.state.topLogo ]} />
						<Animatable.View ref={this.handleViewRef}>
							<Text style={styles.valid}>{this.state.valid}</Text>
							<View style={styles.form}>
								<Item rounded style={styles.row}>
									<Icon name="account" size={20} color={Colors.primary} />
									<Input
										ref="username"
										style={textInputStyle}
										placeholderTextColor="#999999"
										value={username}
										editable={editable}
										keyboardType="default"
										returnKeyType="next"
										autoCapitalize="none"
										editable
										autoCorrect={false}
										onChangeText={this.handleChangeUsername}
										underlineColorAndroid="transparent"
										onSubmitEditing={() => this.refs.password.focus()}
										placeholder="Username"
									/>
								</Item>

								<Item rounded style={styles.row}>
									<Icon name="lock" size={20} color={Colors.primary} />
									<Input
										getRef="password"
										placeholderTextColor="#999999"
										style={textInputStyle}
										value={password}
										editable={editable}
										keyboardType="default"
										returnKeyType="go"
										autoCapitalize="none"
										editable
										autoCorrect={false}
										secureTextEntry
										onChangeText={this.handleChangePassword}
										underlineColorAndroid="transparent"
										onSubmitEditing={this.handlePressLogin}
										placeholder="Password"
									/>
								</Item>

								<View style={[ styles.loginRow ]}>
									<TouchableOpacity
										style={styles.loginButtonWrapper}
										onPress={() => this.handlePressLogin()}
									>
										<View style={styles.loginButton}>
											<Text style={styles.loginText}>
												<Icon name="login" size={20} color={Colors.white} /> Login{' '}
											</Text>
										</View>
									</TouchableOpacity>
								</View>
								<Divider
									style={{
										backgroundColor: Colors.grey,
										marginBottom: 20,
										marginLeft: 70,
										marginRight: 70,
										borderWidth: 1,
										borderColor: Colors.grey
									}}
								/>
								<View style={[ styles.loginRow ]}>
									<TouchableOpacity
										style={styles.loginButtonWrapper}
										onPress={() => this.loginWithPIN('enter')}
									>
										<View
											style={[
												styles.loginButton,
												{ backgroundColor: Colors.darkgreen, borderWidth: 3, borderColor:Colors.darkgreen }
											]}
										>
											<Text style={[ styles.loginText, { color: Colors.white } ]}>
												{' '}
												<Icon name="drag" size={25} color={Colors.white} />Login With PIN
											</Text>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</Animatable.View>
						
					</ScrollView>
				</Content>
				</ImageBackground>
			</Container>
			
		)
	}
}

const mapStateToProps = (state) => ({
	account: state.account.account,
	fetching: state.login.fetching,
	pinFetching: state.pin.fetching,
	pinObject: state.pin.pinObject,
	pinError: state.pin.error,
	error: state.login.error,
	fetchingFullProfile: state.profiles.fetching,
	fullProfile: state.profiles.fullProfile
})

const mapDispatchToProps = (dispatch) => ({
	attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
	logout: () => dispatch(LoginActions.logoutRequest()),
	finPinByUsername: (userName) => dispatch(PinActions.pinCheckByUserNameRequest(userName)),
	getApiProfile: (email) => dispatch(ProfileActions.fullProfileApiRequest(email)),
	getDbProfile: (username) => dispatch(ProfileActions.fullProfileDbRequest(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
