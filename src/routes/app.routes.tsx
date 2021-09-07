import HomeScreen from '../pages/HomeScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomeScreen} />
  </AppStack.Navigator>
);

export default AppRoutes;