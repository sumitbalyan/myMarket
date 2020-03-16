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
import {PreferencesContext} from '../Context/Container';
let dark = null;

const Container = () => {
  const [state, setstate] = useState({lat: 0, lng: 0});
  const [error, setError] = useState('');
  const {theme} = React.useContext(PreferencesContext);
  dark = theme.dark;
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
  const [data, setData] = useState(null);
  const custData = [
    'Customer 1',
    'Customer 2',
    'Customer 3',
    'Customer 4',
    'Customer 5',
    'Customer 6',
    'Customer 7',
    'Customer 8',
    'Customer 9 ',
    'Customer 10',
    'Customer 11',
    'Customer 12',
    'Customer 13',
    'Customer 14',
    'Customer 15',
    'Customer 16 ',
    'Customer 17',
    '',
  ];
  const salesData = [
    'Sales 1',
    'Sales 2',
    'Sales 3',
    'Sales 4',
    'Sales 5',
    'Sales 6',
    'Sales 7',
    'Sales 8',
    'Sales 9 ',
    'Sales 10',
    'Sales 11',
    'Sales 12',
    'Sales 13',
    'Sales 14',
    'Sales 15',
    'Sales 16 ',
    'Sales 17',
    '',
  ];
  const ordersData = [
    'Orders 1',
    'Orders 2',
    'Orders 3',
    'Orders 4',
    'Orders 5',
    'Orders 6',
    'Orders 7',
    'Orders 8',
    'Orders 9 ',
    'Orders 10',
    'Orders 11',
    'Orders 12',
    'Orders 13',
    'Orders 14',
    'Orders 15',
    'Orders 16 ',
    'Orders 17',
    '',
  ];
  const productsData = [
    'Products 1',
    'Products 2',
    'Products 3',
    'Products 4',
    'Products 5',
    'Products 6',
    'Products 7',
    'Products 8',
    'Products 9 ',
    'Products 10',
    'Products 11',
    'Products 12',
    'Products 13',
    'Products 14',
    'Products 15',
    'Products 16 ',
    'Products 17',
    '',
  ];
  const localityData = [
    'Locality 1',
    'Locality 2',
    'Locality 3',
    'Locality 4',
    'Locality 5',
    'Locality 6',
    'Locality 7',
    'Locality 8',
    'Locality 9 ',
    'Locality 10',
    'Locality 11',
    'Locality 12',
    'Locality 13',
    'Locality 14',
    'Locality 15',
    'Locality 16 ',
    'Locality 17',
    '',
  ];
  const mapsData = [
    'Maps 1',
    'Maps 2',
    'Maps 3',
    'Maps 4',
    'Maps 5',
    'Maps 6',
    'Maps 7',
    'Maps 8',
    'Maps 9 ',
    'Maps 10',
    'Maps 11',
    'Maps 12',
    'Maps 13',
    'Maps 14',
    'Maps 15',
    'Maps 16 ',
    'Maps 17',
    '',
  ];
  const reportsData = [
    'Reports 1',
    'Reports 2',
    'Reports 3',
    'Reports 4',
    'Reports 5',
    'Reports 6',
    'Reports 7',
    'Reports 8',
    'Reports 9 ',
    'Reports 10',
    'Reports 11',
    'Reports 12',
    'Reports 13',
    'Reports 14',
    'Reports 15',
    'Reports 16 ',
    'Reports 17',
    '',
  ];
  const isfocused = useIsFocused();
  const ListViewItemSeparator = () => {
    return (
      //List Item separator View
      <View style={styles.listItem} />
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
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
      <StatusBar backgroundColor={Colors.blue} barStyle="default" />
      <View style={styles.scrollContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <TouchableOpacity onPress={() => setData(custData)}>
              <Avatar.Icon
                style={styles.avtar1}
                color="#FF9500"
                icon="account-outline"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Customers</Text>
          </View>
          <View style={styles.containerAvtar}>
            <TouchableOpacity onPress={() => setData(salesData)}>
              <Avatar.Icon
                style={styles.avtar2}
                color="#EAAAE3"
                icon="sale"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Sales</Text>
          </View>
          <View style={styles.containerAvtar}>
            <TouchableOpacity onPress={() => setData(ordersData)}>
              <Avatar.Icon
                style={styles.avtar3}
                color="#7ABA73"
                icon="truck-fast"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Orders</Text>
          </View>
          <View style={styles.containerAvtar}>
            <TouchableOpacity onPress={() => setData(productsData)}>
              <Avatar.Icon
                style={styles.avtar4}
                icon="cube-outline"
                color="#2F67CC"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Products</Text>
          </View>
          <View style={styles.containerAvtar}>
            <TouchableOpacity onPress={() => setData(localityData)}>
              <Avatar.Icon
                style={styles.avtar5}
                icon="city-variant-outline"
                color="#F9D84F"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Locality</Text>
          </View>
          <View style={styles.containerAvtar}>
            <TouchableOpacity onPress={() => setData(mapsData)}>
              <Avatar.Icon
                style={styles.avtar6}
                icon="google-maps"
                color="grey"
                size={60}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Maps</Text>
          </View>
          <View style={styles.containerAvtar}>
            <TouchableOpacity onPress={() => setData(reportsData)}>
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
      {data && (
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
      )}
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
    flex: 2,
    height: 100,
    paddingLeft: 5,
  },
  containerAvtar: {
    marginHorizontal: 5,
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
    marginHorizontal: 20,
    fontSize: 12,
    color: dark ? '#fff' : '#000',
    width: 100,
  },
  lblPanding: {
    padding: 10,
    fontSize: 12,
    color: dark ? '#fff' : '#000',
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
  listItem: {height: 0.5, width: '100%', backgroundColor: '#606070'},
});
export default Container;
