import React from 'react'
import PropTypes from 'prop-types'
import { Image, View ,Text} from 'react-native'
import styles from './Styles/DrawerProfile'
class DrawerProfile extends React.Component {
	static propTypes = {
		profile: PropTypes.object
	}

	render() {
		console.tron.log(this.props,this.props.profile)
		return (
			<View style={styles.container}>
				<Image source={{ uri: this.props.profile.fullPhotoUrl }} style={styles.logo} />
				<Text style={styles.fullName}>{this.props.profile.firstName} {this.props.profile.lastName}</Text>
			</View>
		)
	}
}

export default DrawerProfile
