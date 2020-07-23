import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import {Mutation, useMutation} from 'react-apollo';
import gql from 'graphql-tag';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../../components/context';

//SignIn Mutation definition
const SIGNIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const SignInScreen = ({navigation}) => {
  const [userData, setData] = React.useState({
    name: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const [mutate] = useMutation(SIGNIN_MUTATION);
  const [error, setError] = React.useState();
  
  const handlePress = async () => {
    try {
      const {data} = await mutate(userData.name, userData.password);
      signIn(data);
      console.log(data);
    } catch (e) {
      setError(e);
      console.log('Error in fetching data ' + e);
    }
  };

  //const [textColor, setTextColor] = React.useState({textColor : '#fff'})


  const {colors} = useTheme();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...userData,
        name: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...userData,
        name: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...userData,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...userData,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...userData,
      secureTextEntry: !userData.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...userData,
        isValidUser: true,
      });
    } else {
      setData({
        ...userData,
        isValidUser: false,
      });
    }
  };

  const loginHandle = () => {
    /* const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } ); */

    if (userData.name.length == 0 || userData.password.length == 0) {
      Alert.alert('email or password field cannot be empty.', [{text: 'Okay'}]);
      return;
    }

    if ((userData.name != 'admin') && (userData.password != 'rootadmin')) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
    }
    else{
        signIn()
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#206cb7" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Provide your Sign In details</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
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
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Username
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {userData.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {userData.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={userData.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
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
        {userData.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Animatable.Text
            style={{color: '#206cb7', marginTop: 15, fontSize: 16}}>
            Forgot password?
          </Animatable.Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableHighlight
            underlayColor="#206cb7"
            style={styles.btn1}
            onPress={() => {
              loginHandle()
            }}>
            <Text style={[styles.textSign, {color: '#fff'}]}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#206cb7"
            onPress={() => navigation.navigate('SignUpScreen')}
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
              Sign Up
            </Text>
          </TouchableHighlight>
        </View>
      </Animatable.View>
    </View>
  );
};
//#08d4c4
export default SignInScreen;

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
    flex: 2.5,
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
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
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
    fontSize: 20,
    fontWeight: '600',
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
});
