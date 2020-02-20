import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import {Colors} from '../styles/Colors';
import {useTheme, useIsFocused} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {Avatar} from 'react-native-paper';

const Container = () => {
  const [state, setstate] = useState({lat: 0, lng: 0});
  const [error, setError] = useState('');

  useEffect(() => {
    findCoordinates();
  }, []);
  const paperTheme = useTheme();
  const findCoordinates = () => {
    const config = {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000};
    Geolocation.setRNConfiguration(config);
    Geolocation.getCurrentPosition(info =>
      setstate({lat: info.coords.latitude, lng: info.coords.longitude}),
    );
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
  const [data, setData] = useState([
    'Button',
    'Card',
    'Input',
    'Avatar',
    'CheckBox',
    'Header',
    'Icon',
    'Lists',
    'Rating ',
    'Pricing',
    'Avatar',
    'CheckBox',
    'Header',
    'Icon',
    'Lists',
    'Rating ',
    'Pricing',
    '',
  ]);
  const isfocused = useIsFocused();
  const ListViewItemSeparator = () => {
    return (
      //List Item separator View
      <View style={{height: 0.5, width: '100%', backgroundColor: '#606070'}} />
    );
  };
  const showItem = rowData => {
    //Alert on the click of list Item
    Alert.alert(rowData);
  };
  const renderHeader = () => {
    //View to set in Header
    return (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> Name </Text>
        <Text style={styles.textStyle}> Status </Text>
        <Text style={styles.textStyle}> Date </Text>
      </View>
    );
  };
  const renderFooter = () => {
    //View to set in Footer
    return (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> This is Footer </Text>
      </View>
    );
  };
  const renderItems = item => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={styles.rowViewContainer}
          onPress={showItem.bind(this, item)}>
          {item}
        </Text>
        <Text
          style={styles.rowViewContainer}
          onPress={showItem.bind(this, 'Pending')}>
          Pending
        </Text>
        <Text
          style={styles.rowViewContainer}
          onPress={showItem.bind(this, '19-02-2020')}>
          19-02-2020
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={paperTheme.colors.primary}
        barStyle="default"
      />
      <View style={styles.scrollContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <TouchableOpacity>
              <Avatar.Icon
                style={styles.avtar1}
                color="#FF9500"
                icon="account-outline"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Customer</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Avatar.Icon
                style={styles.avtar2}
                color="#EAAAE3"
                icon="sale"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Sales</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Avatar.Icon
                style={styles.avtar3}
                color="#7ABA73"
                icon="truck-fast"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Orders</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Avatar.Icon
                style={styles.avtar4}
                icon="cube-outline"
                color="#2F67CC"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Products</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Avatar.Icon
                style={styles.avtar5}
                icon="city-variant-outline"
                color="#F9D84F"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Locality</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Avatar.Icon
                style={styles.avtar6}
                icon="google-maps"
                color="grey"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Maps</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Avatar.Icon
                style={styles.avtar7}
                icon="file-document"
                color="#FF0000"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Reports</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 3}}>
        <FlatList
          data={data}
          //dataSource to add data in the list
          ListHeaderComponent={renderHeader}
          //Header to show above listview
          ListFooterComponent={renderFooter}
          //Footer to show below listview
          ItemSeparatorComponent={ListViewItemSeparator}
          // Stickey header
          stickyHeaderIndices={[0]}
          //List Item separator
          renderItem={({item}) =>
            //Rendering Single Row
            item === '' ? null : renderItems(item)
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
    fontSize: 12,
    fontWeight: '900',
    opacity: 0.7,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
  },
  scrollContainer: {
    height: 100,
    paddingLeft: 5,
    paddingRight: 5,
  },
  avtar1: {
    backgroundColor: '#FFE5BF',
    borderWidth: 1,
    borderColor: '#FF9500',
  },
  avtar2: {
    backgroundColor: '#F9E4F6',
    borderWidth: 1,
    borderColor: '#EAAAE3',
  },
  avtar3: {
    backgroundColor: '#DEEEDC',
    borderWidth: 1,
    borderColor: '#7ABA73',
  },
  avtar4: {
    backgroundColor: '#96BDFD',
    borderWidth: 1,
    borderColor: '#2F67CC',
  },
  avtar5: {
    backgroundColor: '#FEF5D3',
    borderWidth: 1,
    borderColor: '#F9D84F',
  },
  avtar6: {
    backgroundColor: '#FfFFFF',
    borderWidth: 1,
    borderColor: 'grey',
  },
  avtar7: {
    backgroundColor: '#FF7575',
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  rowViewContainer: {
    padding: 10,
    fontSize: 12,
  },
  header_footer_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 30,
    backgroundColor: Colors.blue,
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '900',
    opacity: 0.7,
    padding: 7,
  },
});
export default Container;
