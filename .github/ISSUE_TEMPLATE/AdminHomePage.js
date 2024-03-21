import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Header from '../Header';

const AdminHomePage = () => {
  const [isStudentPageEnabled, setStudentPageEnabled] = useState(false);
  const [isCommunicationPageEnabled, setCommunicationPageEnabled] = useState(false);

  const handleToggleStudentPage = () => {
    setStudentPageEnabled(!isStudentPageEnabled);
  };

  const handleToggleCommunicationPage = () => {
    setCommunicationPageEnabled(!isCommunicationPageEnabled);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Admin Home Page" />

      <View style={styles.containerHeader}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Student')}>
            <Image
              source={require('../assets/stud.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.buttonText}>Register Student</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AsighnRole')}>
            <Image
              source={require('../assets/role.png')}
              style={{
                width: 70,
                height: 70,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.buttonText}>Assign Role</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stuff')}>
            <Image
              source={require('../assets/stuff.png')}
              style={{
                width: 70,
                height: 70,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.buttonText}>Register Staff</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
            <Image
              source={require('../assets/pay.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.buttonText}>View Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Respt')}>
            <Image
              source={require('../assets/self.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.buttonText}>Respt</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Exam')}>
            <Image
              source={require('../assets/exam.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.buttonText}>Exam</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ParentComment')}>
            <Image
              source={require('../assets/com.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.buttonText}>Write Parent Comment</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Request')}>
            <Image
              source={require('../assets/req.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.buttonText}>Ask Request</Text>
          </TouchableOpacity>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>StudPage:</Text>
            <Switch
              trackColor={{ false: 'grey', true: 'green' }}
              thumbColor={isStudentPageEnabled ? 'white' : 'white'}
              onValueChange={handleToggleStudentPage}
              value={isStudentPageEnabled}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Com Page:</Text>
            <Switch
              trackColor={{ false: 'grey', true: '#8fbc8f' }}
             thumbColor={isCommunicationPageEnabled ? 'white' : 'white'}
              onValueChange={handleToggleCommunicationPage}
              value={isCommunicationPageEnabled}
            />
          </View>
        </View>
      </View>

      <View style={styles.imageContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    padding: 10,
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    marginHorizontal: 3,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  switchText: {
    marginRight: 10,
    color: 'green',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default AdminHomePage;