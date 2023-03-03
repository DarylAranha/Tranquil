import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native';

const data = [
    { id: 1, title: 'Happy', content: 'I am happy today!', image: require('./images/Happy.jpg') },
    { id: 2, title: 'Angry', content: 'I am angry today!', image: require('./images/Angry.jpg') },
    { id: 3, title: 'Frustrated', content: 'I am very furstrated!', image: require('./images/Frustrated.jpg') },
    { id: 4, title: 'Positive', content: 'I have some positive vibes!', image: require('./images/Positive.jpg') },
    { id: 5, title: 'Sad', content: 'This is a sad day for me!', image: require('./images/Sad.jpg..avif') },
    { id: 6, title: 'Stressed', content: 'I am very stressed!', image: require('./images/Stressed.jpg.avif') },
  ];
  
  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  
  const Card = ( props: { image: any; title: any; content: any; } ) => {
    const { image,title,content } = props;
    return (
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  };


const MoodTracking = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {

  };

  return (
    <SafeAreaView style={{flex: 1, marginLeft:-20,marginRight:-20}}>
      <Text style={styles.title} >How are you feeling today?</Text>
      <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      numColumns={numColumns}
      renderItem={({ item }) => <Card title={item.title} content={item.content} image={item.image} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal:10,
      padding: 2,
      margin: 4,
      width: (screenWidth - 18) / numColumns,
      alignItems: 'center',
    },
    image: {
        flex:1,
      height: 120,
      width: '100%',
      marginBottom: 10,
      borderRadius: 5,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 8,
    },
    content: {
      textAlign: 'center',
      marginBottom: 20,
  
    },
  });

export default MoodTracking;