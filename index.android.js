import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator, TouchableHighlight } from 'react-native';
import MovieList from './components/movieList';
import RankList from './components/rankList';
import TabNavigator from 'react-native-tab-navigator';
import rankIcon from './components/images/rank.png';
import homeIcon from './components/images/home.png';
import MovieDetail from './components/movieDetail'

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
          renderIcon={() => <Image source={homeIcon} style={{ width: 30, height: 30 }} />}
          renderSelectedIcon={() => <Image source={homeIcon} style={{ width: 30, height: 30 }} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Navigator
            initialRoute={{ name: '正在上映', index: 0 }}
            renderScene={(route, navigator) =>
              <MovieList
                navigator={navigator}
                name={route.name}
                onForward={() => {
                  var nextIndex = route.index + 1;
                  navigator.push({
                    name: 'Scene ' + nextIndex,
                    index: nextIndex,
                    component: MovieDetail
                  });
                }}
                onBack={() => {
                  if (route.index > 0) {
                    navigator.pop();
                  }
                }}
              />
            }
          />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'rank'}
          title="高分排行"
          renderIcon={() => <Image source={rankIcon} style={{ width: 20, height: 20 }} />}
          renderSelectedIcon={() => <Image source={rankIcon} style={{ width: 20, height: 20 }} />}
          onPress={() => this.setState({ selectedTab: 'rank' })}>
          <RankList></RankList>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
