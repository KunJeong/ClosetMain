/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import Realm from 'realm';
import {SERVER_URL} from '../constants';
import { User } from '../schemas';

// const email = "";
// const passworld = "";

export default class SignInScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:""
    }
    this.signIn = this.signIn.bind(this);
    this.register = this.register.bind(this);
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  async signIn() {
    try {
      // this.setState({ error: undefined });
      let creds = await Realm.Sync.Credentials.usernamePassword(this.state.email, this.state.password, false);
      var currentUser = await Realm.Sync.User.login(SERVER_URL, creds).then(user => {
        // const config = user.createConfiguration({
        //   schema: [ One_Image, Post, Clothes, Closet, Scrap, User, Tag ]
        // });
        var realm = new Realm({
          sync: {
            user: user,
            url: SERVER_URL,
          },
          // config
        })
      });
    }
    catch(error){
      const isAuthenticated = !!Realm.Sync.User.current;
    }
    
    const isAuthenticated = !!Realm.Sync.User.current;
      
    // this.props.navigation.navigate(isAuthenticated ? 'Auth': 'App');
    if(isAuthenticated){
      this.props.navigation.navigate('App');
    }
    else{
      Alert.alert(
        '',
        'The provided credentials are invalid or the user does not exist!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  }
  
  signOut() {
    Realm.Sync.User.current.logout();
    this.props.navigation.navigate('Auth');
  }

  register() {
    const creds = Realm.Sync.Credentials.usernamePassword(this.state.email, this.state.password);
    Realm.Sync.User.login(SERVER_URL, creds);
    this.props.navigation.navigate('App');
    ///this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.signIn.bind(this)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={this.register}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});