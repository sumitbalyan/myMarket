import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Colors} from '../styles/Colors';

const Container = () => {
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={Colors.blue} barStyle="default" />
      <Text style={styles.text}>Dealer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.white,
  },
});
export default Container;
