import {
  Animated,
  Dimensions,
  FlatList,
  ImageBackground,
  ProgressBarAndroid,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
const width = Dimensions.get('window').width;
let onboardData = [
  {
    id: 0,
    img: require('../../assets/images/onboardone.png'),
    title: 'Welcome to Explore Mate App',
    decription: 'All your vacation destination are here, enjoy your holiday',
  },
  {
    id: 2,
    img: require('../../assets/images/onboardtwo.png'),
    title: 'Simple Way To Travel The World  ',
    decription:
      'Find thousands of tourist destinations, ready for you to visit',
  },
  {
    id: 3,
    img: require('../../assets/images/onboardthree.png'),
    title: 'Let’s Enjoy Your Vacations!',
    decription:
      'Travel around the world with your friends and create unforgettable moments',
  },
];
const Onboarding = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < onboardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <FlatList
        onScroll={handleOnScroll}
        ref={flatListRef}
        horizontal={true}
        pagingEnabled={true}
        data={onboardData}
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setCurrentIndex(newIndex);
        }}
        renderItem={({item}) => {
          return (
            <ImageBackground
              style={styles.onboard_img_style}
              // blurRadius={1}
              source={item?.img}>
              <View
                style={[
                  styles.containt_top_container,
                  {
                    justifyContent:
                      currentIndex === 0 ? 'flex-start' : 'flex-end',
                    marginBottom: 180,
                  },
                ]}>
                <View style={{}}>
                  <Text style={styles.title_text_style}>{item?.title}</Text>
                  <Text style={styles.description_text}>
                    {item?.decription}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#0000003b',
                  zIndex: 1,
                }}
              />
            </ImageBackground>
          );
        }}
      />
      <View style={styles.bottom_top_container}>
        <View style={styles.dot_top_container}>
          {onboardData.map((_i, idx) => {
            const inputRange = [
              (idx - 1) * width,
              idx * width,
              (idx + 1) * width,
            ];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [12, 30, 12],
              extrapolate: 'clamp',
            });

            const backgroundColor = scrollX.interpolate({
              inputRange,
              outputRange: ['#fff', '#0047B8', '#fff'],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={idx}
                style={[
                  styles.dot_container,
                  {width: dotWidth, backgroundColor},
                ]}
              />
            );
          })}
        </View>
        <View style={styles.bottom_container}>
          <TouchableOpacity onPress={handleNext} style={styles.bottom_btn}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MyTabs')}
            style={styles.get_start_btn}>
            <Text style={styles.get_started_text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  onboard_img_style: {
    width: width,
    height: '100%',
  },

  bottom_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 314,

    height: 52,
  },
  bottom_btn: {},
  skip_text: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  get_started_text: {
    fontSize: 22,
    color: '#fff',
  },
  get_start_btn: {
    backgroundColor: '#0047B8',
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  title_text_style: {
    fontSize: 42,
    color: '#fff',
    width: 310,
    zIndex: 2,
    fontWeight: 'bold',
  },
  description_text: {
    width: '75%',
    color: '#fff',
    fontSize: 17,
    zIndex: 2,
    marginTop: 20,
  },
  containt_top_container: {
    flex: 1,
    padding: 20,
    zIndex: 2,
  },
  dot_container: {
    width: 10,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  bottom_top_container: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  dot_top_container: {
    alignSelf: 'center',
    marginBottom: 40,
    flexDirection: 'row',
    gap: 5,
  },
});
