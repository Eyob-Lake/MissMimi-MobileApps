import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../Header';

const CEOHomePage = () => {
  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => navigateToPage('ViewStudent')}>
          <Image source={require('../assets/totstud.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>View Student</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigateToPage('ViewStuff')}>
          <Image source={require('../assets/totemploy.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>View Staff</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigateToPage('InstructorReport')}>
          <Image source={require('../assets/Repo.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>View Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigateToPage('ParentComment')}>
          <Image source={require('../assets/com.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>View Parent Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigateToPage('TeacherComment')}>
          <Image source={require('../assets/com.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>View Teacher Comment</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#dcdcdc',
    height: 70,
    borderRadius:20,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CEOHomePage;