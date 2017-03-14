/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src/index';

export default class TheWeatherToday extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('TheWeatherToday', () => TheWeatherToday);