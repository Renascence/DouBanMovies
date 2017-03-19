import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator, TouchableHighlight } from 'react-native';
import styles from './styles/styles'
// const styles = StyleSheet.create({
//   list: {
//     marginTop: 5,
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//   },
//   row: {
//     justifyContent: 'center',
//     padding: 5,
//     margin: 3,
//     width: 120,
//     height: 200,
//     backgroundColor: '#F6F6F6',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#CCC'
//   },
//   img: {
//     width: 100,
//     height: 150
//   },
//   text: {
//     flex: 1,
//     marginTop: 5,
//     fontWeight: 'bold',
//     alignItems: 'center'
//   },
// });

class MovieList extends Component {
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
        for (let i in res.subjects) {
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
          Press={() => {
            console.log('1')
          }}
          renderRow={(rowData) =>
            <TouchableHighlight style={styles.row} onPress={function () {
              console.log('next page')
            }}>
              <View>
                <Image source={{ uri: rowData[1] }} style={styles.img}></Image>
                <Text style={styles.text}>{rowData[0]}</Text>
              </View>
            </TouchableHighlight>
          }
        />
      )
    }
  }
}

export default MovieList;