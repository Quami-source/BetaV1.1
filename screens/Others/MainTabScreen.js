import React from 'react';
import {View, Text, TouchableOpacity,Alert} from 'react-native';
//import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import Testimony from '../Testimony';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
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
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
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
          <Icon name="account" color={color} size={26} onPress={()=> Alert.alert('You have no notification')}/>
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 0,
        },
        headerRight: () => {
          return (
            <TouchableOpacity style={{marginRight: 15}}>
              <Icon name="bell" size={26} color="#206cb7" />
            </TouchableOpacity>
          );
        },
        headerLeft: () => {
          return (
            <TouchableOpacity style={{marginLeft: 15}}>
              <Icon
                name="dots-vertical"
                size={30}
                color="#c6c6c6"
                onPress={() => navigation.openDrawer()}
              />
            </TouchableOpacity>
          );
        },
      }}
    />
    <HomeStack.Screen name="Testimony" component={Testimony}/>
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
