import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../../components/context';

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';


//graphql signup Mutation definition
const SIGNUP_MUTATION = gql`
  mutation SignUp_mutation($email:String!,$password:String!){
    signup(email:$email,password:$password){
      token
    }
  }

`;

const SignUpScreen = ({navigation}) => {
  const {signUp} = React.useContext(AuthContext);
  const [userData, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...userData,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...userData,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...userData,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...userData,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...userData,
      secureTextEntry: !userData.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...userData,
      confirm_secureTextEntry: !userData.confirm_secureTextEntry,
    });
  };
  const {password,username} = userData
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#206cb7" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Create a new account</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animatable.View
            animation="fadeIn"
            style={{
              alignSelf: 'center',
              width: 50,
              height: 5,
              backgroundColor: '#1c1e20',
              marginBottom: 20,
            }}
          />
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {userData.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter a secure password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {userData.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {userData.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
          <Mutation
                mutation={SIGNUP_MUTATION}
                variables={{username, password}}
                onCompleted={
                  (data) => signUp(data)
                }
              >
            {
              mutation => (
                <TouchableHighlight
              underlayColor="#206cb7"
              style={styles.btn1}
              onPress={() => {
                mutation
                navigation.goBack('SignInScreen')
                
                }}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign Up
              </Text>
            </TouchableHighlight>
              )
            }
            </Mutation>
            <TouchableHighlight
              underlayColor="#206cb7"
              onPress={() => navigation.goBack('SignInScreen')}
              style={[
                styles.signIn,
                {
                  borderColor: '#1c1e20',
                  borderWidth: 1.5,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#1c1e20',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#206cb7',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  btn1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#1c1e20',
    borderRadius: 10,
    marginBottom: 10,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textSign: {
    fontSize: 25,
    fontWeight: '600',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
