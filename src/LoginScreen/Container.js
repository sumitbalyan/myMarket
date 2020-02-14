/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {Colors} from '../styles/Colors';
import {useTheme} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {userAuthAction} from '../_action/Container';

const {width: WIDTH} = Dimensions.get('window');

const Container = props => {
  const dispatch = useDispatch();
  const paperTheme = useTheme();
  const {navigation} = props;
  useEffect(() => {
    _fingerAuth();
    return () => {
      FingerprintScanner.release();
    };
  }, []);
  const _SignInAsync = () => {
    navigation.navigate('Signin');
  };
  const _SignUpAsync = () => {
    navigation.navigate('Signup');
  };
  const _fingerAuth = () => {
    FingerprintScanner.release();
    if (requiresLegacyAuthentication()) {
      authLegacy();
    } else {
      authCurrent();
    }
  };
  const requiresLegacyAuthentication = () => {
    return Platform.Version < 23;
  };

  const authCurrent = () => {
    FingerprintScanner.authenticate({
      description: 'Log in with Biometrics',
    }).then(() => {
      signin();
    });
  };

  const authLegacy = () => {
    FingerprintScanner.authenticate({
      onAttempt: handleAuthenticationAttemptedLegacy,
    })
      .then(() => {
        //this.props.handlePopupDismissedLegacy();
        signin();
      })
      .catch(error => {
        this.setState({
          errorMessageLegacy: error.message,
          biometricLegacy: error.biometric,
        });
      });
  };
  const signin = () => {
    dispatch(userAuthAction.login({name: 'Sumit'}));
  };
  const handleAuthenticationAttemptedLegacy = error => {
    this.setState({errorMessageLegacy: error.message});
  };
  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.body}>
        <StatusBar
          backgroundColor={paperTheme.colors.primary}
          barStyle="default"
        />
        <Icon name="chart-line" size={80} color={Colors.white} />
        <Text style={styles.textHeader}>Wellcome to myMarket</Text>
        <Text style={styles.text}>
          Visualize realtime updates from your bussiness.
        </Text>
        <View>
          <TouchableOpacity onPress={() => _fingerAuth()}>
            <MaterialCommunityIcons
              name="fingerprint"
              size={60}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>or</Text>
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
