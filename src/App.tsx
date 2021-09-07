import {NavigationContainer} from '@react-navigation/native';

import React, { useState } from 'react';

import Routes from './routes';

import {AuthProvider} from './contexts/auth.context';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes></Routes>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
