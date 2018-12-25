import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import AppBase from './AppBase';
import { Images, Colors } from '../Themes';

class LoadingView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <AppBase
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.primary,
        }}
      >
        <Animatable.Image
          animation="bounce"
          source={Images.logo}
          iterationCount="infinite"
          style={{
            width: 200,
            height: 200,
          }}
        />
        <View
          style={{
            width: 80,
            minHeight: 20,
            borderRadius: 5,
            backgroundColor: Colors.primary,
            shadowColor: Colors.primary,
            shadowRadius: 0,
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 10 },
          }}
        />
        <Text
          style={{
            marginTop: 30,
            fontSize: 20,
            fontFamily: 'Roboto Slab',
          }}
        />
      </AppBase>
    );
  }
}

LoadingView.propTypes = {};

export default LoadingView;
