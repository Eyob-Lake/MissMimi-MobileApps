import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStack from './NavigationStack';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
  );
};

export default App;