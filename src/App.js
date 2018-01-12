import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDjD-mG2EHBQ_4DdYFJQ2WeAEwjPeqd7bw',
    authDomain: 'auth-56c77.firebaseapp.com',
    databaseURL: 'https://auth-56c77.firebaseio.com',
    projectId: 'auth-56c77',
    storageBucket: 'auth-56c77.appspot.com',
    messagingSenderId: '499941755717'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ paddingTop: 200 }} >
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
