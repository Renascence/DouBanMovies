import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class MyFirstRNProject extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
