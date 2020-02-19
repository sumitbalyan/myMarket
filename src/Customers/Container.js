import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Alert, FlatList} from 'react-native';
import {Colors} from '../styles/Colors';
import {Portal, FAB} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

const Container = props => {
  const [state, setstate] = useState([
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
  return (
    <React.Fragment>
      <StatusBar backgroundColor={Colors.blue} barStyle="default" />
      <FlatList
        data={state}
        //dataSource to add data in the list
        ListHeaderComponent={renderHeader}
        //Header to show above listview
        ListFooterComponent={renderFooter}
        //Footer to show below listview
        ItemSeparatorComponent={ListViewItemSeparator}
        //List Item separator
        renderItem={({item}) => (
          //Rendering Single Row
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
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
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Portal>
        <FAB
          icon={'plus'}
          visible={isfocused}
          style={styles.fab}
          color="white"
          onPress={() => props.navigation.navigate('Form')}
        />
      </Portal>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 16,
    backgroundColor: Colors.blue,
  },
  rowViewContainer: {
    padding: 10,
    fontSize: 18,
    //height: 44,
  },
  header_footer_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 45,
    backgroundColor: Colors.grey,
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});
export default Container;
