import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Journaling from './Journaling';
//import MoodTracking from './Mood';
import OnboardingPage from './Onboarding';
//import OtpPage from './Otp';
//import VerifyWithOTP from './VerifyWithOTP';
//import SignUpPage from './SignUp';
//import LoginPage from './LoginPage';



export default function App() {
  return (
    <View style={styles.container}>
    <OnboardingPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
