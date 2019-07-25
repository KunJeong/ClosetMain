/**
 * @flow
 */

import React, { Component } from 'react';
import Realm from "realm";
import { View, ActivityIndicator, StatusBar } from "react-native";
import { User } from '../schemas';

export default class AuthLoadingScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const isAuthenticated = !!Realm.Sync.User.current;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(isAuthenticated ? 'App' : 'Auth');
  };

  userLogoutAll() {
    var users = Realm.Sync.User.all;
    for(const key in users) {
      const user = users[key];
      user.logout();
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" hidden />
      </View>
    );
  }
}