import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';
const ConfirmBooking = props => {
  let Info = <Icons name={'info-circle'} size={30} color={'#000'} />;
  return (
    <ImageBackground
      style={StyleSheet.absoluteFillObject}
      source={require('../../assets/images/flight.png')}>
      <View style={styles.container}>
        <BackHeader />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 550,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          padding: 20,
          paddingTop: 40,
        }}>
        <Image
          style={{alignSelf: 'center', marginBottom: 40}}
          source={require('../../assets/images/indigo.png')}
        />
        <View style={styles.flex_direction}>
          <Text style={styles.departure_text}>DEPARTURE :</Text>
          <Text style={styles.departure_text}>TIME:</Text>
        </View>
        <View style={styles.flex_direction}>
          <Text style={styles.departure1_text}>NEW DELHI</Text>
          <Text style={styles.departure1_text}>6:00 AM</Text>
        </View>
        <View style={{alignSelf: 'center', marginVertical: 20}}>
          <Icon name={'swap-vertical'} size={40} color={'#003282'} />
        </View>
        <View style={styles.flex_direction}>
          <Text style={styles.departure_text}>ARRIVAL :</Text>
          <Text style={styles.departure_text}>TIME:</Text>
        </View>
        <View style={styles.flex_direction}>
          <Text style={styles.departure1_text}>GOA</Text>
          <Text style={styles.departure1_text}>11:00 AM</Text>
        </View>

        <View style={[styles.flex_direction, {marginTop: 20}]}>
          <Text style={styles.departure_text}>DATE OF DEPARTURE</Text>
          <Text style={styles.departure_text}>DATE OF ARRIVAL</Text>
        </View>
        <View style={styles.flex_direction}>
          <Text style={[styles.departure1_text, {color: '#003282'}]}>
            20 OCT 2023
          </Text>
          <Text style={[styles.departure1_text, {color: '#003282'}]}>
            20 OCT 2023
          </Text>
        </View>
        <View style={{alignItems: 'center', marginVertical: 10}}>{Info}</View>
        <Text style={{fontSize: 12, color: '#0d1118'}}>
          Save up to 2000 rupees on your flight when you book today! Don't miss
          out on this exclusive offer.
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button_container}>
          <Text style={{color: '#fff', fontSize: 14}}>BOOK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ConfirmBooking;

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
  flex_direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  departure_text: {
    color: '#0d1118',
    fontSize: 14,
    marginVertical: 5,
  },
  departure1_text: {
    color: '#0d1118',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button_container: {
    backgroundColor: '#0047B8',
    height: 42,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
