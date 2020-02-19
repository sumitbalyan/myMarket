import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../styles/Colors';

const Container = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Reports</Text>
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
