import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';

const TeacherHomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Teacher Home" />

      <View style={styles.containerHeader}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TeacherReport')}
        >
          <Image
            source={require('../assets/inter.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Report</Text>
          <AntDesign name="right" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TeacherAttendance')}
        >
          <Image
            source={require('../assets/Attn.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Attendance</Text>
          <AntDesign name="right" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TeacherMaterial')}
        >
          <Image
            source={require('../assets/Mat.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Material</Text>
          <AntDesign name="right" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StudCommunication')}
        >
          <Image
            source={require('../assets/comm.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Stud Communication</Text>
          <AntDesign name="right" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelfCommunication')}
        >
          <Image
            source={require('../assets/self.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Self Communication</Text>
          <AntDesign name="right" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TeacherRequest')}
        >
          <Image
            source={require('../assets/req.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Ask Request</Text>
          <AntDesign name="right" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
  },
  containerHeader: {
    marginTop: 90,
    padding: 10,
  },
  button: {
    backgroundColor: '#a9a9a9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  buttonIcon: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default TeacherHomePage;