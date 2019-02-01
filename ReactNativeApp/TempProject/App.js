import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Users from './components/users';

export default class App extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Users />
      </View>
    );
  }
}
