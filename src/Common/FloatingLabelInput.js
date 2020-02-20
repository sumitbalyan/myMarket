import React, {Component} from 'react';
import {View, TextInput, Animated, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WIDTH = Dimensions.get('window').width;
export default class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this._animatedIsFocused = new Animated.Value(props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const {label, ...props} = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 70,
      paddingBottom: 20,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    };
    return (
      <View style={styles.inputContainer}>
        <Icon
          name={'alpha-a-box-outline'}
          size={28}
          style={styles.inputIcon}
          color={Colors.blue}
        />
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={'rgba(0,0,0,0.35)'}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: WIDTH - 45,
    height: 45,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 45,
    marginHorizontal: 25,
    color: 'rgba(0,0,0,.35)',
    //backgroundColor: 'rgba(0,0,0,0.35)',
    borderColor: 'rgba(0,0,0,0.35)',
    borderWidth: 1,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
});
