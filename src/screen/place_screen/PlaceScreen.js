/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BackHeader} from '../../components';
import {useRoute} from '@react-navigation/native';
const width = Dimensions.get('screen').width;
const PlaceScreen = () => {
  const {params} = useRoute();
  const [tabIndex, setTabIndex] = useState('0');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} hidden={true} />
      <ImageBackground
        source={require('../../assets/images/tajmahal.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={{padding: 20}}>
          <BackHeader />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              padding: 20,
              backgroundColor: '#fff',
              minHeight: 500,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}>
            <Text style={styles.place_name_text}>{params?.place}</Text>
            <View style={{gap: 10, marginVertical: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 5,
                }}>
                <TouchableOpacity onPress={() => setTabIndex('0')}>
                  <Text
                    style={[
                      styles.tab_text_style,
                      {color: tabIndex === '0' ? '#0D1118' : '#636363'},
                    ]}>
                    About
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTabIndex('1')}>
                  <Text
                    style={[
                      styles.tab_text_style,
                      {color: tabIndex === '1' ? '#0D1118' : '#636363'},
                    ]}>
                    Review
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTabIndex('2')}>
                  <Text
                    style={[
                      styles.tab_text_style,
                      {color: tabIndex === '2' ? '#0D1118' : '#636363'},
                    ]}>
                    Photo
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#D9D9D9',
                  alignItems:
                    tabIndex === '0'
                      ? 'flex-start'
                      : tabIndex === '1'
                      ? 'center'
                      : 'flex-end',
                }}>
                <View
                  style={{
                    backgroundColor: '#0047B8',
                    width: width / 3,
                    padding: 5,
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            {tabIndex === '0' && (
              <View style={{flex: 1}}>
                <ScrollView>
                  <Text style={styles.description_text}>
                    Agra is a city in northern India's Uttar Pradesh state. It's
                    known for the Taj Mahal, one of the Seven Wonders of the
                    World. The Taj Mahal is a mausoleum built by the Mughal
                    emperor Shah Jahan in memory of his favorite wife, Mumtaz
                    Mahal. Agra is also home to other significant Mughal-era
                    buildings such as the Agra Fort and Fatehpur Sikri, which
                    are UNESCO World Heritage sites.{' '}
                  </Text>
                  <View style={[styles.welcome_container]}>
                    <Text style={styles.welcome_text_style}>
                      Travel Packages
                    </Text>
                    <Text style={styles.see_all_text}>See all</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      flexWrap: 'wrap',
                    }}>
                    {[1, 2, 3, 4].map((_i, index) => {
                      return (
                        <View key={index} style={styles.card_top_container}>
                          <Image
                            style={{
                              width: '100%',
                              height: 109,
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            }}
                            source={require('../../assets/images/hotelAgra.png')}
                          />
                          <View
                            style={{
                              flex: 1,
                              borderBottomLeftRadius: 16,
                              borderBottomRightRadius: 16,
                              backgroundColor: '#fff',
                              justifyContent: 'flex-end',
                              padding: 10,
                            }}>
                            <Text style={styles.hotel_name_text}>
                              Double Tree Hilton - Agra
                            </Text>
                            <Text style={styles.hotel_activity_text}>
                              Hotel Activities Flight
                            </Text>
                            <View style={styles.bottom_item}>
                              <Text style={styles.price_text_style}>
                                <Text style={{fontWeight: 'bold'}}>7,849 </Text>
                                per person
                              </Text>
                              <View
                                style={{
                                  backgroundColor: '#0047B8',
                                  borderRadius: 6,
                                  paddingHorizontal: 8,
                                  padding: 4,
                                }}>
                                <Text style={styles.rating_text_style}>
                                  4/5
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            )}
            {tabIndex === '1' && (
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    marginVertical: 20,
                  }}>
                  No Review found
                </Text>
              </View>
            )}
            {tabIndex === '2' && (
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    marginVertical: 20,
                  }}>
                  photo is not available
                </Text>
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  place_name_text: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tab_text_style: {
    color: '#0D1118',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  description_text: {
    color: '#52575F',
    fontSize: 14,
    marginTop: 20,
  },
  welcome_container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  welcome_text_style: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  see_all_text: {
    fontSize: 14,
    color: '#0047B8',
    textDecorationLine: 'underline',
  },
  card_top_container: {
    width: 167,
    height: 197,
    marginVertical: 10,
    backgroundColor: '#ffffffb8',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  hotel_name_text: {
    color: '#0D1118',
    fontSize: 11,
    fontWeight: 'bold',
  },
  hotel_activity_text: {
    color: '#0D1118',
    fontSize: 11,
  },
  bottom_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price_text_style: {
    color: '#0D1118',
    fontSize: 11,
  },
  rating_text_style: {
    color: '#fff',
    fontSize: 10,
  },
});
