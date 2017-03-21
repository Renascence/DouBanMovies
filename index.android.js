import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator, TouchableHighlight } from 'react-native';
import MovieList from './components/movieList';
import TabNavigator from 'react-native-tab-navigator';
import icons from './components/images/icons'

class MyFirstRNProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: ''
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={true}
          title="Home"
          renderIcon={() => <Image source={icons.star} />}
          renderSelectedIcon={() => <Image source={icons.star} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <MovieList></MovieList>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
