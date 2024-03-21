import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../Header';

const ParentHomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Parent Home" />

      {/* Content */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Payment')}
        >
          <Image
            source={require('../assets/pay.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonTextRight}>Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ParentComment')}
        >
          <Image
            source={require('../assets/com.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonTextLeft}>Communication</Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/stud3.png')}
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
    alignItems: 'left',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 16,
    backgroundColor: '#a9a9a9',
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
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default ParentHomePage;