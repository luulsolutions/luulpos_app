import React, { PureComponent } from 'react';
import { SocialIcon } from 'react-native-elements';
import { View } from 'react-native';
import { styles } from 'react-native-material-ripple/styles';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

class AuthMenuScreen extends PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  render() {
    return (

      <View style={styles.container}>
        <SocialIcon title="Sign In With Facebook" button type="facebook" />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthMenuScreen);
