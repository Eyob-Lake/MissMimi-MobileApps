import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../Header';

const InstructorHomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Instructor Home" />

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InstructorReport')}>
            <Image
              source={require('../assets/Repo.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InstructorTeacher')}>
            <Image
              source={require('../assets/tech.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Teacher</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InstaructorMaterial')}>
            <Image
              source={require('../assets/mat2.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Material</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InstructorReplyRequest')}>
            <Image
              source={require('../assets/req.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Reply Request</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    borderRadius: 20,
    height: 70,
    paddingHorizontal: 16,
  },
  buttonIcon: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 8,
  },
});

export default InstructorHomePage;