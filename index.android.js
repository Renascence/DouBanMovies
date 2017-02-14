import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator } from 'react-native';
import MyScene from './MyScene';

const style = StyleSheet.create({
  myStyle: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10
  }
})

class MyFirstRNProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: ''
    }
    this.fetchData()
  }
  fetchData = () => {
    fetch('http://api.douban.com/v2/movie/in_theaters')
      .then((resp) => {
        return resp.json()
      })
      .then((res) => {
        let movieData = []
        for (var i in res.subjects) {
          movieData.push(res.subjects[i]['title'])
        }
        console.log(movieData)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        this.setState({
          loading: false,
          dataSource: ds.cloneWithRows(movieData)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>
            loading...
          </Text>
        </View>
      )
    } else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={style.myStyle}>{rowData}</Text>}
          />
      )
    }
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
