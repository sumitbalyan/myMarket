import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './HomeNavigation';
import Landing from '../LoginScreen/';
import Login from '../LoginScreen/Login';
import Signup from '../SignupScreen';
import AuthLoading from '../Common/AuthLoading';
import {Colors} from '../styles/Colors';

const LoginStackNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: ({navigation}) => {
        return {
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.blue,
          },
          headerLeft: null,
        };
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: ({navigation}) => {
        return {
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.blue,
          },
        };
      },
    },
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => {
        return {
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.blue,
          },
        };
      },
    },
  },
  {
    initialRouteName: 'Landing',
  },
);
const styles = StyleSheet.create({
  drawerView: {
    flex: 1,
    width: null,
    height: null,
    paddingLeft: 5,
  },
  drawerUserView: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'italic',
    opacity: 0.5,
  },
  devider: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginTop: 15,
    opacity: 0.5,
  },
  containerSafeAreaView: {
    marginLeft: 5,
    marginRight: 5,
  },
});
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: Home,
      Auth: LoginStackNavigator,
      Login: Login,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
