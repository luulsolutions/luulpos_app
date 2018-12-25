import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import PinView from 'react-native-pin-view'
import { Colors } from '../../Themes'
import PinActions from '../../Redux/PinRedux'
import LoginActions from '../../Redux/LoginRedux'
import styles from './Styles/PInScreenStyle'
import { appStack } from '../../Navigation/Layouts'
import ProfileActions from '../../Redux/ProfileRedux'
import LoadingProducts from '../../base_components/LoadingProducts'
import { Container } from 'native-base'
import { Header, Icon } from 'react-native-elements'
import { loginScreen } from '../../Navigation/Layouts'
import colors from '../../Themes/Colors';
class PinScreen extends React.Component {
	constructor(props) {
		super(props)
		Navigation.events().bindComponent(this)
		this.state = {
			mode: '',
			finish: false,
			donePin: false,
			loading: false,
			chooseTitles: [
				'Enter  New  Pin Code',
				'Confirm Your  Pin Code',
				'Pin Successfully Saved',
				'Your Enteries did not Match'
			],
			entertTitles: [ 'Enter Your Pin Code', 'SuccessFully LoggIn', 'Incorrect Pin Code Try Again' ],
			showTitleIndex: 0,
			attempt: 0,
			mode: 'enter',
			pinStatus: null
		}
		this.handlePinInDb = this.handlePinInDb.bind(this)
		this._renderMenu = this._renderMenu.bind(this)
	}

	handleStore = (pin) => {
		console.log(pin)
	}

	handlePinInDb(pin, clear) {
		console.log(pin, clear)
		const clearPIn = clear
		clearPIn()
		if (this.state.mode === 'choose') {
			if (this.state.attempt > 0 && this.state.attempt == 1) {
				this.setState({ attempt: this.state.attempt + 1 }, () => {
					this.validateForSettingPin(pin)
				})
			} else this.setState({ holdPin: pin, attempt: this.state.attempt + 1, showTitleIndex: 1 })
		} else if (this.state.mode === 'enter') {
			this.checkPin(pin)
		}
	}

	validateForSettingPin(pin) {
		const { username, password } = this.props.user
		if (this.state.holdPin === pin) {
			this.setState({ showTitleIndex: 2, attempt: 0 })
			// if Pin is same  save pin alogn username and Password to the Db
			this.props.attemptSavePin({ id: parseInt(pin), pin: parseInt(pin), username, password })
		} else {
			this.setState({ showTitleIndex: 3, attempt: 0 })
		}
	}

	checkPin = (pin) => {
		console.tron.log('checking From Db PIn', pin)
		this.setState({ holdPin: pin })
		this.props.attemptCheckPin(pin)
	}
	handleLogin = (pinObject) => {
		const { username, password } = pinObject
		console.log(username, password)
		this.props.attemptLogin(username, password)
	}
	fetchDbProfile = (username) => {
		this.props.getDbProfile(username)
	}

	componentWillReceiveProps(newProps) {
		if (!this.state.donePin) {
			if (newProps.pinObject && !newProps.fetching) {
				if (parseInt(newProps.pinObject.pin) === parseInt(this.state.holdPin)) {
				//	console.tron.log(' PIN is ok', newProps.pinObject)
					this.setState({ showTitleIndex: 1, loading: true })
					this.handleLogin(newProps.pinObject)
					this.fetchDbProfile(newProps.pinObject.username)
				} else this.setState({ showTitleIndex: 2 })
			} else if (!newProps.fetching) {
				this.setState({ loading: false,donePin:true });
				console.log('NO PIN')
				this.setState({ showTitleIndex: 2 })
			}
			if (!newProps.loggingfetching) {
				if (newProps.loggingerror) {
					if (newProps.loggingerror === 'WRONG') {
						this.setState({ loading: false ,donePin:true})
						console.tron.log('Login is Wrong')
					}
				} else if (newProps.account) {
					this.setState({ loading: false ,donePin:true})
					appStack()
				}
			}
		}
	}
	_renderMenu() {
		return (
			<Icon
				name="arrow-back"
				size={33}
				color="#fff"
				onPress={() => {
					loginScreen()
				}}
			/>
		)
	}
	componentWillMount() {
		console.tron.log('Prop of PinScreen', this.props)
		this.setState({ mode: this.props.user.mode })
	}
	render() {
		if (this.state.loading) return <LoadingProducts />
		return (
			<Container>
				{this.props.user.from === 'settings' ? null : (
					<Header
						innerContainerStyles={{ flexDirection: 'row' }}
						backgroundColor={Colors.primary}
						leftComponent={this._renderMenu()}
						centerComponent = {{text:"Pin Screen" , style: { color: colors.white, fontSize:30, fontFamily:"Roboto-Thin" }}}
					/>
				)}
				<View style={styles.container}>
					<Text style={styles.titleText}>
						{this.state.mode == 'choose' ? (
							this.state.chooseTitles[this.state.showTitleIndex]
						) : (
							this.state.entertTitles[this.state.showTitleIndex]
						)}
					</Text>
					<PinView onComplete={this.handlePinInDb} pinLength={4} />
				</View>
			</Container>
		)
	}
}
const mapStateToProps = (state) => ({
	account: state.account.account,
	loggingfetching: state.login.fetching,
	loggingerror: state.login.error,
	pinObject: state.pin.pinObject,
	fetching: state.pin.fetching,
	error: state.pin.error
})

const mapDispatchToProps = (dispatch) => ({
	attemptSavePin: (object) => dispatch(PinActions.pinSaveRequest(object)),
	attemptCheckPin: (pin) => dispatch(PinActions.pinCheckingRequest(pin)),
	attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
	getDbProfile: (username) => dispatch(ProfileActions.fullProfileDbRequest(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinScreen)
