import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StactNavigator} from './src/navigation';
import {ThemeProvider} from './src/context';
import {primaryColors} from './src/styles/global';

const App = () => {
  return (
    <ThemeProvider initialColor="light" primaryColors={primaryColors}>
      <NavigationContainer>
        <StactNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
