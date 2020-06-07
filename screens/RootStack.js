import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import LoginScreen from './Auth/LoginScreen';
import SignUpScreen from './Auth/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;