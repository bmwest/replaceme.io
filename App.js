import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View } from 'react-native';

class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval (() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}


export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://static.pexels.com/photos/100733/pexels-photo-100733.jpeg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 443, height: 190}}/>
        <View style={styles.content}>
          <Text>hey girl!</Text>
          <Text>{"I'm   r e p l a c e m e."}</Text>
          <Text>{"You know those items you know you're \nsupposed to replace every-so-often?"}</Text>
          <Text>{"Remembering what they are and when to \nreplace them is so annoying, right?"}</Text>
          <Text>{"That's where I come in. \n\n\n\n\n\n\n"}</Text>
          <Text style={styles.lookDown}>
          <Flash text="^"/>
          {"\n"}
          <Flash text="^"/>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8f0f3',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  lookDown: {
    fontSize: 52,
    fontWeight: '100',
    color: '#b3b3b3',
    transform: [
      { rotateX: '180deg'},
    ],
  },
});
