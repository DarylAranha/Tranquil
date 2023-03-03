import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Journaling = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >Journaling</Text>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>23 Feb</Text>
          <Text style={styles.subtitle}>Monday</Text>
          <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet mauris in lectus consequat dictum sed ut enim.</Text>
        </View>
      </View>
      <View style={styles.card}>    
        <View style={styles.cardContent}>
          <Text style={styles.title}>24 Feb</Text>
          <Text style={styles.subtitle}>Tuesday</Text>
          <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet mauris in lectus consequat dictum sed ut enim.</Text>
        </View>
      </View>
      <View style={styles.card}>    
        <View style={styles.cardContent}>
          <Text style={styles.title}>25 Feb</Text>
          <Text style={styles.subtitle}>Wednesday</Text>
          <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet mauris in lectus consequat dictum sed ut enim.</Text>
        </View>
      </View>
      <View style={styles.card}>    
        <View style={styles.cardContent}>
          <Text style={styles.title}>26 Feb</Text>
          <Text style={styles.subtitle}>Thursday</Text>
          <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet mauris in lectus consequat dictum sed ut enim.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding:10,

    
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',marginBottom:10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Journaling;