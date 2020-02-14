import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../HomeScreen';
import Settings from '../Settings';
import Notification from '../Notification';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const TabsNavigation = props => {
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Home';
  const theme = useTheme();
  const isfocused = useIsFocused();
  let icon = 'feather';

  switch (routeName) {
    case 'Settings':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }
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
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: 'settings-outline',
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          icon={icon}
          visible={isfocused}
          style={{
            position: 'absolute',
            bottom: 100,
            right: 16,
            backgroundColor: theme.colors.primary,
          }}
          color="white"
        />
      </Portal>
    </React.Fragment>
  );
};

export default TabsNavigation;
