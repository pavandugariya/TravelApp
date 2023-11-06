import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ExploreScreen,
  Home,
  MapScreen,
  TripsScreen,
  WeatherScreen,
} from '../../screen';
import React from 'react';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#CBCDCF',
          height: 72,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              tintColor={focused ? '#0047B8' : '#000'}
              source={require('../../assets/icons/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/explore.png')}
              tintColor={focused ? '#0047B8' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TripsScreen"
        component={TripsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/trip.png')}
              tintColor={focused ? '#0047B8' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discount"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/discount.png')}
              tintColor={focused ? '#0047B8' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/weather.png')}
              tintColor={focused ? '#0047B8' : '#000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
