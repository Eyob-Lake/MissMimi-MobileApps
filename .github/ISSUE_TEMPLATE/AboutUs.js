import React from 'react';
import Header from '../Header';
import { View, Text, Image, StyleSheet } from 'react-native';
const AboutUs = () => {
  return (
    <View style={styles.container}>
    <Header/>
      <View style={styles.content}>
        <Text style={styles.aboutText}>
          Miss Mimi Tutorial Center is a leading educational institution committed to providing high-quality tutoring services. Our experienced instructors and comprehensive curriculum ensure that students receive the best learning opportunities. We offer a wide range of courses to help students excel academically and achieve their goals. Join us today and experience the difference at Miss Mimi Tutorial Center.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    flex: 2,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: 'white',
    position: 'relative',
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  aboutText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AboutUs;