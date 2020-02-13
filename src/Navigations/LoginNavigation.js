import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../LoginScreen/';
import Login from '../LoginScreen/Login';
import Signup from '../SignupScreen';

const Stack = createStackNavigator();

const LoginStackNavigator = props => {
  return (
    <Stack.Navigator initialRouteName="Landing" headerMode="none">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          title: 'Landing',
          animationTypeForReplace: props.isSignout ? 'pop' : 'push',
        }}
      />
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
};
export default LoginStackNavigator;
