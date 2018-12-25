import React, { Component } from 'react'
import {Image, StatusBar } from 'react-native';
import { connect } from 'react-redux'
import { Colors, View, Text, Images } from '../../Themes'
import { Container, Grid, Col, Button, Header, Right, Left, Body , Title} from 'native-base'
import { isLoggedIn } from '../../Redux/AccountRedux'
import { Icon } from 'react-native-elements'
import SearchBar from '../../Components/SearchBar'
// Styles
import styles from './Styles/POSScreenStyles'
import ProductScreen from './Products/ProductScreen'
import AccountActions from '../../Redux/AccountRedux'
import PosOrderScreen from './Orders/PosOrderScreen'
import PosContext from './PosContext'
import Icons from 'react-native-vector-icons/MaterialIcons';
import Breadcrumb from 'react-native-breadcrumb'
import { Navigation } from 'react-native-navigation'
import { isTablet, isPhone } from 'react-native-device-detection'
import { goProductPOSOrderScreen } from '../../Navigation/Layouts'
class POSScreen extends Component {
	constructor(props) {
		super(props)
		this.productList = React.createRef()
		Navigation.events().bindComponent(this)

		this.state = {
			Term: '',
			index: 0,
			inCategory: true,
			inProductCategory: false,
			categoryId: null, 
			isModalVisible: false
		}
		this.setInCategory = this.setInCategory.bind(this)
		this.performSearch = this.performSearch.bind(this)
		;(this.cancelSearch = this.cancelSearch.bind(this)),
			(this.setCategoryId = this.setCategoryId.bind(this)),
			(this.setModalVisible = this.setModalVisible.bind(this))
	}
	// show slideMenu
	showSideMenu() {
		Navigation.mergeOptions(this.props.componentId, {
			sideMenu: {
				left: {
					visible: true
				}
			}
		})
	}
	// search functions
	performSearch(search) {
		this.setInCategory(false)
		this.setState(
			{ searchTerm: search },
			() => this.child.performSearch(search) // do stuff
		)
	}

	cancelSearch = () => {
		this.setInCategory(false)
		this.setState(
			{
				searchTerm: ''
			},
			() => this.child.cancelSearch()
		)
	}
	// change menu from consumer menu
	setInCategory(value) {
		if (value) {
			this.setCategoryId(null)
		}
		this.setState({ inCategory: value })
	}
	// set Category
	setCategoryId(id) {
		console.log('id', id)
		this.setState({ categoryId: id, index: 1 })
	}
	setModalVisible(value) {
		this.setState({ isModalVisible: value })
	}
	_toggleModal = () => {
		this.setState({
			isModalVisible: !this.state.isModalVisible
		})
		// this.props.navigation.navigate('productVariety');
	}

	_renderMenu() {
		return (
			<Icons
				name="sort"
				size={25}
				color="#fff"
				onPress={() => {
					this.showSideMenu()
				}}
			/>
		)
	}
	// CrumMenu  Product Header
	changeCrumbMenu(index) {
		console.log('index', index)
		if (index == 0) {
			this.setInCategory(true)
		} else if (index == 1) {
			this.setInCategory(false)
		}

		this.setState({ index })
	}
	renderProductHeaderMenu = () => (
		<Breadcrumb
			entities={[ 'Top Menu', 'Menu' ]}
			isTouchable
			flowDepth={this.state.index}
			height={50}
			onCrumbPress={(index) => this.changeCrumbMenu(index)}
			borderRadius={5}
			crumbsContainerStyle={styles.crumbsContainer}
			crumbTextStyle={styles.crumbText}
			crumbStyle={styles.crumb}
			activeCrumbStyle={styles.activecrumb}
			activeCrumbTextStyle={styles.crumbText}
		/>
	)
	renderSearch = () => {
		return (
			<SearchBar onSearch={this.performSearch} searchTerm={this.state.searchTerm} onCancel={this.cancelSearch} />
		)
	}
	renderCart = () => {
		return (
			<Icon
				onPress={() => goProductPOSOrderScreen()}
				name="cart-plus"
				type="font-awesome"
				color={Colors.text}
				size={40}
			/>
		)
	}

	componentWillMount() {}

	render() {
		if (isTablet) {
			return (
				<PosContext.Provider
					value={{
						inCategory: this.state.inCategory,
						inProductVareity: this.state.inProductVareity,
						setInCategory: this.setInCategory,
						searchTerm: this.state.searchTerm,
						categoryId: this.state.categoryId,
						isModalVisible: this.state.isModalVisible,
						peformSearch: this.performSearch,
						cancelSearch: this.cancelSearch,
						setCategoryId: this.setCategoryId,
						setModalVisible: this.setModalVisible
					}}
				>
					<Container style={styles.mainContainer}>
                          
						<Header   style={styles.header}>
							<Left>
								<Button transparent>{this._renderMenu()}</Button>
							</Left>
							<Body>
								<Image source={Images.toplogo} style={[ styles.topLogo]} />

							</Body>
							<Right>
							{this.renderSearch()}
							</Right>
						</Header>
						<Grid>
							<Col style={styles.col} size={3}>
								<PosOrderScreen />
							</Col>
							<Col style={[ styles.col, styles.productCol ]} size={3}>
								{this.renderProductHeaderMenu()}
								<ProductScreen onRef={(ref) => (this.child = ref)} />
							</Col>
						</Grid>
					</Container>
				</PosContext.Provider>
			)
		} else {
			return (
				<PosContext.Provider
					value={{
						inCategory: this.state.inCategory,
						inProductVareity: this.state.inProductVareity,
						setInCategory: this.setInCategory,
						searchTerm: this.state.searchTerm,
						categoryId: this.state.categoryId,
						isModalVisible: this.state.isModalVisible,
						peformSearch: this.performSearch,
						cancelSearch: this.cancelSearch,
						setCategoryId: this.setCategoryId,
						setModalVisible: this.setModalVisible
					}}
				>
					<Container style={styles.mainContainer}>
						<Header style={styles.header}>
							<Left>
								<Button transparent>{this._renderMenu()}</Button>
							</Left>
							<Body>{this.renderSearch()}</Body>
							<Right>{this.renderCart()}</Right>
						</Header>

						{this.renderProductHeaderMenu()}
						<ProductScreen onRef={(ref) => (this.child = ref)} />
					</Container>
				</PosContext.Provider>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	// for developer convenience
	loggedIn: isLoggedIn(state.account)
})

const mapDispatchToProps = (dispatch) => ({
	getAccount: () => dispatch(AccountActions.accountRequest())
	// for developer convenience
})
export default connect(mapStateToProps, mapDispatchToProps)(POSScreen)
