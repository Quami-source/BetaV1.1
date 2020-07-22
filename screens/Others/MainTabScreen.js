import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
//import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottonContext} from '../../components/BottonContex';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import Testimony from '../Testimony';
import HomeStackScreen from './HomeStackScreen'

//const DetailsStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  const [bottomShow, setBottomShow] = React.useState(true);

  const context = React.useMemo(
    () => ({
      toggleBtnVisibility: () => {

        setBottomShow(!bottomShow);
      },
    }),                        
    [],
  );

  const toggleTab = () => {
    setBottomShow(true);
  };

  return (
    <BottonContext.Provider value={context}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarVisible: true,
        }}
        tabBarOptions={{
          activeTintColor: '#569def',
          inactiveTintColor: '#cccccc',
          showLabel: false,
          style: {
            width: '80%',
            alignSelf: 'center',
            marginBottom: 10,
            borderRadius: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="globe-model" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </BottonContext.Provider>
  );
};

export default MainTabScreen;


