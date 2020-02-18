import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Alert} from 'react-native';
import {Colors} from '../styles/Colors';
import {useTheme} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
const Container = () => {
  const [state, setstate] = useState({lat: 0, lng: 0});
  const [error, setError] = useState('');
  const [address, setAddress] = useState('');
  useEffect(() => {
    findCoordinates();
    // fetch(
    //   'https://maps.googleapis.com/maps/api/geocode/json?latlng=30.42692350,77.90955910&sensor=true&key=Google_key',
    // ).then(res =>
    //   res.json().then(result => {
    //     setAddress(result);
    //   }),
    // );
    //TODO: Find address
    //URL https://maps.googleapis.com/maps/api/geocode/json?latlng=30.42692350,77.90955910&sensor=true&key=Google_key
  }, []);
  const paperTheme = useTheme();
  const findCoordinates = () => {
    const config = {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000};
    Geolocation.setRNConfiguration(config);
    //Wach position
    const watchId = Geolocation.watchPosition(
      info => {
        setstate({lat: info.coords.latitude, lng: info.coords.longitude});
        console.log(info);
      },
      err => {
        setError(err.message);
      },
    );
    return () => Geolocation.clearWatch(watchId);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={paperTheme.colors.primary}
        barStyle="default"
      />
      <Text style={styles.text}>Welcome to myMarket</Text>
      {error ? (
        <Text>{JSON.stringify(error)}</Text>
      ) : (
        <Text>{JSON.stringify(state)}</Text>
      )}
      <Text>{JSON.stringify(address)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.red,
    opacity: 0.7,
  },
});
export default Container;
