import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../styles/Colors';
import {List, Avatar} from 'react-native-paper';

const Container = () => {
  return (
    <View style={styles.body}>
      <Avatar.Icon style={styles.avtar} icon="account-edit" size={60} />
      <List.Section style={styles.text}>
        <List.Subheader>Account Settings</List.Subheader>
        <List.Item
          style={styles.item}
          title="Change Password"
          titleNumberOfLines={1}
          left={() => <List.Icon color="#000" icon="pencil" />}
          onPress={() => {}}
        />
        <List.Item
          style={styles.item}
          title="Log Out"
          left={() => <List.Icon color="#000" icon="logout" />}
          onPress={() => {}}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avtar: {
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    alignSelf: 'stretch',
  },
  item: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Container;
