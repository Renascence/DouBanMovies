import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator } from 'react-native';
import MyScene from './MyScene';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Flex extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />

      </View>
    )
  }
}

class sv extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          style={{ width: 400, height: 400 }} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Image source={require('./img/favicon.jpg')} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
  myStyle: {
    textAlign: 'center',
    fontSize: 30,
    color: '#ccc',
  }
})

class MyFirstRNProject extends Component {
  render() {
    return (
      <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:400,width:400}} >
        <Text style={{color: '#fff'}} >Inside</Text>
      </Image>
    )
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
