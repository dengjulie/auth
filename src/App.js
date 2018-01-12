import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDjD-mG2EHBQ_4DdYFJQ2WeAEwjPeqd7bw',
    authDomain: 'auth-56c77.firebaseapp.com',
    databaseURL: 'https://auth-56c77.firebaseio.com',
    projectId: 'auth-56c77',
    storageBucket: 'auth-56c77.appspot.com',
    messagingSenderId: '499941755717'
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }
}

export default App;
