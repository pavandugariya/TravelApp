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
} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const countriesList = [
  {
    name: 'India',
    image_url: 'https://source.unsplash.com/100x100/?india',
  },
  {
    name: 'United States',
    image_url: 'https://source.unsplash.com/100x100/?usa',
  },
  {
    name: 'United Kingdom',
    image_url: 'https://source.unsplash.com/100x100/?uk',
  },
  {
    name: 'Germany',
    image_url: 'https://source.unsplash.com/100x100/?germany',
  },
  {
    name: 'France',
    image_url: 'https://source.unsplash.com/100x100/?france',
  },
  {
    name: 'Canada',
    image_url: 'https://source.unsplash.com/100x100/?canada',
  },
  {
    name: 'Australia',
    image_url: 'https://source.unsplash.com/100x100/?australia',
  },
  {
    name: 'China',
    image_url: 'https://source.unsplash.com/100x100/?china',
  },
  {
    name: 'Brazil',
    image_url: 'https://source.unsplash.com/100x100/?brazil',
  },

  {
    name: 'Japan',
    image_url: 'https://source.unsplash.com/100x100/?japan',
  },
];

const bottomCardData = [
  {
    name: 'Mountend',
    image_url: 'https://source.unsplash.com/200x200/?adventure',
    percent: '10%',
    time: '3 weeks',
  },
  {
    name: 'Paragliding',
    image_url: 'https://source.unsplash.com/200x200/?explore',
    percent: '10%',
    time: '3 weeks',
  },
  {
    name: 'Hiking',
    image_url: 'https://source.unsplash.com/200x200/?outdoor',
    percent: '10%',
    time: '3 weeks',
  },
  {
    name: 'Rafting',
    image_url: 'https://source.unsplash.com/200x200/?nature',
    percent: '10%',
    time: '3 weeks',
  },
  {
    name: 'Backpack',
    image_url: 'https://source.unsplash.com/200x200/?hiking',
    time: '3 weeks',
    percent: '10%',
  },
];

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search_top_container}>
          <Icon name="search" size={30} color={'#4b4b4b'} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#4b4b4b'}
            style={styles.text_input}
          />
        </View>

        <Text style={styles.welcome_text_style}>Explore Countries</Text>
        <View>
          <Text style={styles.welcome_bottom_text}>
            Explore different countries in your budget
          </Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            data={countriesList}
            showsHorizontalScrollIndicator={true}
            renderItem={({item}) => {
              return (
                <View style={styles.country_top_contianer}>
                  <Image
                    style={styles.country_img_style}
                    source={{uri: item.image_url}}
                  />
                  <Text style={{color: '#000'}}>{item?.name}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.welcome_container}>
          <Text style={styles.welcome_text_style}>Adventure</Text>
          <Text style={styles.see_all_text}>See all</Text>
        </View>
        <View>
          <Text style={styles.welcome_bottom_text}>
            Different adventure trips !
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {bottomCardData?.map((item, index) => {
            return (
              <View key={index} style={styles.card_container}>
                <Image
                  style={{width: '100%', height: '100%', borderRadius: 17}}
                  source={{uri: item?.image_url}}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: 17,
                    backgroundColor: '#0000002a',
                    padding: 10,
                  }}>
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
                    <Text style={styles.place_text_style}>{item?.name}</Text>
                    <Text style={styles.weeks_text_style}>{item?.time}</Text>
                    <Text style={styles.description_text_style}>
                      {item?.info}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;

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
  country_img_style: {
    width: 76,
    height: 76,
    borderRadius: 76,
    borderWidth: 1.5,
    borderColor: '#0047B8',
  },
  country_top_contianer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  card_container: {
    width: 167,
    height: 197,
    borderRadius: 17,
    backgroundColor: '#fff',
    elevation: 1,
    marginVertical: 5,
  },
  card_top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  bottom_text_container: {
    flex: 1,
    justifyContent: 'flex-end',
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
});
