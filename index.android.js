import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator } from 'react-native';
import MyScene from './MyScene';

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 120,
    height: 200,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  img: {
    width: 100,
    height: 150
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
    alignItems:'center'
  },
});

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
        let imgData = []
        for (var i in res.subjects) {
          movieData.push([])
          movieData[i][0] = res.subjects[i]['title']
          movieData[i][1] = res.subjects[i]['images']['large']
        }
        console.log(res.subjects[0])
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
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.row}>
              <Image source={{ uri: rowData[1] }} style={styles.img}></Image>
              <Text style={styles.text}>{rowData[0]}</Text>

            </View>}
        />
      )
    }
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
