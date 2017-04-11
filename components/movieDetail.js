import React, { Component } from 'react';
import { Text, Image, View, Navigator, TouchableOpacity } from 'react-native';
import styles from './styles/styles'

class MovieDetail extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigator.pop()}>
          <Text style={styles.buttonText}>
            返回上一页
          </Text>
        </TouchableOpacity>
        <View>
          <Text>movie detail </Text>
        </View>
      </View>
    )
  }
}

export default MovieDetail;