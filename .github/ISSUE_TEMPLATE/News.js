import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Header';

const News = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAboutUsPress = () => {
    navigation.navigate('AboutUs');
  };

  return (
    <View style={styles.container}>
    <Header/>
      <View style={styles.header}>
        <TouchableOpacity style={styles.aboutButtonContainer} onPress={handleAboutUsPress}>
          <Text style={styles.aboutButtonText}>About Us</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.newsContainer}>
          {/* Display News Data */}
          <Text>News 1</Text>
          <Text>News 2</Text>
          <Text>News 3</Text>
          <Text>News 4</Text>
          <Text>News 5</Text>
          {/* ... */}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
    justifyContent: 'space-between',
  },
  backButton: {
    paddingLeft: 10, // Change paddingRight to paddingLeft
  },
  backArrow: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'green',
  },
  aboutButtonContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
    marginRight: 12,
  },
  aboutButtonText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  newsContainer: {
    padding: 10,
  },
});

export default News;