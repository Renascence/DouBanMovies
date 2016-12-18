import React, { Component } from 'react';
import { AppRegistry, Text, Image, View ,StyleSheet,TextInput,ScrollView,ListView} from 'react-native';

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
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        
      </View>
    )
  }
}

class sv extends Component {
    render() {
    return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Text style={{fontSize:96}}>If you like</Text>
               <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
           <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Image source={require('./img/favicon.jpg')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
