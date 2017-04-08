import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator } from 'react-native';

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <View>
            name={route.name}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          </View>
        }
      />
    )
  }
}