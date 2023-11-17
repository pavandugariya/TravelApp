/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ExploreScreen,
  Home,
  MapScreen,
  TripsScreen,
  WeatherScreen,
} from '../../screen';
import React from 'react';
import {Animated, Easing, Image, StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const rotationValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 500, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [rotationValue]);

  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const middleTabStyle = {
    transform: [{rotate: rotateInterpolate}],
    elevation: 1, // For Android (remove shadow)
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#CBCDCF',
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Animated.View
                style={[
                  styles.tabIcon,
                  {
                    backgroundColor: focused ? '#b5ade6' : 'transparent',
                    bottom: focused ? 30 : 10,
                  },
                  focused && middleTabStyle,
                ]}>
                <Image
                  tintColor={focused ? '#0047B8' : '#000'}
                  source={require('../../assets/icons/home.png')}
                />
              </Animated.View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={[
                styles.tabIcon,
                {
                  backgroundColor: focused ? '#b5ade6' : 'transparent',
                  bottom: focused ? 30 : 10,
                },
                focused && middleTabStyle,
              ]}>
              <Image
                source={require('../../assets/icons/explore.png')}
                tintColor={focused ? '#0047B8' : '#000'}
              />
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="TripsScreen"
        component={TripsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Animated.View
                style={[
                  styles.tabIcon,
                  {
                    backgroundColor: focused ? '#b5ade6' : 'transparent',
                    bottom: focused ? 30 : 10,
                  },
                  focused && middleTabStyle,
                ]}>
                <Image
                  source={require('../../assets/icons/trip.png')}
                  tintColor={focused ? '#0047B8' : '#000'}
                />
              </Animated.View>
              {focused && (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    zIndex: 1,
                    position: 'absolute',
                    bottom: 8,
                    left: '25%',
                  }}
                  source={{
                    uri: 'https://media.tenor.com/8McIGu0Tf_QAAAAi/fire-joypixels.gif',
                  }}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Discount"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={[
                styles.tabIcon,
                {
                  backgroundColor: focused ? '#b5ade6' : 'transparent',
                  bottom: focused ? 30 : 10,
                },
                focused && middleTabStyle,
              ]}>
              <Image
                source={require('../../assets/icons/discount.png')}
                tintColor={focused ? '#0047B8' : '#000'}
              />
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={[
                styles.tabIcon,
                {
                  backgroundColor: focused ? '#b5ade6' : 'transparent',
                  bottom: focused ? 30 : 10,
                },
                focused && middleTabStyle,
              ]}>
              <Image
                source={require('../../assets/icons/weather.png')}
                tintColor={focused ? '#0047B8' : '#000'}
              />
            </Animated.View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 20,
    backgroundColor: 'transparent', // Set as per your design
    elevation: 0, // For Android (remove shadow)
  },
  tabIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
