import React from 'react';
import {TouchableOpacity, View, Text,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import {BottonContext} from '../../components/BottonContex';

import HomeScreen from './HomeScreen';
import Testimony from '../Testimony';
import Counselling from '../Counselling';
import PrayerRequest from '../PrayerRequest';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  const {toggleBtnVisibility} = React.useContext(BottonContext);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#eee',
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
              <TouchableOpacity style={{marginRight: 15}} onPress = {()=>Alert.alert('Notification',"You have no notifictions yet")} >
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
                  color="#858585"
                  onPress={() => navigation.openDrawer()}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Testimony"
        component={Testimony}
        options={{
          header: () => {
            return (
              <View style={{marginLeft: 20, marginTop: 20}}>
                <Feather
                  name="chevron-left"
                  size={30}
                  color="#000"
                  onPress={() => {
                    toggleBtnVisibility();
                    //setBottomShow(true)
                    navigation.goBack('Home');
                  }}
                />
              </View>
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Counselling"
        component={Counselling}
        options={{
          header: () => {
            return (
              <View style={{marginLeft: 20, marginTop: 20}}>
                <Feather
                  name="chevron-left"
                  size={30}
                  color="#000"
                  onPress={() => {
                    //toggleBtnVisibility()
                    //setBottomShow(true)
                    navigation.goBack('Home');
                  }}
                />
              </View>
            );
          },
        }}
      />

      <HomeStack.Screen
        name="Prayer"
        component={PrayerRequest}
        options={{
          header: () => {
            return (
              <View style={{marginLeft: 20, marginTop: 20}}>
                <Feather
                  name="chevron-left"
                  size={30}
                  color="#000"
                  onPress={() => {
                    //toggleBtnVisibility()
                    //setBottomShow(true)
                    navigation.goBack('Home');
                  }}
                />
              </View>
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
