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
       <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <View style={{flexDirection:'row',width:400, backgroundColor: 'green',justifyContent:'center'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>      
        
      </View>
    );
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
