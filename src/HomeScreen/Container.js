import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Colors} from '../styles/Colors';
import {useTheme} from '@react-navigation/native';

const Container = () => {
  const paperTheme = useTheme();
  return (
    <View style={styles.body}>
      <StatusBar
        backgroundColor={paperTheme.colors.primary}
        barStyle="default"
      />
      <Text style={styles.text}>Home</Text>
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
    fontSize: 28,
    fontWeight: '900',
    color: Colors.blue,
  },
});
export default Container;
