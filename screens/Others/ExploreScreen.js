import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, marginLeft: 20}}>
        <Text style={{fontSize: 27, fontWeight: '700'}}>Explore</Text>
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
                  name="scale-balance"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Tithe payment</Text>
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
              <View style={{flex: 1, marginLeft: 20, alignItems: 'flex-start'}}>
                <Icon
                  name="sack"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Offertory</Text>
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
                  name="seed"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Seed sowing</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Icon name="chevron-right" size={26} />
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View
          style={{backgroundColor: '#fff', marginTop: 20, borderRadius: 20}}>
          <TouchableHighlight
            onPress={() => Alert.alert('alert', 'Message')}
            underlayColor="#cecece">
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1, marginLeft: 20}}>
                <Icon
                  name="book-open-page-variant"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Spiritual books</Text>
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
                  name="headphones"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Audio Messages</Text>
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
                  name="image"
                  size={26}
                  color="#569def"
                  style={{marginBottom: 10}}
                />
              </View>
              <View style={{flex: 2, borderBottomWidth: 0.3}}>
                <Text style={{fontSize: 18}}>Photo album</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Icon name="chevron-right" size={26} />
              </View>

              
            </View>
            
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={{backgroundColor: '#fff', marginTop: 20, borderRadius: 20}}
          onPress={() => Alert.alert('alert', 'Message')}
          underlayColor="#cecece">
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1, marginLeft: 20, alignItems: 'flex-start'}}>
              <Icon
                name="information"
                size={26}
                color="#569def"
                style={{marginBottom: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontSize: 18}}>Know your church</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Icon name="chevron-right" size={26} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
