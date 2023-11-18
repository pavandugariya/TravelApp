import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {CustomHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import WavyHeader from '../../components/header/WavyHeader';
import FlipCard from '../explore_screen/FlipCard';
import {Defs, Path, Stop, Svg} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const topCardData = [
  {
    id: 0,
    place: 'GOA',
    time: '3 weeks',
    info: 'Explore GOA with amazing discounts, book your adventure today!',
    img: require('../../assets/images/cardimg.png'),
    percent: '10%',
  },
  {
    id: 2,
    place: 'Andanman & Nicobar',
    time: '6 weeks',
    info: 'Explore Andaman and Nicobar Islands with amazing discounts, book your adventure today!',
    img: require('../../assets/images/cardimg2.png'),
    percent: '25%',
  },
  {
    id: 3,
    place: 'Udaipur',
    time: '2 weeks',
    info: 'Explore Udaipur city of lakes with amazing discounts, book your adventure today!',
    percent: '15%',
    img: require('../../assets/images/cardimg3.png'),
  },
];
const bottomCardData = [
  {
    id: 0,
    place: 'GOA',
    img: require('../../assets/images/cardimg.png'),
  },
  {
    id: 2,
    place: 'AGRA',
    img: require('../../assets/images/agra.png'),
  },
  {
    id: 3,
    place: 'Udaipur',
    img: require('../../assets/images/cardimg3.png'),
  },
];
const Home = () => {
  let user = {
    age: undefined,
  };
  let userAge = user.age ?? 'Not Available'; // nullish coaliscing operator ??
  // console.log(5 || 6, 5 && 6);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={80}
        customTop={60}
        customBgColor="#5000ca"
        customWavePattern="M0,288L48,277.3C96,267,192,245,288,213.3C384,181,480,139,576,138.7C672,139,768,181,864,208C960,235,1056,245,1152,240C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      /> */}

      <CustomHeader />
      <StatusBar hidden={false} backgroundColor={'#fff'} animated={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search_top_container}>
          <Icon name="search" size={30} color={'#4b4b4b'} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#4b4b4b'}
            style={styles.text_input}
          />
        </View>

        <View style={styles.welcome_container}>
          <Text style={styles.welcome_text_style}>Welcome</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.see_all_text}>See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.welcome_bottom_text}>
            Get discount on all time favourite destinations
          </Text>
        </View>
        <View>
          <FlatList
            data={topCardData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.card_container}>
                <Image style={styles.bg_image_style} source={item.img} />
                <View style={styles.bottom_contianer}>
                  <View style={styles.card_top_container}>
                    <View style={styles.percentage_box}>
                      <Text style={styles.percentage_text_style}>
                        {item?.percent}
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Icon
                        name={'heart-outline'}
                        size={25}
                        color={'#ffffffb4'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bottom_text_container}>
                    <Text style={styles.place_text_style}>{item?.place}</Text>
                    <Text style={styles.weeks_text_style}>{item?.time}</Text>
                    <Text style={styles.description_text_style}>
                      {item?.info}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <View style={[styles.welcome_container]}>
            <Text style={styles.welcome_text_style}>All time favourite</Text>
            <Text style={styles.see_all_text}>See all</Text>
          </View>

          <Text style={styles.welcome_bottom_text}>
            Wanna go on a trip today !
          </Text>
        </View>
        {/* // bottom card  */}
        <View>
          <FlatList
            data={bottomCardData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PlaceScreen', item);
                }}
                style={styles.card_container}>
                <Image style={styles.bg_image_style} source={item.img} />
                <View style={styles.bottom_contianer}>
                  <View
                    style={[
                      styles.card_top_container,
                      {justifyContent: 'flex-end'},
                    ]}>
                    <TouchableOpacity>
                      <Icon
                        name={'heart-outline'}
                        size={25}
                        color={'#ffffffb4'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bottom_text_container}>
                    <Text style={styles.place_text_style}>{item?.place}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <FlipCard />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  search_top_container: {
    width: '100%',
    height: 48,
    borderRadius: 92,
    paddingHorizontal: 20,
    backgroundColor: '#CBCCCF',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text_input: {
    flex: 1,
    fontSize: 20,
  },
  welcome_container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
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
  welcome_bottom_text: {
    width: 231,
    fontSize: 14,
    color: '#0D1118',
  },
  percentage_box: {
    backgroundColor: '#0047B8',
    width: 47,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  percentage_text_style: {
    color: '#fff',
    fontSize: 14,
  },
  card_top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  place_text_style: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
  },
  weeks_text_style: {
    fontSize: 14,
    zIndex: 1,
    color: '#fff',
  },
  description_text_style: {
    fontSize: 8,
    zIndex: 1,
    color: '#fff',
  },
  bottom_text_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  card_container: {
    width: 167,
    height: 197,
    borderRadius: 17,
    marginRight: 15,
    margin: 10,
  },
  bottom_contianer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 10,
    borderRadius: 17,
    backgroundColor: '#0000001b',
  },
  bg_image_style: {
    width: '100%',
    height: '100%',
    borderRadius: 17,
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
});
