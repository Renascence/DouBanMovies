import React, { Component } from 'react';
import { View, Text ,TouchableHighlight} from 'react-native';

export default class MyScene extends Component {
  static defaultProps = {
    title: 'MyScene'
  };

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>    
      </View>
    )
  }
}