import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './screens/DrawerContent';

import MainTabScreen from './screens/Others/MainTabScreen';
import SupportScreen from './screens/Others/SupportScreen';
import SettingsScreen from './screens/Others/SettingsScreen';
import BookmarkScreen from './screens/Others/BookmarkScreen';

import {AuthContext} from './components/context';

import RootStack from './screens/RootStack';

import AsyncStorage from '@react-native-community/async-storage';
import AUTH_TOKEN from './constants/Auth'; 
//Apollo configs
import {ApolloProvider} from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'https://localhost:4000',
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
});

const Drawer = createDrawerNavigator();

const App = () => {
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

  const state = {
    isLoading: true,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, state);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        //const userToken = String(foundUser[0].userToken);
        //const userName = foundUser[0].username;
        const {token} = data.login

        try {
          await AsyncStorage.setItem(AUTH_TOKEN, token);
        } catch (e) {
          console.log(e);
        }
        console.log('user token: ', token);
        //console.log('user token: ', userToken);
        dispatch({type:'LOGIN', token:token})
      },
      signOut: async () => {
        //setUserToken(null);
        //setIsLoading(false);
        try {
          await AsyncStorage.removeItem(AUTH_TOKEN);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: async (data) => {
        //setUserToken('fgkj');
        //setIsLoading(false);
        const {token} = data.signUp
        //let userName = 1
        try {
          await AsyncStorage.setItem(AUTH_TOKEN, token);
        } catch (e) {
          console.log(e);
        }
        console.log('user token: ', token);
        dispatch({type: 'REGISTER', token: token});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      //setIsLoading(false);
      //setUserToken('fgkj');
      let userToken =null;
      try {
        userToken = await AsyncStorage.getItem(AUTH_TOKEN);
      } catch (e) {
        console.log(e);
      }
      //console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 600);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#206cb7"/>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <ApolloProvider client={client}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStack />
        )}
      </NavigationContainer>
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

export default App;
