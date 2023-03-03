import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tranquil</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.loginLink}>
        <Text style={styles.loginLinkText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.loginLinkButton}>Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    //width: '100%',
    height: 50,
    alignSelf: 'stretch', 
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    //width: '100%',
    height: 50,
    borderRadius: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginLink: {
    flexDirection: 'row',
  },
  loginLinkText: {
    fontSize: 16,
    marginRight: 5,
  },
  loginLinkButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default SignUpPage;