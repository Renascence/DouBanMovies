import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator, TouchableHighlight } from 'react-native';
import MovieList from './components/movieList';


class MyFirstRNProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: ''
    }
  }
  render() {
    return <MovieList></MovieList>
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
