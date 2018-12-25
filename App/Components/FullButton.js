import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/FullButtonStyles';

export default class FullButton extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object,
  };

  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}
