import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import ProductCategoryActions from '../../../Redux/ProductCategoryRedux'
import GridView from 'react-native-super-grid'
import { Button, Text } from 'native-base'
import ProductCategoryItem from '../../../Components/POS/Products/ProductCategoryItem'
import AlertMessage from '../../../Components/AlertMessage'
import ProductActions from '../../../Redux/ProductRedux'
import styles from '../Styles/ProductCategoryStyle'
import PosContext from '../PosContext'
import LoadingProducts from '../../../base_components/LoadingProducts'
import _ from 'lodash'
class ProductCategory extends React.PureComponent {
	static contextType = PosContext
	/** **********************************************************
   * STEP 1
   * This is an array of objects with the properties you desire
   * Usually this should come from Redux mapStateToProps
   ************************************************************ */
	state = {
		page: 0,
		sort: 'id,asc',
		size: 20,
		loading: true,
		done: false,
		searchTerm: '',
		dataObjects: []
	}

	//  Render data as gridView
	_renderCategory(item) {
		return (
			<View style={styles.itemContainer}>
				<ProductCategoryItem food={item} onPress={() => this.fetchAllProductByCategoryId(item.id)} />
			</View>
		)
	}
	// show this when data is empty
	renderEmptyCategory() {
		return (
			<View>
				<AlertMessage title="No Category Found" />
				<Button  style={{ alignSelf: 'center' }} light>
					<Text> refresh </Text>
				</Button>
			</View>
		)
	}

	// The default function if no Key is provided is index
	// an identifiable key is important if you plan on
	// item reordering.  Otherwise index is fine
	keyExtractor = (item, index) => String(index)

	// How many items should be kept im memory as we scroll?
	oneScreensWorth = 20

	fetchAllProductByCategoryId = (categoryId) => {
		this.context.setCategoryId(categoryId);

		this.context.setInCategory(false)
	}



	componentWillReceiveProps(newProps) {
		const array = newProps.fullProfile ? _.values(newProps.fullProfile.productCategoryDTOList) : []
		this.setState({ dataObjects: array })
	}
	componentWillMount() {
		// this.fetchAllProductCategories();
		const array = this.props.fullProfile ? _.values(this.props.fullProfile.productCategoryDTOList) : []
		this.setState({ dataObjects: array })
	}
	render() {
		if (this.props.fetching) {
			return <LoadingProducts />
		}
		return (
			<View style={styles.container}>
				<GridView
					style={styles.gridView}
					items={this.state.dataObjects}
					renderItem={(item) => this._renderCategory(item)}
					onEndReached={this.handleLoadMore}
					keyExtractor={this.keyExtractor}
					initialNumToRender={this.oneScreensWorth}
					onEndReached={this.handleLoadMore}
					onEndThreshold={100}
					// ListHeaderComponent={this.renderProductHeader}
					/* ListFooterComponent={this.renderFooter} */
					itemContainerStyle={styles.itemContainer}
					ListEmptyComponent={() => this.renderEmptyCategory()}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
  // ...redux state to props here
  fetching: state.profiles.fetching,
	fullProfile: state.profiles.fullProfile,
	error: state.profiles.fullProfile
})

const mapDispatchToProps = (dispatch) => ({
	getAllProductBYCategoryId: (categoryId) => dispatch(ProductActions.productByCategoryDbRequest(categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory)
