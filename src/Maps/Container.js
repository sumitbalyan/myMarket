import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, Button} from 'react-native';
import {Colors} from '../styles/Colors';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';

const Container = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Show Map</Text>
      <View>
        <Button onPress={showDatepicker} title={date.toDateString()} />
      </View>
      <View>
        <Button onPress={showTimepicker} title={date.toDateString()} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.421977,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
