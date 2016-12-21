import React, { Component } from 'react';
import { AppRegistry, Text, Image, View ,StyleSheet,TextInput,ScrollView,ListView,Navigator} from 'react-native';
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
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} />
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
      ]),
      data: false
    };
  }
  getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
            <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
