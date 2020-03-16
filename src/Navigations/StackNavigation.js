import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Sales from '../Sales';
import {useTheme} from 'react-native-paper';
import TabsNavigation from './TabsNavigation';
import Photo from '../images/photo.jpg';
import Orders from '../Orders';
import Products from '../Products';
import Customers from '../Customers';
import Locality from '../Locality';
import Reports from '../Reports';
import Maps from '../Maps';
import {Colors} from '../styles/Colors';

const Header = ({scene, previous, navigation}) => {
  const theme = useTheme();
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.background}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.notification}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image size={40} source={Photo} />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? (
            title
          ) : (
            <MaterialCommunityIcons
              name="point-of-sale"
              size={40}
              color={Colors.blue}
              style={{marginRight: 10}}
            />
          )
        }
      />
    </Appbar.Header>
  );
};
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={TabsNavigation}
        options={{headerTitle: 'Home'}}
      />
      <Stack.Screen
        name="Sales"
        component={Sales}
        options={{headerTitle: 'Sales'}}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerTitle: 'Orders'}}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{headerTitle: 'Products'}}
      />
      <Stack.Screen
        name="Customers"
        component={Customers}
        options={{headerTitle: 'Customers'}}
      />
      <Stack.Screen
        name="Locality"
        component={Locality}
        options={{headerTitle: 'Locality'}}
      />
      <Stack.Screen
        name="Map"
        component={Maps}
        options={{headerTitle: 'Map'}}
      />
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{headerTitle: 'Reports'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
