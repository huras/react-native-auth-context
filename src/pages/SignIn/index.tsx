import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {signIn} from '../../services/auth.service';
import AuthContext from '../../contexts/auth.context';

const SignIn = () => {
  const {signed, signIn} = useContext(AuthContext);
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
