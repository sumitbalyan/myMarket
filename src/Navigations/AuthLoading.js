import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Landing from '../LoginScreen';
import Signin from '../LoginScreen/Login';
import Home from '../HomeScreen';
import Signup from '../SignupScreen';

const Stack = createStackNavigator();

export default function AuthNavigation(props) {
  const userAuth = useSelector(state => state.userAuth);
  return (
    <Stack.Navigator headerMode="none">
      {userAuth.userToken === null ? (
        <>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{
              title: 'Landing',
              animationTypeForReplace: userAuth.isSignout ? 'pop' : 'push',
            }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              title: 'Signin',
              animationTypeForReplace: userAuth.isSignout ? 'pop' : 'push',
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerTitle: 'Signup',
              animationTypeForReplace: userAuth.isSignout ? 'pop' : 'push',
            }}
          />
        </>
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
    </Stack.Navigator>
  );
}
