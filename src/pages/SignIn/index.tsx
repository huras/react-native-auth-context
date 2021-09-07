import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth.context';

const SignIn = () => {
  const {signed, signIn} = useAuth();
  console.log(signed);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignIn;
