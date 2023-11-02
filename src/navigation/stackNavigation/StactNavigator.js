import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Onboarding, SplashScreen} from '../../screen';

const Stack = createNativeStackNavigator();

const StactNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StactNavigator;
