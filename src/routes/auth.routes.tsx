import SignIn from '../pages/SignIn';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
