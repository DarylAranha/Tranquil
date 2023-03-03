import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pages = [
    {
      title: 'Welcome To Tranquil',
      description: 'We are here to help you improve your mental wellbeing.',
      // image: require('./images/onboarding-1.png'),
    },
    {
      title: 'Get Personalized Recommendations',
      description: 'Our app uses advanced algorithms to suggest the best ways to improve your mental health.',
     // image: require('./images/onboarding-2.png'),
    },
    {
      title: 'Track Your Progress',
      description: 'Keep track of your progress and see how far you have come.',
     // image: require('./images/onboarding-3.png'),
    },
  ];

  const handleNextPress = () => {
    setPageIndex(pageIndex + 1);
  };

  return (
    <View style={styles.container}>
      <Image source={pages[pageIndex].image} style={styles.image} />
      <Text style={styles.title}>{pages[pageIndex].title}</Text>
      <Text style={styles.description}>{pages[pageIndex].description}</Text>
      {pageIndex === pages.length - 1 ? (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '80%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 40,
  },
  button: {
    //width: '80%',
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#3f51b5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    justifyContent: 'center',
    color: '#ffffff',
    alignItems:'center',
    fontSize: 18,
  },
});

export default OnboardingPage;
