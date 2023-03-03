import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const VerifyWithOTP = () => {
    const [otp, setOTP] = useState('');
  
    const handleOTPEnter = () => {
      // Handle OTP verification logic here
    };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Verify with OTP</Text>
    <Text style={styles.subtitle}>Please enter the OTP sent to your mobile number</Text>
    <View style={styles.otpContainer}>
      <TextInput
        style={styles.otpInput}
        onChangeText={text => setOTP(text + otp.slice(1))}
        maxLength={1}
      />
      <TextInput
        style={styles.otpInput}
        onChangeText={text => setOTP(otp.slice(0, 1) + text + otp.slice(2))}
        maxLength={1}
      />
      <TextInput
        style={styles.otpInput}
        onChangeText={text => setOTP(otp.slice(0, 2) + text + otp.slice(3))}
        maxLength={1}
      />
      <TextInput
        style={styles.otpInput}
        onChangeText={text => setOTP(otp.slice(0, 3) + text)}
        maxLength={1}
      />
    </View>
    <Text style={styles.resendLink}>Resend OTP</Text>
    <Text style={styles.errorText}>Incorrect OTP entered, please try again.</Text>
    <TouchableOpacity style={styles.verifyButton}>
      <Text style={styles.verifyButtonText}>Verify</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    otpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    otpInput: {
      width: 50,
      height: 50,
      marginHorizontal: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#ccc',
      fontSize: 24,
      textAlign: 'center',
    },
    resendLink: {
      marginTop: 20,
      color: 'blue',
      textDecorationLine: 'underline',
    },
    errorText: {
      color: 'red',
      marginTop: 10,
      textAlign: 'center',
    },
    verifyButton: {
      alignSelf:'stretch',
      justifyContent: 'center',
    alignItems: 'center',
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginTop: 20,
    },
    verifyButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });  

export default VerifyWithOTP;