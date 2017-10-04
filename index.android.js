/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import Banner from './app/views/banner';
import Signin from './app/views/signin';
import Country from './app/views/country';

const App = StackNavigator({
  Banner: {screen: Banner},
  Signin: {screen: Signin},
  Country: {screen: Country},
}, {
  initialRouteName: 'Banner',
});

export default class wscfe extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('wscfe', () => wscfe);
