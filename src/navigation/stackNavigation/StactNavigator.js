import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AvailableFlightScreen,
  Camera,
  ConfirmBooking,
  Home,
  Onboarding,
  PlaceScreen,
  SplashScreen,
} from '../../screen';
import MyTabs from '../bottomNavigation/BottomNavigator';

const Stack = createNativeStackNavigator();

const StactNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
      <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen
        name="AvailableFlightScreen"
        component={AvailableFlightScreen}
      />
    </Stack.Navigator>
  );
};

export default StactNavigator;
