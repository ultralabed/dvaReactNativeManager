import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'dva/mobile';
import { Card, CardSection, Input, Button, Spinner } from './common';

const LoginForm = ({ dispatch, loginLoading, error, email, password }) => {
  const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    },
  };

  return (
    <Card>
      <CardSection>
        <Input 
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={(value) => dispatch({ type: 'auth/userEmail', payload: value })}
          value={email}
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="********"
          onChangeText={(value) => dispatch({ type: 'auth/userPassword', payload: value })}
          value={password}
        />
      </CardSection>
      <Text style={styles.errorTextStyle}>
        {error}
      </Text>
      <CardSection>
        {loginLoading ? 
          <Spinner size="large" />
          :
          <Button onPress={() => dispatch({ type: 'auth/loginUser' })}>
            Login
          </Button>
        }
      </CardSection>
    </Card>
  );
};

const mapStateToProps = ({ auth }) => {
  const { loginLoading, error, email, password } = auth;
  return {
    loginLoading,
    error,
    email,
    password,
  };
}

export default connect(mapStateToProps)(LoginForm);
