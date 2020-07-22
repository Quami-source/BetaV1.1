import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, marginLeft: 20}}>
        <Text style={{fontSize: 27, fontWeight: '700'}}>Profile</Text>
      </View>
      <View style={{flex: 3}}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            paddingBottom: 15,
          }}>
          <TouchableHighlight
            onPress={() => Alert.alert('alert', 'Message')}
            underlayColor="#cecece">
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1, marginLeft: 20}}>
                <Icon
                  name="account-edit"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Edit profile</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Icon name="chevron-right" size={26} />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('alert', 'Message')}
            underlayColor="#cecece">
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1, marginLeft: 20}}>
                <Icon
                  name="security"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Privacy policy</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Icon name="chevron-right" size={26} />
              </View>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight
            onPress={() => Alert.alert('alert', 'Message')}
            underlayColor="#cecece">
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1, marginLeft: 20}}>
                <Icon
                  name="help-circle"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Contact us</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Icon name="chevron-right" size={26} />
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => Alert.alert('alert', 'Message')}
            underlayColor="#cecece">
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1, marginLeft: 20}}>
                <Icon
                  name="clipboard-text"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>About app</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Icon name="chevron-right" size={26} />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
