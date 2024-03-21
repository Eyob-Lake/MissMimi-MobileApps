import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../Header';

const StudentHomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Student Home" />

      {/* Content */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
          <Image
            source={require('../assets/tech1.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonTextRight}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SMaterial')}>
          <Image
            source={require('../assets/Mat1.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonTextLeft}>Material</Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/stud4.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#a9a9a9',
    height: 80,
    borderRadius: 20,
  },
  buttonIcon: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  buttonTextRight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 8,
  },
  buttonTextLeft: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 8,
  },
  image: {
    width: '99%',
    height: 420,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default StudentHomePage;