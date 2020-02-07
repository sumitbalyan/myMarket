import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styles/Colors';

const Container = props => {
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={Colors.blue} />
      <Icon name="chart-line" size={50} color={Colors.white} />
      <Text style={styles.text}>myMarket</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
  },
  text: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.white,
  },
});

export default Container;
