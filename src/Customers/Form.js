import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Picker,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../styles/Colors';

const {width: WIDTH} = Dimensions.get('window');

const Form = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView scrollEnabled={true}>
          <SafeAreaView>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>Add Customer</Text>
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'alpha-a-box-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Customer Name'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'alpha-a-box-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Contact Person Name'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'alpha-a-box-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Address'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'cellphone-basic'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Mobile Numer'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="phone-pad"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'email-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Email Address'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.pickerContainer}>
              <Icon
                name={'city-variant-outline'}
                size={28}
                style={styles.pickerIcon}
                color={Colors.blue}
              />
              <Picker style={styles.picker}>
                <Picker.Item key="Type" label="--Select Type--" value="Type" />
                <Picker.Item key="Dealer" label="Dealer" value="Dealer" />
                <Picker.Item
                  key="Distributer"
                  label="Distributer"
                  value="Distributer"
                />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Icon
                name={'city-variant-outline'}
                size={28}
                style={styles.pickerIcon}
                color={Colors.blue}
              />
              <Picker style={styles.picker}>
                <Picker.Item
                  key="State"
                  label="--Select State--"
                  value="State"
                />
                <Picker.Item key="Delhi" label="Delhi" value="Delhi" />
                <Picker.Item
                  key="UttarPradesh"
                  label="Uttar Pradesh"
                  value="Uttar Pradesh"
                />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Icon
                name={'city-variant-outline'}
                size={28}
                style={styles.pickerIcon}
                color={Colors.blue}
              />
              <Picker style={styles.picker}>
                <Picker.Item
                  key="State"
                  label="--Select City--"
                  value="State"
                />
                <Picker.Item
                  key="NewDelhi"
                  label="New Delhi"
                  value="New Delhi"
                />
                <Picker.Item key="Okhla1" label="Okhla 1" value="Okhla 1" />
              </Picker>
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'city-variant-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Area'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'alpha-a-box-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Division'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'alpha-a-box-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Distributer'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'pin-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Pin Number'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="number-pad"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={'alpha-a-box-outline'}
                size={28}
                style={styles.inputIcon}
                color={Colors.blue}
              />
              <TextInput
                style={styles.input}
                placeholder={'Dealer Category'}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={text => {}}
              />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnLogin} onPress={() => {}}>
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'italic',
    opacity: 0.9,
  },
  picker: {
    width: WIDTH - 100,
    height: 45,
    fontSize: 18,
    marginLeft: 45,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    borderColor: 'rgba(0,0,0,0.35)',
    borderWidth: 1,
    borderRadius: 10,
  },
  pickerIcon: {
    position: 'absolute',
    top: 8,
    left: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  input: {
    width: WIDTH - 45,
    height: 45,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 45,
    marginHorizontal: 25,
    color: 'rgba(0,0,0,0.35)',
    //backgroundColor: 'rgba(0,0,0,0.35)',
    borderColor: 'rgba(0,0,0,0.35)',
    borderWidth: 1,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Form;
