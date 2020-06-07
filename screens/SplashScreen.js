import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/img/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text style={styles.title}>Stay connected with your church!</Text>
        <TouchableHighlight style={styles.btn1} onPress={()=>navigation.navigate('LoginScreen')}>
          <Text style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
            Get Started
          </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.footer}>
      <Animatable.Image
          animation="bounceIn"
          delay={200}
          source={require('../assets/img/image.png')}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const {height, width} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
  },
  btn1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    backgroundColor: '#206cb7',
    borderRadius: 15,
    marginBottom: 10,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  image: {
    width: width,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
