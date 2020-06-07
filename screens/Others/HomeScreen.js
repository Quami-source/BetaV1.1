import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {useTheme} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {
  const shadowOpt = {
    width: width / 2.15,
    height: 160,
    color: '#000',
    border: 8,
    radius: 6,
    opacity: 0.03,
    x: 3,
    y: 15,
    style: {marginVertical: 5},
  };
  const shadowOpted = {
    width: width / 2.15,
    height: 250,
    color: '#000',
    border: 8,
    radius: 3,
    opacity: 0.02,
    x: 1,
    y: 15,
    style: {marginVertical: 5},
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textView}>
          <Animatable.Text
            animation="fadeIn"
            delay={400}
            style={styles.text_header}>
            Hello there,
          </Animatable.Text>
          <Animatable.Text
            animation="fadeIn"
            delay={600}
            style={styles.text_header}>
            Welcome to GEM Diaspora
          </Animatable.Text>
          <Animatable.Text
            animation="fadeIn"
            delay={800}
            style={styles.sub_Text}>
            A campus branch in University of Ghana
          </Animatable.Text>
        </View>
        <View>
          <View style={styles.parentView}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity style={styles.btn4} onPress={()=>navigation.navigate('Testimony')}>
                  <View style={{flexDirection: 'row', flex: 1, margin: 10}}>
                    <View style={{flex: 1}}>
                    <Icon name="plus-circle" size={26} color="#ccc" />
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <Icon name="dots-horizontal" size={26} color="#ccc" />
                    </View>
                  </View>
                  <View
                    style={{flex: 1, justifyContent: 'flex-end', margin: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>
                      Have a testimony?
                    </Text>
                    <Text style={{fontWeight: '500', }}>
                        Encourage someone by sending it to us
                    </Text>
                  </View>
                </TouchableOpacity>
              </BoxShadow>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity style={styles.btn3}>
                  <View style={{flexDirection: 'row', flex: 1, margin: 10}}>
                    <Icon
                          name="briefcase-plus"
                          size={26}
                          color="#efefef"
                        />
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <Icon name="dots-horizontal" size={26} color="#efefef" />
                    </View>
                  </View>
                  <View
                    style={{flex: 1, justifyContent: 'flex-end', margin: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '700',color: '#fff'}}>
                      Counselling
                    </Text>
                    <Text style={{fontWeight: '500', color: '#fff'}}>
                        Our doors are open for a talk
                    </Text>
                  </View>
                </TouchableOpacity>
              </BoxShadow>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity style={styles.btn1}>
                  <View style={{flexDirection: 'row', flex: 1, margin: 10}}>
                    <View style={{flex: 1}}>
                    <Icon name="plus-circle" size={26} color="#ccc" />
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <Icon name="dots-horizontal" size={26} color="#ccc" />
                    </View>
                  </View>
                  <View
                    style={{flex: 1, justifyContent: 'flex-end', margin: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>
                      Prayer request?
                    </Text>
                    <Text style={{fontWeight: '500',}}>
                        Make it known to our prayer team
                    </Text>
                  </View>
                </TouchableOpacity>
              </BoxShadow>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <BoxShadow setting={shadowOpted}>
                <TouchableOpacity style={styles.btn2}>
                  <ImageBackground
                    source={require('../../assets/img/gradient.png')}
                    style={{width: width / 2.15, height: 250}}>
                    <View style={{flexDirection: 'row', flex: 1, margin: 10}}>
                      <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Icon
                          name="calendar-check-outline"
                          size={26}
                          color="#efefef"
                        />
                      </View>
                      <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Icon
                          name="dots-horizontal"
                          size={26}
                          color="#efefef"
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.btnHeadTextLight}>0</Text>
                    </View>
                    <View
                      style={{flex: 1, justifyContent: 'flex-end', margin: 20}}>
                      <Text
                        style={{
                          fontSize: 19,
                          fontWeight: '700',
                          color: '#fff',
                        }}>
                        Weekly activities
                      </Text>
                      <Text style={{fontWeight: '500', color: '#fff'}}>
                        Schedule for the week
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </BoxShadow>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity style={styles.btn1}>
                  <View style={{flexDirection: 'row', flex: 1, margin: 10}}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                      <Icon name="plus-circle" size={26} color="#569def" />
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <Icon name="dots-horizontal" size={26} color="#ccc" />
                    </View>
                  </View>
                  <View
                    style={{flex: 1, justifyContent: 'flex-end', margin: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>
                      Departments
                    </Text>
                    <Text style={{fontWeight:'200'}}>
                      You have not joined any department yet
                    </Text>
                  </View>
                </TouchableOpacity>
              </BoxShadow>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  textView: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  text_header: {
    fontWeight: '700',
    fontSize: 30,
  },
  sub_TextLight: {
    fontWeight: '300',
    color: '#fff',
  },
  btnHeadTextLight: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '700',
  },
  btnHeadTextDark: {
    fontSize: 50,
    fontWeight: '700',
  },
  sub_TextDark: {
    fontWeight: '300',
  },
  parentView: {
    flex: 5,
    alignContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  btn1: {
    width: width / 2.15,
    height: 160,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  btn4: {
    width: width / 2.15,
    height: 160,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  btn3: {
    width: width / 2.15,
    height: 160,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: '#569def',
  },
  btn2: {
    backgroundColor: '#fff',
    width: width / 2.15,
    height: 250,
    borderRadius: 20,
  },
});
