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
import Choose from './app/views/choose';
import Setup from './app/views/setup';
import Signup from './app/views/signup';
import Shop from './app/views/shop';
import Create from './app/views/create';

const App = StackNavigator({
  Banner: {screen: Banner},
  Signin: {screen: Signin},
  Country: {screen: Country},
  Choose: {screen: Choose},
  Setup: {screen: Setup},
  Signup: {screen: Signup},
  Shop: {screen: Shop},
  Create: {screen: Create}
}, {
  initialRouteName: 'Choose',
});

export default class wscfe extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('wscfe', () => wscfe);
