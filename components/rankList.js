import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator, TouchableHighlight } from 'react-native';
import styles from './styles/styles'

class RankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: ''
    }
    this.fetchData()
  }
  fetchData = () => {
    fetch('http://api.douban.com/v2/movie/top250')
      .then((resp) => {
        return resp.json()
      })
      .then((res) => {
        let movieData = []
        let imgData = []
        console.log(res.subjects[0])
        for (let i in res.subjects) {
          movieData.push([])
          movieData[i][0] = res.subjects[i]['title']
          movieData[i][1] = res.subjects[i]['images']['large']
          movieData[i][2] = res.subjects[i]['rating']['average']
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
          <Text style={{textAlign:'center'}}>
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
            <TouchableHighlight style={styles.row} underlayColor='rgba(34,26,38,0.1)'
              onPress={function () {
                console.log('movie name',rowData[0])
              }}>
              <View>
                <Image source={{ uri: rowData[1] }} style={styles.img}></Image>
                <Text style={styles.text}>{rowData[0]}</Text>
                <Text style={styles.text}>{rowData[2]}</Text>
              </View>
            </TouchableHighlight>
          }
        />
      )
    }
  }
}

export default RankList;