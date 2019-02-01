import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ data: users }));
  }

  render() {
    let { data } = this.state;
    let usersView = [];

    usersView.push(
      <View
        key={0}
        style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}
      >
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text> Name </Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text> Username </Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text> Email </Text>
        </View>
      </View>
    );

    for (let i = 0; i < data.length; i++) {
      usersView.push(
        <View
          key={i + 1}
          style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}
        >
          <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text> {data[i].name} </Text>
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text> {data[i].username} </Text>
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text> {data[i].email} </Text>
          </View>
        </View>
      );
    }
    return <View>{usersView}</View>;
  }
}
