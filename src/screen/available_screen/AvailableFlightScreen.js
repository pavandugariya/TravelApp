import {
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const AvailableFlightScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={StyleSheet.absoluteFillObject}
      source={require('../../assets/images/flight.png')}>
      <View style={styles.container}>
        <BackHeader />
        <Text style={styles.header_text}>Available Flights</Text>

        <TouchableOpacity style={styles.filter_container}>
          <Icon name={'filter-circle-outline'} size={20} color={'#000'} />
          <Text style={styles.filter_text_style}>Filter</Text>
        </TouchableOpacity>
        {/* card  */}
        <FlatList
          data={[1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={styles.card_container}>
              <View style={styles.card_top_container}>
                <Text style={styles.flight_name_text}>IndiGo</Text>
                <Icon name={'heart-outline'} color={'#000080'} size={20} />
              </View>
              <View style={[styles.card_top_container, {marginVertical: 20}]}>
                <Text style={styles.start_place_name}>NEW DELHI</Text>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: '#000',
                      marginHorizontal: 10,
                      borderStyle: 'dashed',
                    }}
                  />
                  <View style={styles.airplane_top_container}>
                    <Icon name={'airplane'} color={'#0d1118'} size={20} />
                  </View>
                </View>
                <Text style={styles.start_place_name}>GOA</Text>
              </View>

              <View style={[styles.bottom_container, {marginBottom: 5}]}>
                <Text style={styles.text_style}>
                  Time{'      :  '}Dep{' '}
                  <Text style={{color: '#0047B8'}}>6:00AM</Text>
                </Text>
                <Text style={styles.text_style}>
                  ARP <Text style={{color: '#0047B8'}}>11:00AM</Text>
                </Text>
              </View>
              <View style={styles.bottom_container}>
                <Text style={styles.text_style}>
                  AMT{'      :  '}2000 Repees{' '}
                  <Text style={{color: '#0047B8'}}>[30% OFF]</Text>
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ConfirmBooking')}
                style={styles.button_container}>
                <Text style={{color: '#fff', fontSize: 14}}>BOOK</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default AvailableFlightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header_text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0D1118',
    marginVertical: 10,
  },
  filter_text_style: {
    fontSize: 11,
    color: '#0D1118',
  },
  filter_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    alignSelf: 'flex-end',
  },
  card_container: {
    width: '100%',
    // height: 181,
    borderRadius: 18,
    backgroundColor: '#fff',
    marginTop: 20,
    alignSelf: 'center',
    elevation: 1,
    padding: 20,
  },
  card_top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flight_name_text: {
    color: '#000080',
    fontSize: 18,
  },
  start_place_name: {
    color: '#0D1118',
    fontSize: 14,
  },
  airplane_top_container: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: -12,
    borderRadius: 50,
    padding: 2,
    backgroundColor: '#c5cdd1',
  },
  bottom_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_style: {
    fontSize: 11,
    color: '#0D1118',
  },
  button_container: {
    backgroundColor: '#0047B8',
    height: 25,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
