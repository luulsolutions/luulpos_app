import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Colors } from '../../../../Themes'
import { Icon, Header } from 'react-native-elements'
// Styles
import styles from '../../Styles/ProductModifiersStyles'

import Breadcrumb from 'react-native-breadcrumb'
import { Navigation } from 'react-native-navigation'
import ProductVariety from './ProductVariety'
import ModifiersContext from './ModifiersContext'
class ProductModifiers extends Component {
	constructor(props) {
		super(props)
		Navigation.events().bindComponent(this)
		this.state = {
			index: 0,
			variantId: null
		}
		this._onSaveOrder = this._onSaveOrder.bind(this)
	}

	// all functions

	_onSaveOrder() {
		this.child.onSaveOrder();
		console.tron.log('nothing');
	}
	//all render function return view
	_renderMenu() {
		return (
			<Icon
				name="menu"
				color="#fff"
				onPress={() => {
					this.showSideMenu()
				}}
			/>
		)
	}
	// change state  from child  components
	setIndex = (value) => {
		this.setState({ index: value })
	}
	setVariantId = (value) => {
		this.setState({ variantId: value })
	}

	// CrumMenu  Product Header
	changeCrumbMenu(index) {
		console.log('index', index)
		if (index == 0) {
			//		this.setInCategory(true)
		} else if (index == 1) {
			//	this.setInCategory(false)
		}
		this.setState({ index })
	}

	_renderSave = () => {
		return <Icon size={30} name="check" type="material-community" onPress={ this._onSaveOrder} color={Colors.text} />
	}
	_renderBack = () => {
		return <Icon name="close" size={30} onPress={() => Navigation.dismissAllModals()} color={Colors.text}  type="material-community"/>
	}

	renderProductHeaderMenu = () => (
		<Breadcrumb
			entities={[ 'Variants', 'Extras' ]}
			isTouchable
			flowDepth={this.state.index}
			height={40}
			onCrumbPress={(index) => this.changeCrumbMenu(index)}
			borderRadius={5}
			crumbsContainerStyle={styles.crumbsContainer}
			crumbTextStyle={styles.crumbText}
			crumbStyle={styles.crumbStyle}
			activeCrumbStyle={styles.activecrumb}
			activeCrumbTextStyle={styles.crumbText}
		/>
	)

	componentWillMount() {
		console.tron.log('product', this.props)
	}

	render() {
		return (
			<ModifiersContext.Provider
				value={{
					setIndex: this.setIndex,
					variantId: this.state.variantId,
					setVariantId: this.setVariantId
				}}
			>
				<View style={styles.container}>
					<Header
						leftComponent={this._renderBack()}
						centerComponent={{ text: 'Product Modifiers', style: { color: '#fff', fontSize: 24 } }}
						rightComponent={this._renderSave()}
					/>
					<View style={styles.Modal}>
						{this.renderProductHeaderMenu()}
						<ProductVariety product={this.props.product} onRef={(ref) => (this.child = ref)} />
					</View>
				</View>
			</ModifiersContext.Provider>
		)
	}
}

const mapStateToProps = (state) => ({
	// for developer convenience
})

const mapDispatchToProps = (dispatch) => ({
	// for developer convenience
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductModifiers)
