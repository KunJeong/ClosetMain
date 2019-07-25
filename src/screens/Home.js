/**
 * @flow
 */

import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './MainScreen';
import SignInScreen from './SignInScreen';
import AuthLoadingScreen from './AuthLoadingScreen';

const AppStack = createStackNavigator({ Main: MainScreen }, {headerMode: 'none'});      // 앱 메인 화면
const AuthStack = createStackNavigator({ SignIn: SignInScreen }, {headerMode: 'none'}); // 인증 화면

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(AppNavigator);