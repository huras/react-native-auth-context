import React from 'react';
import {View, Text, Button} from 'react-native';

import {useAuth} from '../../contexts/auth.context';

const HomeScreen = () => {
  const {user, signOut} = useAuth();

  function hangleSignOut() {
    signOut();
  }

  return (
    <View>
      <Text>Bem vindo {user?.name}! </Text>
      <Button title="sign out" onPress={hangleSignOut} />
    </View>
  );
};

export default HomeScreen;
