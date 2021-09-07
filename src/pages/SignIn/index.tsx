import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {signIn} from '../../services/auth.service';

const SignIn = () => {
  function handleSignIn() {
    signIn().then(response => {
      console.log(response);
    });
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
