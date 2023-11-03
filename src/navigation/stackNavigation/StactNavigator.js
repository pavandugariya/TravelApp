import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Onboarding, PlaceScreen, SplashScreen} from '../../screen';
import MyTabs from '../bottomNavigation/BottomNavigator';

const Stack = createNativeStackNavigator();

const StactNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
    </Stack.Navigator>
  );
};

export default StactNavigator;
