// Controla qual stack de rotas esta disponviel

import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import {useAuth} from '../contexts/auth.context';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#f02" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
