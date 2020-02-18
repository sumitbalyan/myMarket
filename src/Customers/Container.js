import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Colors} from '../styles/Colors';

const Container = () => {
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={Colors.blue} barStyle="default" />
      <Text style={styles.text}>Customers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.blue,
  },
});
export default Container;
