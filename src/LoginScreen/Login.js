import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styles/Colors';

const {width: WIDTH} = Dimensions.get('window');

const Container = ({navigation}) => {
  const _SignInAsync = () => {
    alert('TODO:Login');
  };
  const _SignUpAsync = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.body}>
        <StatusBar backgroundColor={Colors.blue} barStyle="default" />
        <Icon name="chart-line" size={80} color={Colors.white} />
        <Text style={styles.textHeader}>Login</Text>
        <View>
          <TouchableOpacity style={styles.btnLogin} onPress={_SignInAsync}>
            <Text style={styles.btnLoginText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnSignup} onPress={_SignUpAsync}>
            <Text style={styles.btnSignupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  textHeader: {
    marginTop: 5,
    padding: 5,
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  text: {
    fontSize: 20,
    marginTop: 5,
    padding: 5,
    textAlign: 'center',
    color: Colors.white,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    marginTop: 20,
  },
  btnLoginText: {
    color: Colors.blue,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  btnSignup: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    borderColor: Colors.white,
    borderWidth: 1,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    marginTop: 20,
  },
  btnSignupText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
});
export default Container;
