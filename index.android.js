import React, { Component } from 'react';
import { AppRegistry, Text, Image, View ,StyleSheet} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

const style= StyleSheet.create({
  myStyle:{
    textAlign: 'center',
    fontSize: 30,
    color: '#ccc',
  }
})

class MyFirstRNProject extends Component {

  constructor(props) {
    super(props);
    this.state = { showText: true };
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }
  render() {
    return (
      <View >
        {this.state.showText ? <Text style={style.myStyle}>Hello world!</Text> : <Text style={style.myStyle}>Coder!</Text>}
      </View>
    );
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
