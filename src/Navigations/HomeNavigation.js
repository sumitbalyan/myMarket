import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Button,
  AsyncStorage,
} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createAppContainer, createSwitchNavigator, StackActions, NavigationActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../HomeScreen';
import Customers from '../Customers';
import Products from '../Products';
import Sales from '../Sales';
import Tasks from '../Tasks';
import Profile from '../Profile';
import Settings from '../Settings';
import Login from '../LoginScreen';
import {userAuth} from '../services';

import {Appnavigation} from '../utils/AppNavigation';
import {Colors} from '../styles/Colors';

const {width: WIDTH} = Dimensions.get('window');

const HomeNavigation = props => {
  Appnavigation.setNavigation(props.navigation);
  const AppContainer = createAppContainer(
    createSwitchNavigator(
      {
        Auth: Login,
        Home: HomeDrawer,
      },
      {
        initialRouteName: 'Home',
      },
    ),
  );
  return <AppContainer />;
};

const CustomDrawerComponent = props => (
  <View style={styles.drawerView}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />
    <SafeAreaView style={styles.containerSafeAreaView}>
      <View style={styles.drawerUserView}>
        <Icon name="ios-contact" size={100} color="#858585" />
        <Text style={styles.text}>Hi User!</Text>
      </View>
      <View style={styles.devider} />
      <ScrollView>
        <DrawerItems {...props} />
        <Button
          color={'red'}
          title="Logout"
          onPress={() => {
            userAuth.logout(props.navigation);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  </View>
);
// const HomeBottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         title: 'Home',
//         tabBarIcon: ({tintColor}) => (
//           <Icon name="ios-cube" size={17} color={tintColor} />
//         ),
//       },
//     },
//     Profile: {
//       screen: Profile,
//       navigationOptions: {
//         title: 'Profile',
//         tabBarIcon: ({tintColor}) => (
//           <Icon name="ios-contact" size={17} color={tintColor} />
//         ),
//       },
//     },
//     Settings: {
//       screen: Settings,
//       navigationOptions: {
//         title: 'Settings',
//         tabBarIcon: ({tintColor}) => (
//           <Icon name="ios-settings" size={17} color={tintColor} />
//         ),
//       },
//     },
//   },
//   {
//     tabBarPosition: 'bottom',
//     initialRouteName: 'Home',
//   },
// );
const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <Text style={styles.text}>Home</Text>,
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerLeft: (
          <Icon
            style={{paddingLeft: 5}}
            color="white"
            name="ios-menu"
            size={35}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
});

const CustomersStackNavigator = createStackNavigator({
  Customers: {
    screen: Customers,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <Text style={styles.text}>Customers</Text>,
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerLeft: (
          <Icon
            style={{paddingLeft: 5}}
            color="white"
            name="ios-menu"
            size={35}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
});

const ProductStackNavigator = createStackNavigator({
  Products: {
    screen: Products,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <Text style={styles.text}>Products</Text>,
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerLeft: (
          <Icon
            style={{paddingLeft: 5}}
            color="white"
            name="ios-menu"
            size={35}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
});

const SalesStackNavigator = createStackNavigator({
  Sales: {
    screen: Sales,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <Text style={styles.text}>Sales</Text>,
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerLeft: (
          <Icon
            style={{paddingLeft: 5}}
            color="white"
            name="ios-menu"
            size={35}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
});

const TasksStackNavigator = createStackNavigator({
  Tasks: {
    screen: Tasks,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <Text style={styles.text}>Categories</Text>,
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerLeft: (
          <Icon
            style={{paddingLeft: 5}}
            color="white"
            name="ios-menu"
            size={35}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
});

const HomeDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        ),
      },
    },
    Customers: {
      screen: CustomersStackNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        ),
      },
    },
    Products: {
      screen: ProductStackNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-cube" color={tintColor} size={24} />
        ),
      },
    },
    Sales: {
      screen: SalesStackNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-people" color={tintColor} size={24} />
        ),
      },
    },
    Tasks: {
      screen: TasksStackNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-stats" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'white',
    },
    drawerWidth: (WIDTH / 3) * 2,
  },
);

const styles = StyleSheet.create({
  drawerView: {
    flex: 1,
    width: null,
    height: null,
    paddingLeft: 5,
    backgroundColor: Colors.blue,
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

export default HomeNavigation;
