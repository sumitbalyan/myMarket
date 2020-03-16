/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../HomeScreen';
import Profile from '../Profile';
import Notification from '../Notification';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {Colors} from '../styles/Colors';
import { Alert } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const TabsNavigation = props => {
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Home';
  const theme = useTheme();
  const isfocused = useIsFocused();
  let icon = 'plus';

  // switch (routeName) {
  //   case 'Profile':
  //     icon = 'email-plus-outline';
  //     break;
  //   default:
  //     icon = 'plus';
  //     break;
  // }
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.text}
        barStyle={{backgroundColor: theme.colors.background}}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="account" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
      {routeName === 'Home' && (
        <Portal>
          <FAB
            icon={icon}
            visible={isfocused}
            onPress={() => props.navigation.navigate('Customers')}
            style={{
              position: 'absolute',
              bottom: 100,
              right: 16,
              backgroundColor: Colors.blue,
            }}
            color="white"
          />
        </Portal>
      )}
    </React.Fragment>
  );
};

export default TabsNavigation;
