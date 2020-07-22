import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StatysBar,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const Counselling = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar backgroundColor="#eee" />
      <View
        style={{
          flex: 0.5,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginRight: 250,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 27, fontWeight: '700'}}>Counselling</Text>
      </View>
      <View style={{flex: 2}}>
        <View style={{
            width: width / 1.05,
            height: height / 3,
            borderRadius: 10,
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <TextInput
            multiline={true}
            numberOfLines={100}
            onChange={(text) => setText(text)}
            placeholder="Type a summary of the discussion here"
            textAlignVertical = 'top'
          />
          <Text style={{marginTop: 10}}>Make it as brief as possible</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableHighlight
          onPress={() => {
            Alert.alert('Testimony', 'Testimony sent successfuly');
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#206cb7',
            borderRadius: 5,
            width: width / 1.05,
            height: 50,
          }}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
            Send request
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Counselling;
