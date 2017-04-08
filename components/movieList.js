import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator, TouchableHighlight } from 'react-native';
import styles from './styles/styles'
import MovieDetail from './movieDetail'

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: ''
    }
    this.fetchData()
    this.showDetail = this.showDetail.bind(this)
    this.renderMovieList = this.renderMovieList.bind(this)
    let that = this
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
  showDetail(movie) {
    this.props.navigator.push({
      title: movie,
      Component: MovieDetail
    })
  }
  renderMovieList(movie) {
    return (
      <TouchableHighlight style={styles.row} underlayColor='rgba(34,26,38,0.1)'
        onPress={function () {
          console.log(this.props)
          this.props.navigator.push(
            {
                title: 'Scene ',
                index: 2,
              }
          )
          console.log('========')
        }.bind(this)}>
        <View>
          <Image source={{ uri: movie[1] }} style={styles.img}></Image>
          <Text style={styles.text}>{movie[0]}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text style={{ textAlign: 'center' }}>
            loading...
          </Text>
        </View>
      )
    } else {
      return (
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              this.renderMovieList(rowData)
            )
          }}
        />
      )
    }
  }
}

export default MovieList;