/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { ImageBackground, TouchableOpacity, View, Text } from 'react-native'
import PropTypes, { number } from 'prop-types'
import styles from '../Styles/ProductMultiVariantStyle'
import BigSlider from 'react-native-big-slider'
import { Colors } from '../../../Themes'

class ProductMultiVariant extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: false
		}
	}
	render() {
		const { onChange, product } = this.props
	
		if (!product) {
			return <LoadingProducts />
		}
		return (
			<View style={styles.itemContainer}>
				<ImageBackground style={styles.image} source={{ uri: product.fullPhotoUrl }} resizeMode="stretch">
					<BigSlider
						trackStyle={styles.slider}
						horizontal
						maximumValue={100}
						style={styles.bigSlider}
						value={product.percentage?product.percentage:50}
						minimumValue={0}
						onValueChange={onChange}
					/>
					<View style={styles.name}>
					<Text style={styles.primaryText}>{product.variantName}</Text>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

ProductMultiVariant.propTypes = {
	onChange: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired
}

export default ProductMultiVariant
