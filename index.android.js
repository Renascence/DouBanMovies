import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator, TouchableHighlight } from 'react-native';
import MovieList from './components/movieList';
import TabNavigator from 'react-native-tab-navigator';
import homeIcon from './components/images/home.png'

class MyFirstRNProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="正在上映"
          renderIcon={() => <Image source={homeIcon} style={{ width: 30, height: 30 }}/>}
          renderSelectedIcon={() => <Image source={homeIcon} style={{ width: 30, height: 30 }} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <MovieList></MovieList>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'rank'}
          title="高分排行"
          renderIcon={() => <Image source={homeIcon} style={{ width: 30, height: 30 }}/>}
          renderSelectedIcon={() => <Image source={homeIcon} style={{ width: 30, height: 30 }} />}
          onPress={() => this.setState({ selectedTab: 'rank' })}>
          <MovieList></MovieList>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
